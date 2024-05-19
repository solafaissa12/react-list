import {FaTrashAlt} from 'react-icons/fa'


const LineItem = ({ item, handlechange, handledelete}) => {
  return (
        <li className='item'>
            <input
                type='checkbox'
                onChange={()=>handlechange(item.id)}
                checked={item.checked}
                style={(item.checked)? {color:'red'}: null}
            />
            <label
                onClick={()=>handlechange(item.id)}
                style={(item.checked)? {textDecoration:'line-through'}: null}
            >
                {item.item}
            </label>
            <FaTrashAlt onClick={()=>handledelete(item.id)} role="button" /> {/* saved as svg */}
        </li>
    )
}

export default LineItem