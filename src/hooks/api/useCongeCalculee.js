import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    getAllCongeCalculee,

} from "../../APIs/api_congecalculee";

export const useGetAllCongeCalculee = ({ onSuccess, onError } = {}) => {

    return useQuery({
      queryKey: ["allCongeCalculee"],
      queryFn: getAllCongeCalculee,
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    });
  };