import LineItem from "./LineItem"

const ListItem = ({ items, handlechange, handledelete}) => {
  return (
    <ul>
        {items.map((item)=>{
        return (
          <LineItem
            key={item.id}
            item={item}
            handlechange={handlechange}
            handledelete={handledelete}
          />
          )
            
        })}
    </ul>
  )
}

export default ListItem