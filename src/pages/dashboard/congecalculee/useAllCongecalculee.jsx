import { useGetAllCongeCalculee } from "../../../hooks/api/useCongeCalculee";

const createData = (
    id,
    annee,
    nbrJrs,
    nomcong,
  ) => {
    return {
    id,  
    annee,
    nbrJrs,
    nomcong,
    };
  };

  export default function useAllCongecalculee() {
    let allCongecalculee = useGetAllCongeCalculee();
    let congecalculeeData = allCongecalculee?.data?.map((e) =>
      createData(
        e.id,
        e.annee,
        e.nbrJrs,
        e.nomcong,
      )
    );
    if (allCongecalculee.isError) {
        congecalculeeData = [];
    }
   
    const columns = [
        {
            field: "annee",
            headerName: "Annee",
            width: 180,
            flex: 1.5,
        },
      {
        field: "nbrJrs",
        headerName: "NbrJours",
        width: 180,
        flex: 2,
      },
      {
        field: "nomcong",
        headerName: "nomConge",
        width: 180,
        flex: 2,
      },

    ];
    return { congecalculeeData , columns };
  }
  