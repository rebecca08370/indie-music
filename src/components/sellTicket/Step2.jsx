import React, { useState, useEffect } from 'react'
import { Card, Input } from 'antd'

const Step2 = ({ onLogin }) => {
  const [authData, setAuthData] = useState({
    ticketType: null,
    boughtPrice: null,
    sellPrice: null,
    quantity: null,
  })

  useEffect(() => {
    onLogin({
      authData,
    })
  }, [authData])

  return (
    <Card>
      <h4 className="p-1">票券資訊</h4>
      販售票種：
      <Input
        required
        className="mb-2"
        type="text"
        placeholder="販售票種"
        value={authData.ticketType}
        onChange={(e) => {
          setAuthData({ ...authData, ticketType: e.target.value })
          onLogin({
            authData,
          })
        }}
      />
      張數：
      <Input
        className="mb-2"
        type="text"
        placeholder="張數"
        value={authData.quantity}
        onChange={(e) => {
          setAuthData({ ...authData, quantity: e.target.value })
          onLogin({
            authData,
          })
        }}
      />
      購入價格：
      <Input
        className="mb-2"
        type="text"
        placeholder="購入價格"
        value={authData.boughtPrice}
        onChange={(e) => {
          setAuthData({ ...authData, boughtPrice: e.target.value })
          onLogin({
            authData,
          })
        }}
      />
      售價：
      <Input
        className="mb-2"
        type="text"
        placeholder="售價"
        value={authData.sellPrice}
        onChange={(e) => {
          setAuthData({ ...authData, sellPrice: e.target.value })
          onLogin({
            authData,
          })
        }}
      />
    </Card>
  )
}

export default Step2
