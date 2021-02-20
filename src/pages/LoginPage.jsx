import React, { useState } from 'react'
import Styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { Button } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { userLogin } from '../utils/api'
import { message } from 'antd'

const StyledSection = Styled.div`
  text-align:center;
  padding:100px 200px;
`

const StyledH1 = Styled.h1`
  font-size: 32px;
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
          message.success('登入成功')
          toPage(history)
        } else {
          message.error('密碼錯誤，請重新輸入')
        }
      } else {
        message.error('帳號不存在，請重新輸入')
      }
    })
    .catch((err) => {
      message.error('無法登入')
      console.log(err)
    })
}

const LoginPage = () => {
  const history = useHistory()
  const defaultLoginInfo = { username: null, password: null }
  const [loginInfo, setLoginInfo] = useState(defaultLoginInfo)

  return (
    <StyledSection>
      <StyledH1>登入</StyledH1>
      <div>
        <Link to={`/login`}>
          <Button type="primary" className="mx-2">
            會員登入
          </Button>
        </Link>
        <Link to={`/signup`}>
          <Button>加入會員</Button>
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
          type="primary"
          onClick={() => {
            handleLogin(history, loginInfo)
          }}
        >
          登入
        </Button>
      </Form>
    </StyledSection>
  )
}

export default LoginPage
