import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createDemande,
  getAllDemande,
  getDemandeByDepartement,
  updateDemande,
} from "../../APIs/api_demande";

export const useGetAllDemande = ({ onSuccess, onError } = {}) => {

    return useQuery({
      queryKey: ["allDemande"],
      queryFn: getAllDemande,
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    });
  };

export const useGetDemandeByDepartement = ({ onSuccess, onError, id } = {}) => {
    return useQuery({
      queryKey: ["demandeByDepartement", id],
      queryFn: () => getDemandeByDepartement(id),
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    });
  };

export const useUpdateDemande = ({ onSuccess, onError } = {}) => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: updateDemande,
      onSuccess: () => {
        onSuccess && onSuccess();
        queryClient.invalidateQueries({ queryKey: ["allDemande"] });
      },
      onError: () => {
        onError && onError();
      },
    });
  };

  export const useCreateDemande = ({ onSuccess, onError } = {}) => {
    const queryClient = useQueryClient();
  
    return useMutation({
      mutationFn: createDemande,
      onSuccess: () => {
        onSuccess && onSuccess();
        queryClient.invalidateQueries({ queryKey: ["allDemande"] });
      },
      onError: () => {
        onError && onError();
      },
    });
  };