import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail/ItemDetail';
import { getProyect } from '../../data/firebase.js';

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