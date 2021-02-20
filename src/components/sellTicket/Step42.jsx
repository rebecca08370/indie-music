import React, { useState, useEffect } from 'react'
import { Radio, Card, Input } from 'antd'
import Styled from 'styled-components'

const StyledSection = Styled.div`
  padding:30px 100px;
`
const Step42 = ({ onLogin, allInfo }) => {
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
    <StyledSection>
      <Card>
        <h5>上傳票券證明</h5>
        <h6>
          付款：{allInfo.payType} | 取票：{allInfo.getTicketType}
        </h6>
        <Radio.Group
          onChange={(e) => {
            setAuthData({ ...authData, ticketImgType: e.target.value })
            onLogin({
              authData,
            })
          }}
        >
          <div>
            <h5>付款方式：</h5>
            銀行名稱：
            <Input
              className="mb-2"
              type="text"
              placeholder="銀行名稱"
              value={authData.bankName}
              onChange={(e) => {
                setAuthData({ ...authData, bankName: e.target.value })
                onLogin({
                  authData,
                })
              }}
            />
            銀行代號：
            <Input
              className="mb-2"
              type="text"
              placeholder="銀行代號"
              value={authData.bankId}
              onChange={(e) => {
                setAuthData({ ...authData, bankId: e.target.value })
                onLogin({
                  authData,
                })
              }}
            />
            銀行帳號：
            <Input
              className="mb-2"
              type="text"
              placeholder="銀行帳號"
              value={authData.bankAccount}
              onChange={(e) => {
                setAuthData({ ...authData, bankAccount: e.target.value })
                onLogin({
                  authData,
                })
              }}
            />
          </div>
          <div>
            <h5>票券證明：</h5>
            {allInfo.getTicketType === '店到店' ? (
              <Radio value={'票券影本'}>票券影本</Radio>
            ) : (
              <div>
                <Radio value={'取票代碼'}>取票代碼</Radio>
                <Radio value={'QRCode'}>QRCode</Radio>
              </div>
            )}

            <Input
              className="mb-2"
              type="text"
              placeholder="票券影本 or 取票代碼 or QRCode"
              value={authData.ticketImgURL}
              onChange={(e) => {
                setAuthData({ ...authData, ticketImgURL: e.target.value })
                onLogin({
                  authData,
                })
              }}
            />
          </div>
        </Radio.Group>
      </Card>
    </StyledSection>
  )
}

export default Step42
