import React, { useState, useEffect } from 'react'
import { Radio, Card } from 'antd'

const Step3 = ({ onLogin }) => {
  const [authData, setAuthData] = useState({
    payType: null,
    getTicketType: null,
  })

  useEffect(() => {
    onLogin({
      authData,
    })
  }, [authData])
  return (
    <Card>
      <h5>交易方式：</h5>
      <Radio.Group
        onChange={(e) => {
          setAuthData({ ...authData, payType: e.target.props.payType, getTicketType: e.target.props.getTicketType })
          onLogin({
            authData,
          })
        }}
      >
        <Radio value={1} props={{ payType: '面交', getTicketType: '面交' }}>
          付款：面交 / 取票：面交
        </Radio>
        <Radio value={2} props={{ payType: '匯款', getTicketType: '店到店' }}>
          付款：匯款 / 取票：店到店
        </Radio>
        <Radio value={3} props={{ payType: '匯款', getTicketType: '自取' }}>
          付款：匯款 / 取票：自取
        </Radio>
      </Radio.Group>
    </Card>
  )
}

export default Step3
