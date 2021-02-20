import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import 'antd/dist/antd.css'
import Styled from 'styled-components'
import { FacebookFilled, InstagramFilled, TwitterSquareFilled } from '@ant-design/icons'
import logoOrange from '../assets/logo_mockup_o.png'

const StyledPage = Styled.div`
  height: 100px;
  padding:0px 160px;
`
const StyledLogo = Styled.img`
  width: 176px;
  height: 47px;
`

const StyledIconGroup = Styled.div`
  padding: 0px 200px 0px 0px;
`

const Footer = () => {
  return (
    <StyledPage>
      <Navbar variant="dark">
        <a href="/">
          <StyledLogo src={logoOrange} alt="logo"></StyledLogo>
        </a>
        <Nav className="ml-auto">
          <StyledIconGroup>
            <a href="https://www.facebook.com/">
              <FacebookFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
            </a>
            <a href="https://twitter.com/">
              <TwitterSquareFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
            </a>
          </StyledIconGroup>
          <small>Copyright © 2021 聽團der人</small>
        </Nav>
      </Navbar>
    </StyledPage>
  )
}

export default Footer
