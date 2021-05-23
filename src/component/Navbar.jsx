import React from 'react';
import {Link, withRouter, NavLink } from 'react-router-dom';
import { Container, Menu} from 'semantic-ui-react';
const Navbar = (props) => {
  setTimeout(() =>{
    props.history.push('../about')
  },10000)
  return (
    <Container>
      <Menu>
        <Menu.Item>
          <nav className="ui raised very padded segment">
            <Link >Gloria</Link>
            <div className="ui right floated segment">
              <button>
                <Link to="/">Home</Link>
              </button>
              <button>
                <NavLink to="/about">About </NavLink>
              </button>
              <button>
                <NavLink to="/contact">Contact</NavLink>
              </button>
            </div>
          </nav>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default withRouter(Navbar);
// # withRouter higher order componenet