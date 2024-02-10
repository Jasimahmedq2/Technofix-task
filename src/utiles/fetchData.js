import axios from "axios";

const GetUsers = async (url) => {
  try {
    const result = await axios.get(url);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const FetchData = {
  GetUsers,
};
