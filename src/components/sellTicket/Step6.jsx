import React from 'react'
import { Card } from 'antd'
import Styled from 'styled-components'

const StyledSection = Styled.div`
  padding:30px 100px;
`
const Step6 = ({ allInfo }) => {
  return (
    <StyledSection>
      <Card>
        <h4>票券上架成功！</h4>
        <div>
          <h5>票券資訊</h5>
          <p>時間：{allInfo.datetime}</p>
          <p>活動名稱：{allInfo.event}</p>
          <p>價錢：{allInfo.sellPrice}</p>
          <p>張數：{allInfo.quantity}</p>
        </div>
      </Card>
    </StyledSection>
  )
}

export default Step6
