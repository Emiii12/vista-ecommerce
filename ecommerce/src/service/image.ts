/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// import axios, { AxiosResponse } from "axios";
// import { apiIA, apiStorage } from "./urlBase";

// type OverlapResponse = {
//     Link: string;
// };

// export const getOverlapCloth = async (
//   avatarUrl: string,
//   prendaSuperior: string,
//   prendaInferior: string,
//   maskUpper: string,
//   maskLower: string,
// ): Promise<OverlapResponse> => {
//   let response: AxiosResponse<OverlapResponse>;
//   if (prendaSuperior && prendaInferior) {
//     response = await apiIA.get(
//       `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}&garm_url_1=${prendaInferior}&mask_location_1=${maskLower}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   } else if (prendaSuperior) {
//     response = await apiIA.get(
//       `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   } else {
//     response = await apiIA.get(
//       `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaInferior}&mask_location_0=${maskLower}`,
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       },
//     );
//   }
//   return response.data;
// };


import axios, { AxiosResponse } from "axios";
import { apiIA, apiStorage } from "./urlBase";

type OverlapResponse = {
  Link: string;
};

export const getOverlapCloth = async (
  avatarUrl: string,
  prendaSuperior: string,
  prendaInferior: string,
  maskUpper: string,
  maskLower: string,
): Promise<OverlapResponse> => {
  let response: AxiosResponse<OverlapResponse>;

  try {
    if (prendaSuperior && prendaInferior) {
      response = await apiIA.get(
        `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}&garm_url_1=${prendaInferior}&mask_location_1=${maskLower}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 100000, // Timeout de 10 segundos
        }
      );
    } else if (prendaSuperior) {
      response = await apiIA.get(
        `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaSuperior}&mask_location_0=${maskUpper}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 100000, // Timeout de 10 segundos
        }
      );
    } else {
      response = await apiIA.get(
        `/superposicion?dict_url=${avatarUrl}&garm_url_0=${prendaInferior}&mask_location_0=${maskLower}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 100000, // Timeout de 10 segundos
        }
      );
    }

    return response.data;
  } catch (error) {
    console.error("Error during the request:", error);
    throw new Error("Error fetching data from the API.");
  }
};