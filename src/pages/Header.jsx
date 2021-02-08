import React from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

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
  // const username = localStorage && localStorage.getItem('username')

  return (
    <Navbar bg="info" variant="dark">
      <Button variant="info" onClick={() => toPage(history, '/')}>
        聽團der人
      </Button>
      <Nav className="ml-auto">
        <Button variant="warning" className="mx-1" onClick={() => toPage(history, '/')}>
          Home
        </Button>
        <Button variant="warning" className="mx-1" onClick={() => toPage(history, '/events')}>
          Events
        </Button>
        <Button variant="warning" className="mx-1" onClick={() => toPage(history, '/artists')}>
          Artists
        </Button>
        <Button variant="warning" className="mx-1" onClick={() => toPage(history, '/login')}>
          Login
        </Button>
        <Button variant="info">
          <Avatar size={40} icon={<UserOutlined />} onClick={() => clickAvator(history)} />
        </Button>
        {/* {username ? (
          <Button
            variant="danger"
            className="mx-1"
            onClick={() => {
              localStorage && localStorage.clear()
              alert('登出成功！')
              toPage(history, '/login')
            }}
          >
            登出
          </Button>
        ) : (
          <></>
        )} */}
      </Nav>
    </Navbar>
  )
}

export default Header
