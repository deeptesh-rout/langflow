import { changeUser, useMutationFunctionType } from "@/types/api";
import { UseMutationResult } from "@tanstack/react-query";
import { api } from "../../api";
import { getURL } from "../../helpers/constants";
import { UseRequestProcessor } from "../../services/request-processor";

interface UpdateUserParams {
  user_id: string;
  user: changeUser;
}

export const useUpdateUser: useMutationFunctionType<UpdateUserParams> = (
  options?,
) => {
  const { mutate } = UseRequestProcessor();

  async function updateUser({ user_id, user }: UpdateUserParams): Promise<any> {
    const res = await api.patch(`${getURL("USERS")}/${user_id}`, user);
    return res.data;
  }

  const mutation: UseMutationResult<UpdateUserParams, any, UpdateUserParams> =
    mutate(["useUpdateUser"], updateUser, options);

  return mutation;
};
