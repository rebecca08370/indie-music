import React, { useState, useEffect } from 'react'
import { getTicketInfo } from '../utils/api'
import { useParams, useHistory } from 'react-router-dom'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import { Button } from 'react-bootstrap'
import Styled from 'styled-components'
import UserTicketInfo from '../components/userTicket/UserTicketInfo'
import SellTicketEdit from '../components/userTicket/SellTicketEdit'

const StyledSection = Styled.div`
  padding:0px 200px 70px 200px;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
  padding:30px 200px 0px 200px;
`

const EditTicketPage1 = () => {
  const history = useHistory()
  const { ticketId } = useParams()
  const [edit, setEdit] = useState(false)
  const [ticketInfo, setTicketInfo] = useState()
  const [uiState, setUiState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setUiState({
      error: null,
      data: null,
      loading: true,
    })
    getTicketInfo(ticketId)
      .then((res) => {
        setUiState({
          error: null,
          data: res,
          loading: false,
        })
        setTicketInfo(res)
      })
      .catch((err) => {
        setUiState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [ticketId])

  if (uiState.error) {
    return <h1>Not found</h1>
  }
  if (uiState.loading || !uiState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  return (
    <div>
      <StyleH1>販售票券編輯頁</StyleH1>
      {edit ? (
        <StyledSection>
          {ticketInfo && <SellTicketEdit props={ticketInfo} key={ticketInfo.id} />}
          <Button
            size="sm"
            variant="warning"
            onClick={() => {
              setEdit(!edit)
            }}
          >
            檢視
          </Button>
        </StyledSection>
      ) : (
        <StyledSection>
          {ticketInfo && <UserTicketInfo props={ticketInfo} key={ticketInfo.id} />}
          <Button
            size="sm"
            onClick={() => {
              setEdit(!edit)
            }}
          >
            編輯
          </Button>
          <Button
            size="sm"
            variant="light"
            onClick={() => {
              history.goBack()
            }}
          >
            回上一頁
          </Button>
        </StyledSection>
      )}
    </div>
  )
}

export default EditTicketPage1
