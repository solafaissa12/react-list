import './Input.css'

const Input = ({ color, setColor,isDark, setIsDark }) => {
  return (
    <form className='input' onSubmit={(e)=>e.preventDefault()}>
        <input
           autoFocus
           type='text'
           placeholder='add color name'
           value={color}
           onChange={(e)=>{setColor(e.target.value)}}
        />
        <button 
          type='button'
          onClick={()=>setIsDark(!isDark)}
         >
            change text color
        </button>
    </form>
  )
}

Input.defaultProps={
    color:'empty color value',
    setColor:''
}

export default Input