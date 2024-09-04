import { AxiosInstance } from "axios";
import { Result } from "./types/common";
import { Category } from "./types";
declare const listCategories: (apiClient: AxiosInstance) => Promise<Result<Category>>;
declare const getCategory: (apiClient: AxiosInstance, slug: string) => Promise<Category>;
export { listCategories, getCategory };
