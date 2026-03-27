const inputNome = document.querySelector('#inputNome');
const inputEmail = document.querySelector('#inputEmail');
const inputTelefone = document.querySelector('#inputTelefone');
const btnAdicionar = document.querySelector('#btnAdicionar');
const inputBusca = document.querySelector('#inputBusca');
const listaUsuarios = document.querySelector('#listaUsuarios');

let usuarios = carregarUsuarios();
let totalUsuarios = 0;

// variável de controle para o botão ADICIONAR
// vai decidir se Cria novo ou Salva edição
let usuarioEditandoId = null;

// busca de usuários
let termoBusca = '';

inputBusca.addEventListener('input', (event) => {
    termoBusca = event.target.value.toLowerCase();

    renderizarUsuarios();
});

// função para carregar usuários
async function carregarUsuarios() {
    const resposta = await fetch('http://localhost:3000/usuarios');
    const json = await resposta.json();

    usuarios = json.data;
    totalUsuarios = json.pagination.total;

    renderizarUsuarios();
}

// função para adicionar usuário
async function adicionarUsuario() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const telefone = inputTelefone.value.trim();

    if (!nome || !email || !telefone) {
        alert('Obrigatório preencher todos os campos!');
        return;
    }

    const usuario = {
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
    
    await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    });

    carregarUsuarios();
    limparInputs();
}

// função para remover usuário da lista
async function removerUsuario(id) {
    const confirmar = confirm('Tem certeza que deseja excluir este usuário?');

    if (!confirmar) return;

    await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE'
    });

    carregarUsuarios();
    limparInputs();
}

// função para atualizar usuário
async function atualizarUsuario() {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const telefone = inputTelefone.value.trim();

    if (!nome || !email || !telefone) {
        alert('Não é possível salvar dados em branco!');
        return;
    }

    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    await fetch(`http://localhost:3000/usuarios/${usuarioEditandoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    });

    carregarUsuarios();
    limparInputs();

    usuarioEditandoId = null;
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
    if (usuarioEditandoId) {
        atualizarUsuario();
    } else {
        adicionarUsuario();
    }
});

// função para editar usuário da lista
function editarUsuario(id) {
    const usuario = usuarios.find(usuario => usuario.id === id);

    inputNome.value = usuario.nome;
    inputEmail.value = usuario.email;
    inputTelefone.value = usuario.telefone;

    usuarioEditandoId = id;
}

// função para limpar imputs
function limparInputs() {
    inputNome.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
}