import React from 'react'
import { Button, Container,Nav , Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import iconCart from '../assets/iconCart.png'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
  const {openCart, cartQuantity  } = useShoppingCart();

  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-5'>
<Container>
<Nav className='me-auto'>
// <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
<Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
// <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
</Nav>

<Button onClick={()=> openCart()} style={{width: 40, height:40, position:"relative" ,display: 'flex', 
    alignItems:"center", justifyContent:"center", borderRadius:"50%", border:"none", backgroundColor:"gainsboro"}}  >

    <img src={iconCart} alt='' className='img-fluid' style={{width:"30px",height:"20px", color:"white"}}/>

    <span style={{ display:"flex", justifyContent:"center", alignItems:"center", 
         backgroundColor:"palevioletred", color:"white", width:20, height:20, position:"absolute",
         borderRadius:"50%", bottom:0, right:0, transform:"translate(25%, 25%)" ,textAlign:'center', fontSize:"15px" }} 
         >{cartQuantity} </span>
</Button>

</Container>
    </NavbarBs>
  )
}

export default Navbar
