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