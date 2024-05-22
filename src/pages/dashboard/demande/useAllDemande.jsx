import { useGetAllDemande } from "../../../hooks/api/useDemandeApi";
import ApprouveeDemande from "./ApprouveeDemande";
import RefuseeDemande from "./RefuseeDemande";
import { demande_statut } from "../../../global";

const createData = (
  id,
  date_debut,
  description,
  motif,
  statut,
  type_demande,
  duree
) => {
  return { id, date_debut, description, motif, statut, type_demande, duree };
};

export default function useAllDemande({ enAttente }) {
  console.log(enAttente);
  const allDemandes = useGetAllDemande();
  console.log(allDemandes);
  const demandeData = allDemandes?.data?.filter((e) => {
    console.log(e);
    if (enAttente && e.statut == demande_statut.enAttente) {
      console.log(e.statut);
      return createData(
        e.id,
        e.dateDebut,
        e.description,
        e.motif,
        e.statut,
        e.typeDemande,
        e.duree
      );
    }
    if (enAttente == false && e.statut != demande_statut.enAttente) {
      console.log("historique");
      return createData(
        e.id,
        e.dateDebut,
        e.description,
        e.motif,
        e.statut,
        e.typeDemande,
        e.duree
      );
    }
  });

  const columns = [
    {
      field: "dateDebut",
      headerName: "DateDebut",
      width: 180,
      flex: 1.5,
    },
    { field: "description", headerName: "Description", width: 180 },
    { field: "motif", headerName: "Motif", width: 180 },
    { field: "statut", headerName: "Statut", width: 180 },
    { field: "typeDemande", headerName: "TypeDemande", width: 180 },
    { field: "duree", headerName: "Duree", width: 180 },
    enAttente && {
      field: "action",
      headerName: "",
      width: 180,
      align: "center",
      renderCell: (params) => {
        return (
          <>
            <ApprouveeDemande data={params.row} />
            <RefuseeDemande data={params.row} />
          </>
        );
      },
    },
  ];

  console.log(demandeData);
  return { demandeData, columns };
}
