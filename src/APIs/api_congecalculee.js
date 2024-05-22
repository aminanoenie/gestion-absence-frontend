import axios from "axios";

export const  getAllCongeCalculee = async () => {
    const url = "/congeeCalculee";
    const { data } = await axios.get(url);
    return data || [];
  };