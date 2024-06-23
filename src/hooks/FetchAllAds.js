import axios from "axios";

export const FetchAllAds = async (city, category) => {
  const result = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/getads/city=${city}/category=${category}`
  );
  // console.log(result.data);
  return result.data;
};
