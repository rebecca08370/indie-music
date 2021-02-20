import React from 'react'
import Styled from 'styled-components'
import { FacebookFilled, InstagramFilled, CustomerServiceFilled } from '@ant-design/icons'
import { Image } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Button } from 'antd'

const StyledSection = Styled.div`
  padding:40px 160px;
`

const StyledInfoSection = Styled.div`
  width: auto;
  height: 180px;
`

const StyledContentSection = Styled.div`
  padding:20px;
`

const StyledBlock = Styled.div`
  padding: 40px 0px;
`

const StyledImgSection = Styled.div`
  text-align:center;
`

const StyleH1 = Styled.h1`
  font-size: 34px;
`

const StyleH2 = Styled.h2`
  font-size: 28px;
`

const StyledImg = Styled.img`
  width: auto;
  max-height: 300px;
`

const StyledIconGroup = Styled.div`
  margin: 30px 0px;
`

const ArtistInfoCard = ({ props }) => {
  const artistInfo = props.fields
  const history = useHistory()

  return (
    <div>
      <StyledImgSection>
        <StyledImg src={artistInfo.bg_img} />
      </StyledImgSection>
      <StyledSection>
        <StyledInfoSection className="container">
          <div className="row">
            <div className="col-4">
              <Image src={artistInfo.band_img} fluid roundedCircle width={171} height={180} />
            </div>
            <StyledBlock className="col-4">
              <StyleH2>{artistInfo.artist}</StyleH2>
              <StyledIconGroup>
                <a href={artistInfo.fb_url}>
                  <FacebookFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
                </a>
                <a href={artistInfo.ig_url}>
                  <InstagramFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
                </a>
                <a href={artistInfo.sv_url}>
                  <CustomerServiceFilled style={{ fontSize: '30px', margin: '0px 10px' }} />
                </a>
              </StyledIconGroup>
            </StyledBlock>
            <StyledBlock className="col-4">
              <p>粉絲：{artistInfo.follower}</p>
              <p>追蹤中：{artistInfo.following}</p>
              <Button
                type="primary"
                onClick={() => {
                  history.goBack()
                }}
              >
                回上一頁
              </Button>
            </StyledBlock>
          </div>
        </StyledInfoSection>
        <hr />
        <StyledContentSection>
          <StyleH1>樂團介紹</StyleH1>
          <div
            dangerouslySetInnerHTML={{
              __html: artistInfo.content,
            }}
          ></div>
        </StyledContentSection>
        <hr />
        {/* <StyledContentSection>
          <StyleH1>近期活動</StyleH1>
        </StyledContentSection> */}
      </StyledSection>
    </div>
  )
}

export default ArtistInfoCard
