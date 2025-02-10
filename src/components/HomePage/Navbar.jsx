import { routerConfig } from '../../routing/routerConfig';
import { NavLink } from 'react-router';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useContext } from 'react';
import { ContextoFavoritos } from '../../context/Favoritos';
import { Nav, Badge } from 'react-bootstrap';
import { isEmpty } from 'lodash';

export const NavBar = () => {
  const { favoritos, deleteFavorite } = useContext(ContextoFavoritos)

  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary mb-5" fixed="top">
        <Container>
          <Navbar.Brand>
            Star Wars Data Base
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {routerConfig.map((ruta) => {
                return (
                  <NavLink key={ruta.path} to={ruta.path} className="p-3" end>
                    {ruta.name}
                  </NavLink>
                );
              })}
            </Nav>
            {!isEmpty(favoritos) && (
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
        </Container>
      </Navbar>
      <hr />
    </>
  );
}
