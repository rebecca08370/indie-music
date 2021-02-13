import React from 'react'
import { Card } from 'antd'

const Step5 = ({ allInfo }) => {
  return (
    <Card>
      <h4>確認販售資訊</h4>
      <div>
        <h5>票券資訊</h5>
        <p>時間：{allInfo.datetime}</p>
        <p>活動名稱：{allInfo.event}</p>
        <p>價錢：{allInfo.sellPrice}</p>
        <p>張數：{allInfo.quantity}</p>
      </div>
      <hr />
      <div>
        <h5>付款方式：{allInfo.payType}</h5>
        {allInfo.payType === '匯款' ? (
          <div>
            <p>銀行名稱：{allInfo.bankName}</p>
            <p>銀行代碼：{allInfo.bankId}</p>
            <p>銀行帳號：{allInfo.bankAccount}</p>
          </div>
        ) : (
          <p>面交</p>
        )}
      </div>
      <hr />
      <div>
        <h5>取票方式：{allInfo.getTicketType}</h5>
        {allInfo.payType === '匯款' ? (
          <div>
            <h5>取票形式：{allInfo.ticketImgType}</h5>
            <p>票券證明：{allInfo.ticketImgURL}</p>
          </div>
        ) : (
          <p>面交</p>
        )}
      </div>
    </Card>
  )
}

export default Step5
