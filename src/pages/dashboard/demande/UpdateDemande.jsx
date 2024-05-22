import Modal from "../../../components/Modal/Modal";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import PropTypes from "prop-types";

export default function UpdateDemande({ data }) {
    return (
        <>
          <Modal
            btnIcon={<EditRoundedIcon />}
            modalTitle={"Update demande "}
            modalActionName={"Update"}
            // modalActionEvent={() => {
            //   mutation.mutate(data.id);
            // }}
          >
            {/* <CreateUpdateForm data={data} isUpdate={true} /> */}
            Update demande
    
    
          </Modal>
        </>
      );
    }
    
    UpdateDemande.propTypes = {
      data: PropTypes.object,
    };
    