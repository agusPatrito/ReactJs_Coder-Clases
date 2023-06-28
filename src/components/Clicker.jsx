import {useState} from 'react'

export const Clicker = ()=>{
    const [counter, setCounter] = useState(0)

    const [saludo, setSaludo] = useState(false)

    const clickear = () =>{
        setCounter(counter + 1)
    }
    
    const cambiarSaludo = () =>{
        setSaludo(!saludo)
    }
    return(
        <div>
            <h2>Clicker</h2>
            <hr />
            <button onClick={clickear}>Click Me!</button>
            <p>Clicks : {counter}</p>
            <hr />
            <h3>Saludo</h3>
            <button onClick={cambiarSaludo}>Saludo</button>
            <p>{saludo ?  'Hola' : 'Chau'}</p>
        </div>

    )
}