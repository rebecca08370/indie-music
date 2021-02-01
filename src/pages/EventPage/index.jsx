import React from "react";
import EventCard from "../../components/event/EventCard";
import Styled from "styled-components";
import { eventData } from "../../utils/event";

const StyledPage = Styled.div`
  margin:4em;
`;

const StyledEvent = Styled.div`
  margin:4em;
`;

const EventPage = () => {
  return (
    <StyledPage>
      <div>
        <h1>EventPage</h1>
      </div>
      <div>
        <h2>所有活動</h2>
        <h3>目前共有：{eventData && eventData.length} 個活動</h3>
        <StyledEvent>
          {eventData.map((props) => {
            return <EventCard props={props} key={props.eventName} />;
          })}
        </StyledEvent>
      </div>
    </StyledPage>
  );
};

export default EventPage;
