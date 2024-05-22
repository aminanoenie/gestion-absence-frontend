import ListCongecalculee from "./ListCongecalculee";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";


export default function Index() {
    const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ["allCongeCalculee"] });   
  }, [queryClient])

  return <h1>CongeCalculee</h1>;
}

export const ListCongecalculee = ListCongecalculee;

