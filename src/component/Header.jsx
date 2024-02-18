import React, { Component } from 'react';
import { MenuItem, Menu } from 'semantic-ui-react';
import logo from '../assets/seo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu inverted alt="navbar">
        <MenuItem header>
          <img className="spin" alt="logo" src={logo}></img>
        </MenuItem>
        <MenuItem
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        />
        <MenuItem
          name="services"
          active={activeItem === 'services'}
          onClick={this.handleItemClick}
          as={Link}
          to="/services"
        />

        <MenuItem
          name="contact"
          active={activeItem === 'contact'}
          onClick={this.handleItemClick}
          as={Link}
          to="/contact"
        />
      </Menu>
    );
  }
}
