import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { StoreItems } from './StoreItems'
import formatCurrency from './formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
function CartItem({id , quantity}) {

const {removeItemFromCart} = useShoppingCart()

    const item = StoreItems.find((i) => i.id === id);
    if(item == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center bg-light' style={{ marginBottom:"8px",paddingTop:"10px", paddingBottom:"10px" }}>

<img src={item.image} alt='' style={{width:'125px', height:"85px", objectFit:'cover'}}/>
<div className='me-auto'>
<div>
    {item.name}
    {quantity > 1 && 
    ( <span className='text-muted' style={{fontSize:'0.65rem'}}> X {quantity} </span>)}
</div>

<div className='text-muted' style={{fontSize:'0.75rem'}}>
{formatCurrency(item.price)}
</div>

</div>
<div>
  {formatCurrency(item.price * quantity)}
</div>

<Button variant='outline-danger'size='sm' onClick={()=> removeItemFromCart(id)}>
&times;
</Button>

    </Stack>
  )
}

export default CartItem
