const List = () =>{

    const items = [
        {
            id: 1,
            name:"Vitor"
        },
        {
            id:2,
            name:"teste"
        }
    ]

    return (
        <div>
            {items.map((item) => (
                    <p key={item.id}>
                        {item.id} - {item.name}
                    </p>
            ))}
        </div>
    )
}

export default List