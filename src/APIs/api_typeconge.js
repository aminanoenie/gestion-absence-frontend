import axios from "axios";

export const  getAllTypeConge = async () => {
    const url = "/typeconge";
    const { data } = await axios.get(url);
    return data || [];
  };