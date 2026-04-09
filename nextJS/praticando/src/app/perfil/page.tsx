import TituloPagina from "@/components/TituloPagina";

export default function Perfil() {
    const nome = 'Felipe';

    return (
        <div>
            <TituloPagina>Página de Perfil</TituloPagina>

            <p>Seja Bem-vindo, {nome}</p>
        </div>
    );
}