import { Box, Typography } from "@mui/material";
// import ExportMenu from "../../../../components/Export/ExportMenu";
import TableData from "../../../components/Table/TableData";
import useAllDemande from "./useAllDemande";

export default function ListDemande({ enAttente }) {
  const { demandeData, columns } = useAllDemande({ enAttente });

  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ my: 3, fontWeight: "bold" }}
      >
        Les demandes
      </Typography>
      <Box
        sx={{ my: 3, display: "flex", justifyContent: "space-between", gap: 3 }}
      >
        <Box></Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}>
          {/* <CreateMarche />
            <ExportMenu allDataExport={marcheData} /> */}
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "background.light",
          width: "100%",
          p: 0,
          borderRadius: 2,
        }}
      >
        <TableData rows={demandeData} columns={columns} />
      </Box>
    </Box>
  );
}
