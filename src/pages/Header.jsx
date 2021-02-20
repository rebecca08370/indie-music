import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import Styled from 'styled-components'
import logoWhite from '../assets/logo_mockup_w.png'

const StyledPage = Styled.div`
  padding:0px 160px;
  background-color: #545454;
`

const StyledLogo = Styled.img`
  width: 176px;
  height: 47px;
`

const StyledNavItem = Styled.a`
  color:white;
  font-size:20px;
`

const SyledButton = Styled.button`
  width: 80px;
  height: 30px;
  border-radius: 30px;
  background-color: #ff7a64;
  color:white;
`

const toPage = (history, url) => {
  history.push(url)
}

const clickAvator = (history) => {
  const userId = localStorage && localStorage.getItem('id')
  if (userId) {
    history.push(`/users/${userId}`)
  } else {
    history.push('/login')
  }
}

const Header = () => {
  const history = useHistory()

  return (
    <StyledPage>
      <Navbar variant="dark">
        <a href="/">
          <StyledLogo src={logoWhite} alt="logo"></StyledLogo>
        </a>
        {/* <StyledNavItem onClick={() => toPage(history, '/')}>聽團der人</StyledNavItem> */}
        <Nav className="ml-auto">
          <StyledNavItem variant="warning" className="mx-2" onClick={() => toPage(history, '/about')}>
            About Us
          </StyledNavItem>
          <StyledNavItem variant="warning" className="mx-2" onClick={() => toPage(history, '/events')}>
            演出活動
          </StyledNavItem>
          <StyledNavItem variant="warning" className="mx-2" onClick={() => toPage(history, '/artists')}>
            樂團
          </StyledNavItem>
          <SyledButton variant="warning" className="mx-2" onClick={() => toPage(history, '/sellticket')}>
            我要售票
          </SyledButton>
          <StyledNavItem variant="info">
            <Avatar size={30} icon={<UserOutlined />} onClick={() => clickAvator(history)} />
          </StyledNavItem>
        </Nav>
      </Navbar>
    </StyledPage>
  )
}

export default Header
