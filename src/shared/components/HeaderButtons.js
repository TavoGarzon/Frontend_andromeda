import React, {useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";
import ReactDOM from 'react-dom';
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { NavDropdown } from 'react-bootstrap';

const HeaderButtons = () => {
  const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Ingresar')
    const [Name, setName] = useState('')
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Salir')
            setName(user.name)
        }else{
            setTextButton('Ingresar')
        }
        
    }, [isAuthenticated])
    
    useEffect(() => {
       const getToken = async ()=>{
           const accessToken = await getAccessTokenSilently();
           localStorage.setItem('token', accessToken)
      }  
      if(isAuthenticated){
          getToken();
      }
    }, [isAuthenticated, getAccessTokenSilently])

  if (isAuthenticated) {
    return (
      <React.Fragment>
        {/* <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Venticas
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item Link to="SistemaVentas" >Ingresar Venta</Dropdown.Item>
            <Dropdown.Item href="/SistemaVentas">Consultar Ventas</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Modificar Venta</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}

        <Link to="/SistemaVentas">
          <Button variant="primary" className="me-3">
            Ingresar Ventas
          </Button>
        </Link>

        {/* <Link to="/Carrito">
          <Button variant="primary" className="me-3">
            Carrito <Badge bg="primary">{cantCarrito}</Badge>
          </Button>
        </Link> */}

        <Link to="/VentasRealizadas">
          <Button variant="primary" className="me-3">
            Gestionar Ventas
          </Button>
        </Link>

        <Link to="/CrearProducto">
          <Button variant="primary" className="me-3">
            Ingresar producto
          </Button>
        </Link>

        <Link to="/Gestion">
          <Button variant="primary" className="me-3">
            Gestionar Productos
          </Button>
        </Link>

        <Link to="/ProductosDisponibles">
          <Button variant="primary" className="me-3">
            Productos Andromeda 
          </Button>
        </Link>

        <Link to="/CrearUsuario">
          <Button variant="primary" className="me-3">
            Crear Usuarios
          </Button>
        </Link>

        <Link to="/TablaGestorUsuario">
          <Button variant="primary" className="me-3">
            Gestion Usuarios
          </Button>
        </Link>
        <NavDropdown title={Name} id="navbar">
        <NavDropdown.Item>
          <Link to="/">
          <Button variant="primary" onClick={logout}>
            Salir
          </Button>
        </Link></NavDropdown.Item>
        </NavDropdown>
      </React.Fragment>
    );
  } else {
    return (
      <div>
        <Link to="/ProductosDisponibles">
          <Button variant="primary" className="me-3">
            Productos Andromeda
          </Button>
        </Link>
         {
        isAuthenticated ?
        <button
        onClick={()=>logout({returnTo: window.location.origin})}
        className="btn btn-primary"> {textButton} </button> :
        <button
        onClick={()=>loginWithRedirect()}
        className="btn btn-primary"> {textButton} </button> 
    }
 
      </div>
    );
  }
};

export default HeaderButtons;