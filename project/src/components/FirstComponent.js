function FirstComponent(){
    const handlerClick = () =>{
        console.log("clicado")
    }
    return (
        <div>
            <p>Primeiro componente</p>
            <button onClick={handlerClick}>clica</button>
        </div>
    )
}

export default FirstComponent;