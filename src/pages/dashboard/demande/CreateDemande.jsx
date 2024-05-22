import {
  Alert,
  Autocomplete,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import PlaylistAddRoundedIcon from "@mui/icons-material/PlaylistAddRounded";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { useListRender } from "../../../hooks/utils/useListRender";;
import DateForm from "../../../components/Date/DateForm";
import { useCreateDemande} from "../../../hooks/api/useDemandeApi";
import { Description } from "@mui/icons-material";



export default function CreateDemande() {

const [resetData, setResetData] = useState(false);
console.log(resetData);

const [isconge, setisconge] = useState(true);
const {
  register,
  handleSubmit,
  reset,
  watch,
  control,
} = useForm();


const mutation = useCreateDemande({
  onSuccess: () => {
    reset();
    setResetData((p) => !p);
  },
});

const onSubmit = (data) => {
  console.log(data);
  const obj = {
    demande: {
      ...data,
    },
  };
  console.log(obj);

  if (data) {
    mutation.mutate(obj);

  } else console.log("error");
};


return (
  <>
    <Box
      sx={{
        my: 5,
        mb: 5,
        mx: "5%",
        "& input , & .MuiFormLabel-root , & .MuiInputBase-root": {
          background: "#fff",
        },
      }}
    >
      <Typography
        component="h2"
        variant="h5"
        sx={{ mt: 2, mb: 6, fontWeight: 700 }}
      >
        Demande d'absences et des conges
      </Typography>

      
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <FormControl fullWidth sx={{ flex: 1 }}>
            <InputLabel id="typeDemande">Type Demande</InputLabel>
            <Select
              {...register("typeDemande", { required: true })}
              labelId="typeDemande"
              id="typeDemande"
              value={watch("typeDemande") || "conge"}
              label="Age"
              required
              fullWidth
            >
              <MenuItem onClick ={()=> setisconge(true)} value={"conge"}>Conge</MenuItem>
              <MenuItem onClick ={()=> setisconge(false)}value={"absence"}>Absence</MenuItem>
          
            </Select>
          </FormControl>
          {isconge ?   <FormControl fullWidth sx={{ flex: 1 }}>
            <InputLabel id="conge_nom">Type Conge</InputLabel>
            <Select
              {...register("conge_nom", { required: true })}
              labelId="conge_nom"
              id="conge_nom"
              value={watch("conge_nom") || "annuel"}
              label="Age"
              required
              fullWidth
            >
              <MenuItem value={"annuel"}>annuel</MenuItem>
              <MenuItem value={"penible"}>penible</MenuItem>
              <MenuItem value={"permanence"}>permanence</MenuItem>
              <MenuItem value={"familiale_mort"}>familiale_mort</MenuItem>
              <MenuItem value={"familiale_marriage"}>familiale_marriage</MenuItem>
              <MenuItem value={"familiale_paternite"}>familiale_paternite</MenuItem>
            </Select>
          </FormControl> : null}
        

         </Box>
         <br></br>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <TextField
            label="duree"
            required
            fullWidth
            {...register("duree", { required: true })}
          />
           <TextField
            label="motif"
            required
            fullWidth
            {...register("motif", { required: true })}
          />
        </Box>
        <Box sx={{ my: 4 }}>
          <TextField
            label="description"
            required
            fullWidth
            multiline
            rows={2}
            {...register("description", { required: true })}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: 4 }}>

          <DateForm
            sx={{ flex: 1 }}
            label="Date Debut"
            name={"dateDebut"}
            reset={resetData}
            {...{ control }}
          />

        </Box>

        <Box sx={{ py: 0 }}>
          {mutation.isSuccess && (
            <Alert severity="success" sx={{ my: 1 }}>
              Demande est bien enregistrée
            </Alert>
          )}
          {mutation.isError && (
            <Alert severity="error" sx={{ my: 1 }}>
             Demande n'est pas enregistrée
            </Alert>
          )}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "right", gap: 2, my: 2 }}>
          <Button
            // type="reset"
            variant="text"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            size="large"
            onClick={() => {
              reset();
              setResetData((p) => !p);
              // setMarche("");
            }}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ mt: 3, mb: 2 }}
            // size="large"
            endIcon={<PlaylistAddRoundedIcon />}
          >
            Créer
          </Button>
        </Box>

        {/* {"showError" && (
          <Alert severity="error" sx={{ my: 1 }}>
            vérifiez vos informations
          </Alert>
        )} */}
      </Box>
    </Box>
    {/* <Button onClick={handleSubmit(onSubmit)}>ok</Button> */}
  </>
);
}
