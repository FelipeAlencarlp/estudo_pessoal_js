const inputUsuario = document.querySelector('#inputUsuario');
const btnAdicionar = document.querySelector('#btnAdicionar');
const listaUsuarios = document.querySelector('#listaUsuarios');

// banco de dados simulado com localStorage ou array
let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

// função para renderizar usuário
function renderizarUsuarios() {
    listaUsuarios.innerHTML = '';

    usuarios.forEach((usuario, index) => {
        const li = document.createElement('li');

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';

        // excluir usuário
        botaoExcluir.addEventListener('click', () => {
            usuarios.splice(index, 1);
            // splice() -> remove o indice, com 1 quantidade

            // persistencia de dados
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            renderizarUsuarios();
        });

        // editar usuário
        botaoEditar.addEventListener('click', () => {
            const novoNome = prompt('Digite o novo nome');

            usuarios[index] = novoNome;

            // persistencia de dados
            localStorage.setItem('usuarios', JSON.stringify(usuarios));

            renderizarUsuarios();
        });

        li.textContent = usuario + ' ';
        
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

    usuarios.push(nome);

    // persistencia de dados
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    // localStorage só aceita string, JSON.stringify
    // converte o array para string

    renderizarUsuarios();

    inputUsuario.value = '';
});