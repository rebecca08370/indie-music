import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Styled from 'styled-components'
import { Radio, Input } from 'antd'
import { updateTicketData } from '../../utils/api'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const StyledBlock = Styled.div`
  margin-bottom:35px;
`

const SellTicketEdit = ({ props }) => {
  const history = useHistory()
  const [userInfoDefault, setUserInfoDefault] = useState(props)
  const [userInfo, setUserInfo] = useState({ payType: props.fields.payType, getTicketType: props.fields.getTicketType })
  const ticketInfo = props.fields
  const ticketId = props.id

  const updateAPI = ({ ticketId, userInfo }) => {
    updateTicketData({ ticketId, userInfo })
      .then((res) => {
        console.log(res)
        message.success('更新成功')
        history.goBack()
      })
      .catch((err) => {
        console.log(err)
        message.error('更新失敗，請稍後再試')
      })
  }

  return (
    <div>
      <h2>編輯中</h2>
      <p>票券 id：{ticketInfo.ticket_id}</p>
      <p>票券種類：{ticketInfo.ticketType}</p>
      <p>票價：{ticketInfo.sellPrice}</p>
      <p>
        數量：
        {ticketInfo.quantity}
      </p>
      <p>賣家：{ticketInfo.seller}</p>
      <p>買家：{ticketInfo.buyer}</p>
      <p>
        目前方式：付款：{ticketInfo.payType} | 取票：{ticketInfo.getTicketType}
      </p>
      <Form className="my-4">
        <StyledBlock>
          <h4>
            目前方式：付款：{ticketInfo.payType} | 取票：{ticketInfo.getTicketType}
          </h4>
          <Radio.Group
            onChange={(e) => {
              setUserInfo((prev) => ({
                payType: e.target.props.payType,
                getTicketType: e.target.props.getTicketType,
                bankAccount: e.target.props.bankAccount,
                bankId: e.target.props.bankId,
                bankName: e.target.props.bankName,
                ticketImgType: e.target.props.ticketImgType,
                ticketImgURL: e.target.props.ticketImgURL,
              }))
            }}
          >
            <Radio
              value={1}
              props={{
                payType: '面交',
                getTicketType: '面交',
                bankAccount: null,
                bankId: null,
                bankName: null,
                ticketImgType: null,
                ticketImgURL: null,
              }}
            >
              付款：面交 / 取票：面交
            </Radio>
            <Radio value={2} props={{ payType: '匯款', getTicketType: '店到店' }}>
              付款：匯款 / 取票：店到店
            </Radio>
            <Radio value={3} props={{ payType: '匯款', getTicketType: '自取' }}>
              付款：匯款 / 取票：自取
            </Radio>
          </Radio.Group>
        </StyledBlock>
        {userInfo.payType === '匯款' ? (
          <div>
            <h5>付款方式：</h5>
            銀行名稱：
            <Input
              className="mb-2"
              type="text"
              placeholder={userInfoDefault.fields.bankName}
              value={userInfo.bankName}
              onChange={(e) => {
                setUserInfo((prev) => ({
                  ...prev,
                  bankName: e.target.value,
                }))
              }}
            />
            銀行代號：
            <Input
              className="mb-2"
              type="text"
              placeholder={userInfoDefault.fields.bankId}
              value={userInfo.bankId}
              onChange={(e) => {
                setUserInfo({ ...userInfo, bankId: e.target.value })
              }}
            />
            銀行帳號：
            <Input
              className="mb-2"
              type="text"
              placeholder={userInfoDefault.fields.bankAccount}
              value={userInfo.bankAccount}
              onChange={(e) => {
                setUserInfo({ ...userInfo, bankAccount: e.target.value })
              }}
            />
          </div>
        ) : (
          <div>
            <h5>付款方式：</h5>
            <p>無（面交，不需填寫銀行帳號資訊）</p>
            <h5>票券證明：</h5>
            <p>無（面交，不需上傳票券證明）</p>
          </div>
        )}
        {userInfo.payType === '匯款' && userInfo.getTicketType === '店到店' ? (
          <div>
            <h5>票券證明：</h5>
            <Radio value={'票券影本'}>票券影本</Radio>
            <Input
              className="mb-2"
              type="text"
              placeholder="票券影本"
              value={userInfo.ticketImgURL}
              onChange={(e) => {
                setUserInfo((prev) => ({ ...userInfo, ticketImgURL: e.target.value }))
              }}
            />
          </div>
        ) : (
          <p></p>
        )}
        {userInfo.payType === '匯款' && userInfo.getTicketType === '自取' ? (
          <div>
            <h5>票券證明：</h5>
            <Radio value={'取票代碼'}>取票代碼</Radio>
            <Radio value={'QRCode'}>QRCode</Radio>
            <Input
              className="mb-2"
              type="text"
              placeholder="取票代碼 or QRCode"
              value={userInfo.ticketImgURL}
              onChange={(e) => {
                setUserInfo((prev) => ({ ...userInfo, ticketImgURL: e.target.value }))
              }}
            />
          </div>
        ) : (
          <p></p>
        )}
      </Form>
      <Button
        size="sm"
        onClick={() => {
          updateAPI({ ticketId, userInfo })
        }}
      >
        儲存
      </Button>
    </div>
  )
}

export default SellTicketEdit
