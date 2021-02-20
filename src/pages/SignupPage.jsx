import React, { useState } from 'react'
import Styled from 'styled-components'
import { Form } from 'react-bootstrap'
import { Button } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { userSignup, userLogin } from '../utils/api'
import { message } from 'antd'
const StyledSection = Styled.div`
  text-align:center;
  padding:100px 200px;
`

const StyledH1 = Styled.h1`
  font-size: 32px;
`

const signupFunc = (history, loginInfo) => {
  userLogin(loginInfo.username)
    .then((res) => {
      if (res.records.length > 0) {
        message.error('此帳號已被註冊')
      } else {
        userSignup(loginInfo)
          .then((res) => {
            if (res) {
              message.success('註冊成功')
              history.push('/')
            } else {
              message.error('錯誤')
            }
          })
          .catch((err) => {
            message.error('無法登入')
            console.log(err)
          })
      }
    })
    .catch((err) => {})
}

const SignupPage = () => {
  const history = useHistory()
  const defaultSignup = { username: '', password: '', email: '', description: '' }
  const [signupInfo, setSignupInfo] = useState(defaultSignup)

  return (
    <StyledSection>
      <StyledH1>註冊</StyledH1>
      <div>
        <Link to={`/login`}>
          <Button className="mx-2">會員登入</Button>
        </Link>
        <Link to={`/signup`}>
          <Button type="primary">加入會員</Button>
        </Link>
      </div>
      <Form className="my-4">
        <Form.Group controlId="formUsername">
          <Form.Control
            placeholder="使用者名稱"
            onChange={(e) => {
              setSignupInfo((prev) => ({ ...prev, username: e.target.value }))
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="密碼"
            onChange={(e) => {
              setSignupInfo((prev) => ({ ...prev, password: e.target.value }))
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="電子郵件"
            onChange={(e) => {
              setSignupInfo((prev) => ({ ...prev, email: e.target.value }))
            }}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox"></Form.Group>
        <Button
          type="primary"
          onClick={() => {
            signupFunc(history, signupInfo)
          }}
        >
          註冊
        </Button>
      </Form>
    </StyledSection>
  )
}

export default SignupPage
