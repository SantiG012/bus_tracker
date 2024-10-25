
import React, { useState, useEffect } from "react";
import './styles.css'
import { Header } from '../../layouts/header';
import { Footer } from '../../layouts/footer';

import { fetchRoutes, createRoute, updateRoute, deleteRoute } from "../../api/routesApi";

import RoutesCard from "../../components/routes/routesCard";
import RoutesForm from "../../components/routes/routesForm";

const RoutesPage = () =>{
  const empty = {
    name:"",
    description:""
  }
  const [routes, setRoutes] = useState([]);
  const [selected, setRoute] = useState(empty);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(()=>{
    const getRoutes = async () =>{
      const data = await fetchRoutes();
      setRoutes(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    };
    getRoutes();
  }, []);

  const createOrUpdate = async (a_route) =>{
    if(isEditing){
      await updateRoute(selected.id, a_route); 
      setRoute(empty)
      const data = await fetchRoutes();
      setRoutes(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }else{
      await createRoute(a_route); 
      setRoute(empty)
      const data = await fetchRoutes();
      setRoutes(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
    }
  }

  const handleEdit = (a_route) =>{
    setRoute(a_route)
    setIsEditing(true)
  }

  const handleDelete  = async (a_route) =>{
    await deleteRoute(a_route.id); 
    const data = await fetchRoutes();
    setRoutes(data.sort((a,b)=> a.id > b.id? 1 : -1 ));
  }

  return (
    <div className="dashboard-container">
      <Header/>
      <main className="dashboard-main">
        <section id="routes" className="dashboard-section">
          <h2>Gestión de rutas</h2>
          <div className="routesListContainer"> {/* Formulario */} 
            <div className="routesListChild">
              <RoutesForm busData={selected} onSubmit={createOrUpdate} />
            </div> {/* lista de buses */} 
            <div className="routesListChild" style={{overflow:"scroll", height:"80vh"}}> 
              {routes.map((a_route)=>(
                <RoutesCard key={a_route.id} a_route={a_route} onEdit={handleEdit} onDelete={handleDelete} />   
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default RoutesPage;