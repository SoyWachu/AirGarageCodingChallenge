import axios from "axios";

export default async function getData(keyword, limit = 50) {
  const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=parking&location=${keyword}&limit=${limit}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
