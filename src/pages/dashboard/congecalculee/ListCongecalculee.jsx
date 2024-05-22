import { Box, Typography } from "@mui/material";
// import ExportMenu from "../../../../components/Export/ExportMenu";
import TableData from "../../../components/Table/TableData";
import useAllCongecalculee from "./useAllCongecalculee";

export default function ListCongecalculee() {
  const { congecalculeeData, columns } = useAllCongecalculee();

  console.log("congecalculeeData", congecalculeeData);
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{ my: 3, fontWeight: "bold" }}
      >
        Les conges calculees
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
        <TableData rows={congecalculeeData} columns={columns} />
      </Box>
    </Box>
  );
}
