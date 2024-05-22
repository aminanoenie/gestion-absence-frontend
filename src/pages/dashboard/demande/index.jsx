import ListDemande from "./ListDemande";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import CreateDemande from "./CreateDemande";


export default function Index() {
    const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["allDemande"] });   
  }, [queryClient])

  return <h1>Demande</h1>;
}

export const ListDemande = ListDemande;
export const CreateDemande = CreateDemande;

