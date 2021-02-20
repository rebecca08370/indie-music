import React from 'react'
import Styled from 'styled-components'

const StyleSection = Styled.h1`
  padding: 30px 160px;
`

const StyleH1 = Styled.h1`
  font-size: 28px;
`
const StyleP = Styled.p`
  font-size: 15px;
`

const About = () => {
  return (
    <StyleSection>
      <div>
        <StyleH1>關於聽團der人</StyleH1>
        <StyleP>獨立音樂售票整合的網站</StyleP>
      </div>
      <div>
        <StyleH1>成員</StyleH1>
        <StyleP>Rebecca：網站主要架構</StyleP>
        <StyleP>Freddy：UI/UX 設計</StyleP>
      </div>
      <div>
        <StyleH1>用到的技術</StyleH1>
        <StyleP>1. 利用Python套件爬StreetVoice上的活動資料以及樂團</StyleP>
        <StyleP>2. 將資料清整後上傳到Airtable</StyleP>
        <StyleP>3. 以React為主要的前端框架</StyleP>
        <StyleP>4. UI Library：Ant Design, React Bootstrap</StyleP>
      </div>
      <div>
        <StyleH1>主要功能</StyleH1>
        <StyleP>1. 售票、買票</StyleP>
        <StyleP>2. 活動及樂團資訊整合</StyleP>
      </div>
    </StyleSection>
  )
}

export default About
