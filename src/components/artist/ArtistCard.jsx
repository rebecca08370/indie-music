import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'

const { Meta } = Card

const ArtistCard = ({ props }) => {
  const artistInfo = props.fields
  const artistId = props.id
  return (
    <div>
      <Link to={`/artists/${artistId}`}>
        <Card hoverable style={{ width: 170, hidth: 100 }} cover={<img alt="example" src={artistInfo.band_img} />}>
          <Meta
            description={[
              <div>
                <p>{artistInfo.artist}</p>
                <p>粉絲數：{artistInfo.follower}</p>
              </div>,
            ]}
          />
        </Card>
      </Link>
    </div>
  )
}

export default ArtistCard
