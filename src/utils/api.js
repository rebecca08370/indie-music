import axios from 'axios'
export const getArtistsInfo = async () => {
    const authToken = "keyznJijtm22VEReI";
    const param = 'sort%5B0%5D%5Bfield%5D=follower&sort%5B0%5D%5Bdirection%5D=desc'
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/artists?${param}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getArtistInfo = async (id) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/artists/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getEventsInfo = async () => {
    const authToken = "keyznJijtm22VEReI";
    const param = 'sort%5B0%5D%5Bfield%5D=like&sort%5B0%5D%5Bdirection%5D=desc'
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/events?${param}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getEventInfo = async (id) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/events/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getTodayEvent = async (before, after) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/events?filterByFormula=AND(IS_AFTER(datetime%2C+'${before}')%2C+IS_BEFORE(datetime%2C+'${after}'))`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const userLogin = async (username) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/users?filterByFormula=username%3D'${username}'`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const userSignup = async (loginInfo) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.post(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/users`,
      {'fields':loginInfo
    },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
      
    );
    return data;
  };

  export const getTicketInfo = async (id) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const updateTicketInfo = async (id, soldNum, username) => {
    const updateData = {'sold':soldNum, 'buyer':username}
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.patch(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets/${id}`,
      {'fields':updateData
    },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const sellTicketAdd = async (allInfo) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.post(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets`,
      {'fields':allInfo
    },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
      
    );
    return data;
  };

  export const getTicketInfo2 = async (id) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets?filterByFormula=eventId%3D%22${id}%22`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );   
    return data;
  };

  export const getUserTicket = async (usename) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `
      https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets?filterByFormula=OR(seller%3D'${usename}'%2C+buyer%3D'${usename}')`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );   
    return data;
  };

  export const updateTicketData = async ({ticketId, userInfo}) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.patch(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/tickets/${ticketId}`,
      {'fields':userInfo},
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getSearchResult = async (query) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/events?${query}` ,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getComments = async () => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/comments` ,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };


  export const getArtistEvents = async (artist) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/events?filterByFormula=FIND(%22${artist}%22%2Clink_attendees)`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const addNotify = async (allInfo) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.post(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/notify`,
      {'fields':allInfo
    },
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const getNotify = async ({username, event_id}) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.get(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/notify?filterByFormula=AND(%7Bevents_id%7D%3D'${event_id}'%2C+username%3D'${username}')`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    );
    return data;
  };

  export const deleteNotify = async ({id}) => {
    const authToken = "keyznJijtm22VEReI";
    const { data } = await axios.delete(
      `https://api.airtable.com/v0/appMmxoAOYC9xKGK9/notify/${id}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    )
    return data;
  };