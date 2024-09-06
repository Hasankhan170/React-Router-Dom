import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <>
    <div style={{
        display : 'flex',
        justifyContent : 'center',
        gap : '20px',
        padding : '10px',
        backgroundColor : 'black',
        fontSize : '20px'
    }}>
      <Link style={{
        textDecoration : 'none',
        color : 'white'
      }} to= "">Home</Link>
      <Link style={{
        textDecoration : 'none',
        color : 'white'
      }} to= "About">About</Link>
      <Link style={{
        textDecoration : 'none',
        color : 'white'
      }} to= "Contact">Contact</Link>
      <Link style={{
        textDecoration : 'none',
        color : 'white'
      }} to= "Service">Service</Link>
    </div>
    </>
  )
}

export default Navbar
