import React,{useState,useEffect} from 'react'
import { Container, Col, Row, UncontrolledCarousel } from "reactstrap";
import {getAllCategories} from '../../redux/storeReducer/actions'
import Categoria from "./categories";
import Catalogo from "./catalogo"
import { useSelector, useDispatch } from "react-redux";




const HomeStore = () =>{
    const categorias = useSelector((state) => state.productCategories);
    const dispatch = useDispatch()
    //mostrar categorias
    //mostrar recent items o fav items

    
    useEffect(() => {
        (async () => {
          dispatch(getAllCategories());
        })();
      }, [dispatch]);


    return (
        <Container fluid={true} className="mt-4">
        <Row>
           <Categoria categorys={categorias} />
          <Catalogo/>
        </Row>
      </Container>
    )
}

export default HomeStore;