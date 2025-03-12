import { NavLink } from 'react-router';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useContext } from 'react';
import { ContextoFavoritos } from '../../context/Favoritos';
import { Nav, Badge, Button } from 'react-bootstrap';
import { isEmpty } from 'lodash';
import { UserContext } from '../../context/UserContext';
import { navbarRoutes } from '../../routing/navbarRoutes';

export const NavBar = () => {
  const { favoritos, deleteFavorite } = useContext(ContextoFavoritos)
  const { user,logout } = useContext(UserContext)

  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary mb-5" fixed="top">
        <Container>
          <NavLink to="/" className="text-decoration-none">
          <Navbar.Brand >
            Star Wars Data Base
          </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navbarRoutes.map((ruta) => {
                return (
                  <NavLink key={ruta.path} to={ruta.path} className="p-3" end>
                    {ruta.name}
                  </NavLink>
                );
              })}
            </Nav>
            {!isEmpty(user) && !isEmpty(favoritos) && (
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Favorites"
                  menuVariant="light"
                >
                  {favoritos.map((fav) => {
                    return (
                      <NavDropdown.Item as="div" key={`${fav.type_enum}${fav.favorite_id}`}>
                        <NavLink to={`${fav.type_enum}/${fav.external_id}`}>
                          {fav.name}
                        </NavLink>
                        <Badge as="button" bg="danger" className='ms-2' onClick={() => {
                          deleteFavorite(fav.external_id, fav.type_enum, fav.favorite_id)
                        }}>X</Badge>
                      </NavDropdown.Item>
                    )
                  })}
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        {!isEmpty(user) && (
          <Button className="bg-black text-warning m-3" onClick={()=> logout()}>
            Logout
            </Button>
          )}
        </Container>
      </Navbar>
      <hr />
    </>
  );
}
