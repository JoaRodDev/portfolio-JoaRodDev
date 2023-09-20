import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import CardProyect from './CardsProyects';
import { proyectsCategory, proyectsDB } from '../../../data/Firebase';

function ListProyects() {
    const [proyects, setProyects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            proyectsDB().then((resp)=>{
                setProyects(resp)
            })
            .catch((error) => alert(error))
            .finally(()=> setIsLoading(false))
        } else {
            proyectsCategory(categoryId).then((resp) => {
                setProductos(resp);
                setIsLoading(false);
            })
            .finally(()=> setIsLoading(false))
        } 
    },[categoryId]);
  return (
    <>
    {isLoading ? (
        <h3>CARGANDO...</h3>
    ) : (
        <>
            <div className="productosContainer">
                {proyects.map((CardIterada) => {
                    return <CardProyect key={CardIterada.id} item={CardIterada}/>                   
                })}
            </div>
        </>
        )
    }
        
    </>
  )
}

export default ListProyects;