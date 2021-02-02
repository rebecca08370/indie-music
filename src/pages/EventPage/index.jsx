import React from "react";
import Styled from "styled-components";
import { useParams } from "react-router-dom";
import EventInfo from "../../components/event/EventInfo";

const StyledPage = Styled.div`
  margin:4em;
`;


const EventPage = () => {
  const { eventId } = useParams();
  return (
    <StyledPage>
      <div>
        <h1>EventPage</h1>
        <EventInfo props={{eventId}} key={eventId}/>
      </div>
    </StyledPage>
  );
};

export default EventPage;
