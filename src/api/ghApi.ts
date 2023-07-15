import axios from "axios";
import { apiConfig } from "../config/gh-api";

export const ghApi = axios.create({
  baseURL: apiConfig.baseUrl,
  headers: {
    Authorization: `Bearer ${apiConfig.apiKey}`,
  },
});
