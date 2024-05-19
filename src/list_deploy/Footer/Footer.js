import './Footer.css'

const Footer = ({ length }) => {
  return (
    <div className='Footer'>
      {length} list {length===1 ? 'item' : 'items'}
    </div>
  )
}

export default Footer