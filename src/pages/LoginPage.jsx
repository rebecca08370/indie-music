import React, { useState } from 'react'
import Styled from 'styled-components'
import { Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { userLogin } from '../utils/api'

const StyledLogin = Styled.div`
  padding:60px
`

const toPage = (history) => {
  history.push('/')
}

const handleLogin = (history, loginInfo) => {
  const uName = loginInfo.username
  const uPass = loginInfo.password
  userLogin(uName)
    .then((res) => {
      if (res.records[0]) {
        const realPass = res.records[0].fields.password
        if (uPass === realPass) {
          localStorage && localStorage.setItem('id', res.records[0].id)
          localStorage && localStorage.setItem('username', res.records[0].fields.username)
          localStorage && localStorage.setItem('password', res.records[0].fields.password)
          localStorage && localStorage.setItem('email', res.records[0].fields.email)
          localStorage && localStorage.setItem('description', res.records[0].fields.description)
          alert('登入成功')
          toPage(history)
        } else {
          alert('密碼錯誤，請重新輸入')
        }
      } else {
        alert('帳號不存在，請重新輸入')
      }
    })
    .catch((err) => {
      alert('無法登入')
      console.log(err)
    })
}

const LoginPage = () => {
  const history = useHistory()
  const defaultLoginInfo = { username: null, password: null }
  const [loginInfo, setLoginInfo] = useState(defaultLoginInfo)

  return (
    <StyledLogin>
      <h1>LoginPage</h1>
      <div>
        <Link to={`/login`}>
          <Button variant="info" className="mx-2">
            會員登入
          </Button>
        </Link>
        <Link to={`/signup`}>
          <Button variant="light">加入會員</Button>
        </Link>
      </div>
      <Form className="my-4">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            placeholder="使用者名稱"
            onChange={(e) => {
              setLoginInfo((prev) => ({ ...prev, username: e.target.value }))
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="密碼"
            onChange={(e) => {
              setLoginInfo((prev) => ({ ...prev, password: e.target.value }))
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            handleLogin(history, loginInfo)
          }}
        >
          登入
        </Button>
      </Form>
    </StyledLogin>
  )
}

export default LoginPage
