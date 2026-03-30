import { useState, useEffect } from 'react';

function Relogio() {
    const [tempo, setTempo] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempo((t) => t + 1);
        }, 1000);

        return () => {
            clearInterval(intervalo);
        };
    }, []);
}

export default Relogio;