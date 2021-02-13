import React, { useState, useEffect } from 'react'
import { Card } from 'antd'

const Step41 = ({ onLogin, allInfo }) => {
  const [authData, setAuthData] = useState({
    bankName: null,
    bankId: null,
    bankAccount: null,
    ticketImgType: null,
    ticketImgURL: null,
  })

  useEffect(() => {
    onLogin({
      authData,
    })
  }, [authData])

  return (
    <Card>
      <h5>上傳票券證明</h5>
      <h6>
        付款：{allInfo.payType} | 取票：{allInfo.getTicketType}
      </h6>
      <div>
        <p>付款：無（面交，不需填寫銀行帳號資訊）</p>
        <p>票券證明：無（面交，不需上傳票券證明）</p>
        <h6>請直接按"下一步"</h6>
      </div>
    </Card>
  )
}

export default Step41
