import {useState} from "react"
const Hooks = () => {
    let idade = 30
    const [novaIdade, setNovaIdade] = useState(40)
    
    const changeAge = () => {
        idade = 13
        console.log(idade)
    }
    
    const changeNewAge = () => {
        setNovaIdade(45)
    }
    
    return(       
        <div>
            <p>idade {idade}</p>
            <button onClick={changeAge}>Mudar idade</button>
            <p>idade {novaIdade}</p>
            <button onClick={changeNewAge}>Mudar nova idade</button>
        </div>
    )

}

export default Hooks