import { Typography } from "@mui/material";
import Modal from "../../../components/Modal/Modal";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import PropTypes from "prop-types";
import { useUpdateDemande } from "../../../hooks/api/useDemandeApi";
import { demande_statut } from "../../../global";


export default function ApprouveeDemande({ data }) {
  const mutation = useUpdateDemande();

  const demande = {
    id: data.id,
    statut: demande_statut.approuvee,
  };

  console.log(demande);

  
  return (
    <>
      <Modal
        btnIcon={<CheckRoundedIcon />}
        btnColor={"success"}
        modalTitle={"Accepter la demande"}
        modalActionName={"Accepter"}
        btnActionColor={"success"}
        modalActionEvent={() => {
          mutation.mutate(demande);
        }}
      >
        <Typography variant="p" component="p" sx={{ my: 2 }}>
          souhaitez-vous approuvee la demande ?
        </Typography>
      </Modal>
    </>
  );
}

ApprouveeDemande.propTypes = {
  data: PropTypes.object,
};
