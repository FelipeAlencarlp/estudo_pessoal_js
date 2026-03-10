const inputUsuario = document.querySelector('#inputUsuario');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaUsuarios = document.querySelector('#listaUsuarios');

// banco de dados simulado com localStorage ou array
let usuarios = carregarUsuarios();

// função para carregar usuários
function carregarUsuarios() {
    const dados = localStorage.getItem('usuarios');

    if (!dados) return [];

    return JSON.parse(dados);
}

// função para salvar usuário
function salvarUsuarios() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // localStorage só aceita string, então utiliza-se JSON.stringify
    // que converte o array para string
}

// função para renderizar usuário
function renderizarUsuarios() {
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario) => {
        const li = document.createElement('li');

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';

        // excluir usuário
        botaoExcluir.addEventListener('click', () => {
            removerUsuario(usuario.id);
        });

        // editar usuário
        botaoEditar.addEventListener('click', () => {
            editarUsuario(usuario.id);
        });

        li.textContent = usuario.nome + ' ';
        
        li.appendChild(botaoExcluir);
        li.appendChild(botaoEditar);

        // listar usuário
        listaUsuarios.appendChild(li);
    });
}

// criar usuário
btnAdicionar.addEventListener('click', () => {
    const nome = inputUsuario.value.trim();
    // trim() -> remove espaços vazios

    // validação
    if (!nome) {
        alert('Digite um nome válido!');
        return;
    }

    // objeto do usuário
    const novousuario = {
        id: Date.now(),
        nome: nome
    };

    usuarios.push(novousuario);

    // persistencia de dados
    salvarUsuarios();

    renderizarUsuarios();

    inputUsuario.value = '';
});

// função para remover usuário da lista
function removerUsuario(id) {
    const index = usuarios.findIndex(usuario => usuario.id === id);

    if (index !== -1) {
        usuarios.splice(index, 1);
        // splice() -> index e quantidade

        // persistencia de dados
        salvarUsuarios();

        renderizarUsuarios();
    }
}

// função para editar usuário da lista
function editarUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);

    const novoNome = prompt('Digite o novo nome:').trim();

    if (!novoNome) return;

    usuario.nome = novoNome;

    // persistencia de dados
    salvarUsuarios();

    renderizarUsuarios();
}