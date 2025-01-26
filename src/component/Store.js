import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {StoreItems} from '../component/StoreItems'
import StoreItem from '../component/StoreItem'

const Store = () => {
  return (
    <>
    <h1>Store</h1>
    <Row lg={4} md={2} sm={2} xs={1} className="g-5">

{StoreItems.map((item)=>(
  <Col key={item.id} >
  <StoreItem {...item} />

  </Col>
) )}
    </Row>
    </>
  )
}

export default Store
