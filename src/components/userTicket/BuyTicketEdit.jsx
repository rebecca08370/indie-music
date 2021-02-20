import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'antd'
import { updateTicketData } from '../../utils/api'
import { message } from 'antd'
import { useHistory } from 'react-router-dom'

const SellTicketEdit = ({ props }) => {
  const history = useHistory()
  const ticketInfo = props.fields
  const ticketId = props.id

  const [isModalVisible, setIsModalVisible] = useState(false)
  const handleOk = () => {
    const userInfo = { buyer: null, sold: 0 }
    setIsModalVisible(false)
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

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
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
      <div>
        <Button variant="danger" size="sm" onClick={() => setIsModalVisible(true)}>
          取消訂單
        </Button>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={() => {
            handleOk()
          }}
          onCancel={handleCancel}
        >
          <p>確定取消訂單嗎？</p>
        </Modal>
      </div>
    </div>
  )
}

export default SellTicketEdit
