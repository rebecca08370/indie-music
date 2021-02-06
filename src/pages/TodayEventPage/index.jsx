import React from 'react'
import Styled from 'styled-components'

const StyledPage = Styled.div`
  margin:4em;
`
const date1 = Date().toLocaleString()
const TodayEventPage = () => {
  return (
    <StyledPage>
      <div>
        <h1>TodayEventPage</h1>
        <p>{date1}</p>
      </div>
    </StyledPage>
  )
}

export default TodayEventPage
