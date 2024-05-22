import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllTypeConge,

} from "../../APIs/api_typeconge";

export const useGetAllTypeConge = ({ onSuccess, onError } = {}) => {

    return useQuery({
      queryKey: ["allTypeConge"],
      queryFn: getAllTypeConge,
      onSuccess: () => {
        onSuccess && onSuccess();
      },
      onError: () => {
        onError && onError();
      },
    });
  };