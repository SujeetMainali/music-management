import { type IPagination } from "@/interface/pagination.interface";

export interface IResponse<T> {
  data: { data: T[]; pagination: IPagination } | null;
  message: string;
  status: boolean;
}

export interface IResponseById<T> {
  data: T | null;
  message: string;
  status: boolean;
}
