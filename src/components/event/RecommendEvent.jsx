import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StarOutlined} from '@ant-design/icons';
import Styled from "styled-components";


const StyledPLike = Styled.div`
  display:flex
`;

const RecommendEvent = ({ props }) => {
  return (
    <div className="p-2">
      <Card style={{ width: "28rem" }} border="secondary">
        <Card.Body>
          <Link to={`/events/${props.id}`}>
            <Card.Title>{props.event}</Card.Title>
          </Link>
          <Card.Subtitle className="mb-2 text-muted">
            {props.datetime} , {props.venue}
          </Card.Subtitle>
          <StyledPLike>
          <StarOutlined className='p-1'/>
          <Card.Text>
            Like：
            {props.like}
          </Card.Text>
          </StyledPLike>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RecommendEvent;
