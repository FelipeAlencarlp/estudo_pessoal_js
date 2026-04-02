import { useTheme } from "./contexts/useTheme";

function Texto() {
    const { tema } = useTheme();

    return (
        <p>
            O tema atual é: {tema}
        </p>
    );
}

export default Texto;