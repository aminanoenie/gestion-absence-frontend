import Modal from '../../../components/Modal/Modal';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import PropTypes from "prop-types";
import { useUpdateDemande } from "../../../hooks/api/useDemandeApi";
import { Typography } from '@mui/material';
import { demande_statut } from "../../../global";


export default function RefuseeDemande({ data }) {
  const mutation = useUpdateDemande();

  const demande = {
    id: data.id,
    statut: demande_statut.refusee,
  };

  console.log(demande);


  return (
    <>
      <Modal
        btnIcon={<CloseRoundedIcon />}
        btnColor={"error"}
        modalTitle={"Refuser la demande"}
        modalActionName={"Refuser"}
        btnActionColor={"error"}
        modalActionEvent={() => {
          mutation.mutate(demande);
        }}
      >
        <Typography variant="p" component="p" sx={{ my: 2 }}>
          souhaitez-vous refusee la demande?
        </Typography>
      </Modal>
    </>
  );
}

RefuseeDemande.propTypes = {
  data: PropTypes.object,
};
