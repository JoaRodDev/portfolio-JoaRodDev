import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import LoaderCard from '../../../../components/LoaderCard';
import { technologyDB } from '../../../../data/firebase.js';
import "./listTechnologies.css"
import TecnologyIcon from '../TechnologyIcon';
import { Accordion, AccordionDetails, AccordionSummary, Typography  } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
{/* <Accordion TransitionProps={{ unmountOnExit: true }} /> */}


function ListTechnologies() {
    const [technology, setTechnology] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { categoryId } = useParams();

    useEffect(() => {
        if (!categoryId) {
            technologyDB().then((resp)=>{
                setTechnology(resp)
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
                <div className="cont_technologies">
                    {technology.map((CardIterada) => {
                        return <TecnologyIcon key={CardIterada.id} item={CardIterada}/>
                    })}
                </div>
            </>
            )
        }
    </>
  )
}

export default ListTechnologies;