import axios from "axios";

export const apiIA = axios.create({
  baseURL: "https://api-clostech-ai-3.centralus.cloudapp.azure.com",
});

export const apiIADelete = axios.create({
  baseURL: "https://api-clostech-ai-1-prod.azurewebsites.net",
});