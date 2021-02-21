import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'

const SyledButton = Styled.button`
  width: auto;
  height: auto;
  border-radius: 12px;
  background-color: white;
  border-color: #ff7a64;
  color: #ff7a64;
  margin: 5px;
  font-size: 14px;
`

const ArtistLink = ({ props }) => {
  const artist_record_id = props.artist_record_id
  const show_attendees = props.show_attendees
  const allLink = artist_record_id.map(function (e, i) {
    return [e, show_attendees[i]]
  })

  return (
    <div>
      <UserOutlined className="mr-2" style={{ fontSize: 20, color: '#ff7a64' }} />
      {allLink.map((item) => (
        <Link to={`/artists/${item[0]}`}>
          <SyledButton>{item[1]}</SyledButton>
        </Link>
      ))}
    </div>
  )
}

export default ArtistLink
