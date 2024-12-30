import { routerConfig } from '../../routing/routerConfig';
import { NavLink } from 'react-router';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
  return (<>
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand>Star Wars Data Base</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {routerConfig.map((ruta) => {
            return (
              <NavLink key={ruta.path} to={ruta.path} className="p-3" end>
                {ruta.name}
              </NavLink>
            );
          })}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  );
}
