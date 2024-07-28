import axios from "@/api/AxiosInstance";
import { IResponseById, IResponse } from "@/interface/response.interface";

export interface IGetParameter {
  perpage?: number;
  page?: number;
  search?: string;
}
type IGets = Record<string, any>;

const useAPI = <T>() => {
  const get = async (endPoint: string, args?: IGets): Promise<IResponse<T>> => {
    try {
      const url = new URL(
        `${import.meta.env.MUSIC_MANAGEMENT_API_URL}${endPoint}`
      );
      if (args) {
        const searchParams = new URLSearchParams(url.search);
        for (const [key, value] of Object.entries(args)) {
          searchParams.set(key, value);
        }
        url.search = searchParams.toString();
      }

      const response = await axios.get(url.toString());

      return {
        data: response?.data?.data,
        message: "Fetch successfully",
        status: true,
      };
    } catch (error: any) {
      return {
        data: null,
        message: error?.response?.data?.message,
        status: false,
      };
    }
  };

  const getById = async (
    endPoint: string,
    id: string
  ): Promise<IResponseById<T>> => {
    try {
      const response = await axios.get(`${endPoint}/${id}`);
      return {
        data: response?.data?.data,
        message: "Fetch successfully",
        status: true,
      };
    } catch (error: any) {
      return {
        data: null,
        message: error?.response?.data?.message,
        status: false,
      };
    }
  };

  const post = async (endPoint: string, data: Partial<T>) => {
    try {
      const response = await axios.post(endPoint, data);
      return {
        status: true,
        data: response.data.data,
        message: null,
      };
    } catch (error: any) {
      return {
        status: false,
        data: null,
        message: error?.response?.data?.message,
      };
    }
  };

  const patch = async (endPoint: string, data: Partial<T>) => {
    try {
      const response = await axios.patch(endPoint, data);
      return {
        status: true,
        data: response.data.data,
        message: null,
      };
    } catch (error: any) {
      return {
        status: false,
        data: null,
        message: error?.response?.data?.message,
      };
    }
  };

  const remove = async (endPoint: string, id: string) => {
    try {
      await axios.delete(`${endPoint}/${id}`);
      return {
        status: true,
        message: null,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error?.response?.data?.message,
      };
    }
  };

  return { get, getById, post, patch, remove };
};

export default useAPI;
