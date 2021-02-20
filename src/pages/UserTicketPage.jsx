import React, { useState, useEffect } from 'react'
import Styled from 'styled-components'
import { getUserTicket } from '../utils/api'
import 'antd/dist/antd.css'
import { Skeleton } from 'antd'
import UserTicketCard from '../components/userTicket/UserTicketCard'

const StyledSection = Styled.div`
  padding:0px 160px;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyleH2 = Styled.h2`
  font-size: 26px;
`

const StyledContentSection = Styled.div`
  padding:30px;
`

const buyerSeller = (resTicket, username) => {
  const len = resTicket.length
  const final = { buyer: [], seller: [] }
  for (let step = 0; step < len; step++) {
    if (resTicket[step].fields.buyer === username) {
      final.buyer.push(resTicket[step])
    } else {
      final.seller.push(resTicket[step])
    }
  }
  return final
}

const UserTicketPage = () => {
  const username = localStorage && localStorage.getItem('username')
  const [ticketInfo, setTicketInfo] = useState()
  const [allEventState, setAllEventState] = useState({
    loading: true,
    error: null,
    data: [],
  })

  useEffect(() => {
    setAllEventState({
      error: null,
      data: null,
      loading: true,
    })
    getUserTicket(username)
      .then((res) => {
        setAllEventState({
          error: null,
          data: res,
          loading: false,
        })
        const final = buyerSeller(res.records, username)
        setTicketInfo(final)
      })
      .catch((err) => {
        setAllEventState({
          error: err,
          data: null,
          loading: false,
        })
        console.error(err)
      })
  }, [username])

  if (allEventState.error) {
    return <h1>Not found</h1>
  }
  if (allEventState.loading || !allEventState.data) {
    return (
      <div>
        <Skeleton />
      </div>
    )
  }

  return (
    <div>
      <StyledSection>
        <StyledContentSection>
          <StyleH1>購買的票券：</StyleH1>
          {ticketInfo && ticketInfo['buyer'].length !== 0 ? (
            ticketInfo.buyer.map((props) => {
              if (props) {
                return <UserTicketCard props={props} key={props.id} ediType="buy"></UserTicketCard>
              }
              return null
            })
          ) : (
            <StyleH2>目前沒有購買的票券</StyleH2>
          )}
        </StyledContentSection>
        <hr />
      </StyledSection>
      <StyledSection>
        <StyledContentSection>
          <StyleH1>販售的票券：</StyleH1>
          {ticketInfo && ticketInfo['seller'].length !== 0 ? (
            ticketInfo.seller.map((props) => {
              if (props) {
                return <UserTicketCard props={props} key={props.id} ediType="sell"></UserTicketCard>
              }
              return null
            })
          ) : (
            <StyleH2>目前沒有販售的票券</StyleH2>
          )}
        </StyledContentSection>
        <hr />
        <StyledContentSection></StyledContentSection>
      </StyledSection>
    </div>
  )
}

export default UserTicketPage
