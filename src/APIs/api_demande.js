import axios from "axios";

export const  getAllDemande = async () => {
    const url = "/demande";
    const { data } = await axios.get(url);
    return data || [];
  };

export const createDemande = async ({demande}) => {
    const url = "/demande";
    console.log(demande);
    return await axios.post(url,demande);
};

export const getDemandeByDepartement = async (id) => {
  const url = `/demande/departements/${id}/demandes`;
  const { data } = await axios.get(url);
  return data || [];
};

export const updateDemande = async (newDemande) => {
  const url = `/demande/${newDemande.id}`;
  return await axios.put(url, newDemande);
};


