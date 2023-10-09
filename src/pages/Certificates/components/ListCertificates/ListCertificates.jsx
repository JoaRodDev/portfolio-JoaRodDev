import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "./ListCertificates.css"
import { certificatesDB } from '../../../../data/firebase';
import LoaderCard from '../../../../components/LoaderCard';
import CerificateCard from '../CertificateCard';


function ListCertificates() {
    const [certificate, setCertificate] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
          certificatesDB().then((resp)=>{
            setCertificate(resp)
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
            <div className='cont_loaderCard'>
                    <LoaderCard />
                </div>
        ) : (
            <>
                <div className="cont_certificades">
                    {certificate.map((CardIterada) => {
                        return <CerificateCard key={CardIterada.id} item={CardIterada}/>
                    })}
                </div>
            </>
            )
        }
    </>
  )
}

export default ListCertificates;