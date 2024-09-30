import axios, { AxiosResponse } from "axios";
import { ApiResponse } from "@/routes/chat/models.ts";

const sendOpenaiRequest = async (
  url: string,
  token: string,
  data: object,
): Promise<AxiosResponse<ApiResponse>> => {
  try {
    return await axios.post<ApiResponse>(url, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    throw new Error(`Error: ${error}`);
  }
};

export default sendOpenaiRequest;
