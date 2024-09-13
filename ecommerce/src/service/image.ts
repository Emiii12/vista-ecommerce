/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse } from "axios";
import { apiIA, apiStorage } from "./urlBase";

type OverlapResponse = {
    Link: string;
};

type responseTypeApiFront = {
  url: string;
  blobName: string;
};

export const getOverlapCloth = async (
  avatarUrl: string,
  prendaSuperior: string,
  prendaInferior: string,
  maskUpper: string,
  maskLower: string,
): Promise<OverlapResponse> => {
  let response: AxiosResponse<OverlapResponse>;
  if (prendaSuperior && prendaInferior) {
    response = await apiIA.get(
      `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}&garm_url_1=${prendaInferior}&mask_location_1=${maskLower}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } else if (prendaSuperior) {
    response = await apiIA.get(
      `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } else {
    response = await apiIA.get(
      `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaInferior}&mask_location_0=${maskLower}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
  return response.data;
};
  
export const uploadImage = async (
  image: File | Blob,
  container: string,
): Promise<responseTypeApiFront> => {
  const formData = new FormData();
  formData.append("image", image as Blob);
  formData.append("container", container);
  const response = await axios.post(`${apiStorage}/api/image`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const deleteImage = async (
  blobName: string,
  continaer: string,
): Promise<any> => {
  const response = await axios.delete(
    `${apiStorage}/api/image?blobName=${blobName}&container=${continaer}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return response.data;
};