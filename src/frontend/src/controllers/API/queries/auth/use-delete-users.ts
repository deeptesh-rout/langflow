import { useMutationFunctionType } from "@/types/api";
import { UseMutationResult } from "@tanstack/react-query";
import { api } from "../../api";
import { getURL } from "../../helpers/constants";
import { UseRequestProcessor } from "../../services/request-processor";

interface DeleteUserParams {
  user_id: string;
}

export const useDeleteMessages: useMutationFunctionType<DeleteUserParams> = (
  options?,
) => {
  const { mutate } = UseRequestProcessor();

  const deleteMessage = async ({ user_id }: DeleteUserParams): Promise<any> => {
    const res = await api.delete(`${getURL("USERS")}/${user_id}`);
    return res.data;
  };

  const mutation: UseMutationResult<DeleteUserParams, any, DeleteUserParams> =
    mutate(["useDeleteMessages"], deleteMessage, options);

  return mutation;
};
