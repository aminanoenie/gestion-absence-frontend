import axios from "axios";

export const getAllDepartment = async () => {
  const url = "/departement";
  const { data } = await axios.get(url);
  return data || [];
};


export const createDepartment = async (department) => {
  const url = "/departement";
  return await axios.post(url, department);
};

export const deleteDepartment = async (id) => {
  const url = `/departement/${id}`;
  return await axios.delete(url);
};
