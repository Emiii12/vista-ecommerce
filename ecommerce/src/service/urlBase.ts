import axios from "axios";

export const apiIA = axios.create({
  baseURL: "https://api-clostech-ai-3.centralus.cloudapp.azure.com",
});

export const apiStorage = axios.create({
  baseURL: "https://imgclostechstorage.blob.core.windows.net",
});