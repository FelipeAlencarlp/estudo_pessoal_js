const inputNome = document.querySelector('#inputNome');
const inputEmail = document.querySelector('#inputEmail');
const inputTelefone = document.querySelector('#inputTelefone');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaUsuarios = document.querySelector('#listaUsuarios');
const inputBusca = document.querySelector('#inputBusca');

// banco de dados simulado com localStorage ou array
let usuarios = carregarUsuarios();

let termoBusca = '';

// busca de usuários
inputBusca.addEventListener('input', (event) => {
    termoBusca = event.target.value.toLowerCase();

    renderizarUsuarios();
});

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

    const usuariosFiltrados = usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(termoBusca) ||
        usuario.email.toLowerCase().includes(termoBusca)
    );

    usuariosFiltrados.forEach((usuario) => {
        const li = document.createElement('li');

        // editar usuário
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        
        botaoEditar.addEventListener('click', () => {
            editarUsuario(usuario.id);
        });

        // excluir usuário
        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        botaoExcluir.addEventListener('click', () => {
            removerUsuario(usuario.id);
        });

        li.textContent = `${usuario.nome} | ${usuario.email} | ${usuario.telefone} `;
        
        li.appendChild(botaoEditar);
        li.appendChild(botaoExcluir);

        // listar usuário
        listaUsuarios.appendChild(li);
    });
}

// criar usuário
btnAdicionar.addEventListener('click', () => {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const telefone = inputTelefone.value.trim();

    // validação
    if (!nome || !email || !telefone) {
        alert('Obrigatório preencher todos os campos!');
        return;
    }

    // objeto do usuário
    const novoUsuario = {
        id: Date.now(),
        nome: nome,
        email: email,
        telefone: telefone
    };

    const emailExiste = usuarios.some(usuario => usuario.email === inputEmail.value);
    // some() -> verifica se algum item do array atende a condição

    if (emailExiste) {
        alert('Este e-mail já está em uso!');
        return;
    }

    usuarios.push(novoUsuario);
    alert('Usuário cadastrado com sucesso!');
    
    // persistencia de dados
    salvarUsuarios();

    renderizarUsuarios();
    
    inputNome.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
});

// função para remover usuário da lista
function removerUsuario(id) {
    const confirmar = confirm('Tem certeza que deseja excluir este usuário?');

    if (!confirmar) return;

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

renderizarUsuarios();