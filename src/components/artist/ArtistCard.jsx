import React from 'react'
import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArtistCard = ({ props }) => {
  const artistInfo = props.fields
  const artistId = props.id
  return (
    <div className="p-2">
      <Card style={{ width: '12rem' }} border="danger">
        <Card.Body>
          <Link to={`/artists/${artistId}`}>
            <Image src={artistInfo.band_img} fluid roundedCircle width={171} height={180} />
          </Link>
          <Card.Title>{artistInfo.artist}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ArtistCard
