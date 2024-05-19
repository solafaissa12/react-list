import './Text.css'

const Text = ({ color, isDark }) => {
  return (
    <div className='text' style={{backgroundColor:color, color:isDark?'#fff': '#000'}}>
        <p>{color? color: 'Empty Value'}</p>
    </div>
  )
}
Text.defaultProps={
    color:'empty color value'
}

export default Text