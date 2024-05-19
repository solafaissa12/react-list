import './SearchItem.css'

const SearchItem = ({ searchItem, setSearchItem}) => {
  return (
    <form className='search-item' onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='SearchItem'>Search</label>
        <input 
          type='text'
          id='SearchItem'
          role='searchbox'
          placeholder='Search Items'
          value={searchItem} 
          onChange={(e)=>setSearchItem(e.target.value)}
        />
    </form>
  )
}

export default SearchItem