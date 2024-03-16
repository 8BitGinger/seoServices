import React, { Component } from 'react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import logo from '../assets/rocketShip.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <nav>
        <Menu inverted className="navbar">
          <Link to="/">
            <img className="float" alt="rocket ship" src={logo}></img>
          </Link>
          <div className="icons">
            <MenuItem
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              as={Link}
              to="/"
            >
              <Icon className="icon" name="home" />
            </MenuItem>
            <MenuItem
              name="services"
              active={activeItem === 'services'}
              onClick={this.handleItemClick}
              as={Link}
              to="/services"
            >
              <Icon className="icon" name="chart bar outline" />
            </MenuItem>

            <MenuItem
              name="contact"
              active={activeItem === 'contact'}
              onClick={this.handleItemClick}
              as={Link}
              to="/contact"
            >
              <Icon className="icon" name="envelope open outline" />
            </MenuItem>
          </div>
        </Menu>
      </nav>
    );
  }
}
