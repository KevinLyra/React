import { useState } from "react";

const Compteur = () => {
    const [count , setCount] = useState(0);
    const [player , setPayer] = useState("");

    return (
        
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(0)}>Reset</button>

            {count === 10 ? <p>boom</p> : null}
            <p>Ton nom est {player}</p>
            <input type="text" value={player} onChange={e =>setPayer(e.target.value)}></input>
        </>
    )
}

export default Compteur;