import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProyect } from '../../data/Firebase';
import ItemDetail from './ItemDetail';

function ProyectDetail() {
  const [proyectDetail, setProyectDetail] = useState({title: "cargando..."});
  let params = useParams();

useEffect(() => {
    getProyect(params.id).then((res) => {
            setProyectDetail(res);
        })
        .catch((error) => alert(error));
    }, []);


  return (
    <ItemDetail {...proyectDetail} />
  )
}

export default ProyectDetail;