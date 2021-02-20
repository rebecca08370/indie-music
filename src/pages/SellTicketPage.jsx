import React, { useState } from 'react'
import Styled from 'styled-components'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import { Form, Steps, Button } from 'antd'
import Step1 from '../components/sellTicket/Step1'
import Step2 from '../components/sellTicket/Step2'
import Step3 from '../components/sellTicket/Step3'
import Step41 from '../components/sellTicket/Step41'
import Step42 from '../components/sellTicket/Step42'
import Step5 from '../components/sellTicket/Step5'
import Step6 from '../components/sellTicket/Step6'
import { sellTicketAdd } from '../utils/api'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

const StyledPage = Styled.div`
  padding:70px 160px;
  // margin:4em;
`

const StyledStepsContent = Styled.div`
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
`

const StyledStepsAction = Styled.div`
  display:flex;
  margin-top: 24px;
`

const SellTicketPage = () => {
  const username = localStorage && localStorage.getItem('username')
  const history = useHistory()
  if (username) {
  } else {
    message.warning('需要先登入才能售票')
    history.push('/login')
  }
  const [allInfo, setAllInfo] = useState({ sold: 0, seller: username, buyer: null })
  const { Step } = Steps
  const [current, setCurrent] = useState(0)
  const steps = [
    {
      title: '搜尋活動',
      content: [
        <Step1
          onLogin={({ authData }) => {
            setAllInfo((prev) => ({
              ...prev,
              eventId: authData.eventId,
              event: authData.event,
              datetime: authData.datetime,
            }))
          }}
        />,
      ],
    },
    {
      title: '票券資訊',
      content: [
        <Step2
          onLogin={({ authData }) => {
            setAllInfo((prev) => ({
              ...prev,
              ticketType: authData.ticketType,
              boughtPrice: parseInt(authData.boughtPrice),
              sellPrice: parseInt(authData.sellPrice),
              quantity: parseInt(authData.quantity),
            }))
          }}
        />,
      ],
    },
    {
      title: '交易方式',
      content: [
        <Step3
          onLogin={({ authData }) => {
            setAllInfo((prev) => ({
              ...prev,
              payType: authData.payType,
              getTicketType: authData.getTicketType,
            }))
          }}
        />,
      ],
    },
    {
      title: '上傳票券證明',
      content: [
        <Step41
          allInfo={allInfo}
          onLogin={({ authData }) => {
            setAllInfo((prev) => ({
              ...prev,
              ticketImgType: authData.ticketImgType,
              ticketImgURL: authData.ticketImgURL,
              bankName: authData.bankName,
              bankId: authData.bankId,
              bankAccount: authData.bankAccount,
            }))
          }}
        />,
        <Step42
          allInfo={allInfo}
          onLogin={({ authData }) => {
            setAllInfo((prev) => ({
              ...prev,
              ticketImgType: authData.ticketImgType,
              ticketImgURL: authData.ticketImgURL,
              bankName: authData.bankName,
              bankId: authData.bankId,
              bankAccount: authData.bankAccount,
            }))
          }}
        />,
      ],
    },
    {
      title: '確認資訊',
      content: [<Step5 allInfo={allInfo} />],
    },
    {
      title: '上架完成',
      content: [<Step6 allInfo={allInfo} />],
    },
  ]

  const next = (allInfo) => {
    setCurrent(current + 1)
    console.log(allInfo)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const [isModalVisible, setIsModalVisible] = useState(false)
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = (allInfo) => {
    setCurrent(current + 1)
    sellTicketAdd(allInfo)
      .then((res) => {
        console.log(res)
        message.success('上架成功！')
      })
      .catch((err) => {
        console.error(err)
        message.error('上架失敗請稍後再嘗試！')
      })
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <StyledPage>
      <div>
        <h1>售票流程</h1>
        <div className="p-4">
          <Form>
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>

            <StyledStepsContent>
              {current === 3 && allInfo.payType === '匯款' ? steps[current].content[1] : steps[current].content[0]}
            </StyledStepsContent>
            <StyledStepsAction>
              {current < steps.length - 1 && (
                <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                  回上一步
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  style={{ margin: '0 8px' }}
                  onClick={() => {
                    history.push('/')
                  }}
                >
                  完成 回首頁
                </Button>
              )}
              {current < steps.length - 2 && (
                <Button type="primary" onClick={() => next(allInfo)}>
                  下一步
                </Button>
              )}
              {current === steps.length - 2 && (
                <div>
                  <Button type="danger" onClick={showModal}>
                    確認
                  </Button>
                  <Modal
                    title="Basic Modal"
                    visible={isModalVisible}
                    onOk={() => {
                      handleOk(allInfo)
                    }}
                    onCancel={handleCancel}
                  >
                    <p>確定上架此票券嗎？</p>
                  </Modal>
                </div>
              )}
            </StyledStepsAction>
          </Form>
        </div>
      </div>
    </StyledPage>
  )
}

export default SellTicketPage
