import axios from "axios";

export const FetchPendingReqest = async () => {
  const data = await axios.get(
    `${process.env.REACT_APP_SERVER_URL}/newRequestForVerify`
  );
  return data;
};
