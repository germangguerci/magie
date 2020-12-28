import React from 'react'
import { Col, Row } from 'reactstrap'
import { useDispatch } from 'react-redux'

const Categories = ({ categorys }) => {
    const dispatch = useDispatch();
    console.log("entre: ", categorys)
    return (
      <Col lg="2">
        <div className="categoria__title">
          Categorias
          </div>
        <Row>
            {categorys && categorys.map(cat =>{
                return(<span>{cat.name}</span>)
            })}
        </Row>
      </Col>
    );
  };
  
  export default Categories;
