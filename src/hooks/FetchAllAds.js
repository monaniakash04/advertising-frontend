import axios from "axios";

export const FetchAllAds = async () => {
  const result = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/getadsAllAds`
  );
  // console.log(result.data);
  return result.data;
};
