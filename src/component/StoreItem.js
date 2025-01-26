import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formatCurrency from './formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

const StoreItem = ({id, name, price, image, description})=> {

//  const {id, name, price, image, description} = props.data

const { getItemsQuantity, increaseCartQuantity ,  decreaseCartQuantity} = useShoppingCart();


 const quantity =  getItemsQuantity(id);

  return (
    <Card className='h-80' style={{borderRadius:"8px"}}>
    <Card.Img src={image}  variant='top' style={{ height:"290px", width:"80%", marginLeft:"auto", marginRight:"auto", borderBottom:"1px solid gray", objectFit:"cover", paddingTop:"10px", paddingBottom:"10px"}} className='img-fluid'/>
<Card.Body>
    <Card.Title>
        <div className='fs-5 pt-3 pb-3'> {name}</div>
        <div className='pb-3 text-muted' style={{fontSize:"16px"}}>Description: {description}</div>

        <div className='pt-2'>
        <div className='text-muted' style={{fontSize:"18px"}} >Price: {formatCurrency(price)}</div>

        <div>{quantity ===0 ?
         <Button style={{fontSize:"15px", backgroundColor:"palevioletred", border:"none", display:"flex", alignItems:"center",
           justifyContent:"center", margin:"auto"}} className='mt-3' size='sm'
          onClick={()=> increaseCartQuantity(id)} >Add to cart</Button>
        : 
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center",gap:"5px"}}
             className='mt-3'>

               <Button style={{ backgroundColor:"palevioletred", border:"none", textAlign:"center"}} size='sm' 
             onClick={()=>decreaseCartQuantity(id)}>-</Button>

            <span style={{fontSize:"18px"}} className='text-muted'>{quantity} in cart </span>

            <Button style={{ backgroundColor:"palevioletred", border:"none", textAlign:"center"}} size='sm' 
          onClick={()=>increaseCartQuantity(id) } >+</Button>
            </div>
            
            
            }


</div>
        </div>
        
    </Card.Title>
</Card.Body>

    </Card>
    



  )
}

export default StoreItem
