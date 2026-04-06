/*
    CONTEXT API

    Problema que ela resolve
        Isso:
            <App>
                <Lista>
                    <Item>
                        <Botao />
        
        E faço:
            <App -> Lista -> Item -> Botao>
            -> passando props por vários níveis

        Isso vira um inferno:
            <App>
                <A>
                    <B>
                        <C>
                            <D>
                                <E usuario={usuario} />
            -> mesmo quem não usa precisa receber

    SOLUÇÂO
        -> Context API

        Permite:
            qualquer componente acessar dados globalmente

    EXEMPLO REAL
        -> usuário logado

        Você não quer passar:
            usuario -> header -> sidebar -> componente...

    COMO FUNCIONA (3 partes)
        1. Criar contexto
            import { createContext } from 'react';

            export const UsuarioContext = createContext();

        2. Criar Provider
            export function UsuarioProvider({ children }) {
                const usuario = { nome: 'Felipe' };

                return (
                    <UsuarioContext.Provider value={usuario}>
                        {children}
                    </UsuarioContext.Provider>
                );
            }

        3. Usar contexto
            import { useContext } from 'react';
            import { UsuarioContext } from './UsuarioContext';

            function Componente() {
                const usuario = useContext(UsuarioContext);

                return <p>{usuario.nome}</p>
            }

        RESUMO
            Parte           Função
            -------------------------------
            createContext   cria o contexto
            -------------------------------
            Provider        fornece dados
            -------------------------------
            useContext      consome

        REGRA DE OURO
            -> 'useContext' só funciona dentro do Provider
            -> Serve para:
                - usuário logado
                - tema
                - idioma
                - configs globais

        NÂO USAR PARA TUDO
            -> não substitui 'useState' local
*/