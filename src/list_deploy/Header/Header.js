import './Header.css'

const Header = ({ title }) => {
  return (
    <div className='Header'>
      {title}
    </div>
  )
}

Header.defaultProps={
  title: "Default Header"
}

export default Header