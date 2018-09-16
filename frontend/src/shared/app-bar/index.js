import React from 'react'

import { NavLink } from 'react-router-dom'
import { Icon, Menu } from 'semantic-ui-react'

import './index.css'


export const AppBar = () => (
  <Menu className="AppBar" pointing secondary stackable>
    <Menu.Item
      className="AppBar-item animated rollIn"
      name="home"
      as={NavLink}
      to="/app/home/"
    >
      <img
        alt=""
        src="https://s3.amazonaws.com/genomics-geek.com/genomics-geek-logo.png"
      />
    </Menu.Item>
    <Menu.Item
      className="AppBar-item"
      name="about"
      icon="hand peace outline"
      as={NavLink}
      to="/app/about/"
    />
    <Menu.Item
      className="AppBar-item"
      name="blog"
      icon="comments outline"
      as={NavLink}
      to="/app/blog/"
    />
    <Menu.Item
      className="AppBar-item"
      name="publications"
      icon="newspaper outline"
      as={NavLink}
      to="/app/publications/"
    />
    <Menu.Item
      className="AppBar-item"
      name="software"
      icon="code branch"
      as={NavLink}
      to="/app/software/"
    />
    <Menu.Item
      className="AppBar-item"
      name="contact"
      icon="mail"
      as={NavLink}
      to="/app/contact/"
    />
    <Menu.Menu position="right">
      <Menu.Item name="github">
        <a
          className="AppBar-link"
          href="https://github.com/genomics-geek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="github" link size="large" />
        </a>
      </Menu.Item>
      <Menu.Item name="gitlab">
        <a
          className="AppBar-link"
          href="https://gitlab.com/genomics-geek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="gitlab" link size="large" />
        </a>
      </Menu.Item>
      <Menu.Item name="linkedin">
        <a
          className="AppBar-link"
          href="https://www.linkedin.com/in/michael-gonzalez-762aa837"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="linkedin" link size="large" />
        </a>
      </Menu.Item>
      <Menu.Item name="twitter">
        <a
          className="AppBar-link"
          href="https://twitter.com/TheCanesBoy2010"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="twitter" link size="large" />
        </a>
      </Menu.Item>
      <Menu.Item name="stack overflow">
        <a
          className="AppBar-link"
          href="https://stackoverflow.com/users/6212061/genomics-geek"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="stack overflow" link size="large" />
        </a>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)


export default AppBar
