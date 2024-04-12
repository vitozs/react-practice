const RenderCond = ({x}) => {
    return (
        <div>
            {x > 5 ? <p>X e maior que 5</p> : <p>X menor que 5</p>}
        </div>
    )
}

export default RenderCond