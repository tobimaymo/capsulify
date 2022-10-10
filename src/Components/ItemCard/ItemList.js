import ItemCard from "../ItemCard/ItemCard"

function ItemList({productos}) {
    
    return (
        productos.map((data) => 
        <ItemCard key={data.id} data={data}/>
        )
    )
}

export default ItemList