/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { getOverlapCloth } from "@/service/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

const maskMapping: Record<string, string> = {
  remera: "upper_body",
  buzo: "upper_body",
  camiseta: "upper_body",
  camisa: "upper_body",
  chaqueta: "upper_body",
  pantalon: "lower_body",
  jeans: "lower_body",
  shorts: "lower_body",
  falda: "lower_body",
  vestido: "dresses",
  zapatos: "shoes",
};

export default function Home() {
  const [urlImageTop, setUrlImageTop] = useState<string>("");
  const [urlImageDown, setUrlImageDown] = useState<string>("");
  const [maskTop, setMaskTop] = useState<string>("");
  const [maskDown, setMaskDown] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [setImageUrl, setImageIaResult] = useState<string>("");

  const superior = [
    {
      name: "Camiseta SanBuddy",
      tipo: "remera",
      precio: "33.000",
      url: "https://acdn.mitiendanube.com/stores/544/116/products/11-b16d4694e48b2015ff16863353444146-1024-1024.png",
    },
    {
      name: "Remera Trevo",
      tipo: "remera",
      precio: "40.000",
      url: "https://dcdn.mitiendanube.com/stores/090/363/products/remerasegundapielm-largahombretrevoweb-63797426a9c243f71717136278847001-480-0.png",
    },
    {
      name: "Remera Brooklyn",
      tipo: "remera",
      precio: "21.000",
      url: "https://acdn.mitiendanube.com/stores/001/106/550/products/303b1fab-d6b0-4977-aa63-cfa9f12f857a-1-1597f88f6a873fde5c17017229455925-1024-1024.png",
    },
  ];

  const inferior = [
    {
      name: "Pantalón Cargo Marrón",
      tipo: "pantalon",
      precio: "15.000",
      url: "https://www.pngmart.com/files/1/Mens-Pant-Transparent-PNG.png",
    },
    {
      name: "Pantalón de Ripstop",
      tipo: "pantalon",
      precio: "16.000",
      url: "https://acdn.mitiendanube.com/stores/894/482/products/whatsapp_image_2021-03-22_at_11-29-20-removebg-preview11-46af83229bfa8f51e616164243549753-640-0.png",
    },
    {
      name: "Jean Formal Azul",
      tipo: "pantalon",
      precio: "18.000",
      url: "https://static.wixstatic.com/media/1e7822_2da25cc5245c475eb44270413d0796c1~mv2.png/v1/fill/w_476,h_906,al_c,lg_1,q_90,enc_auto/1e7822_2da25cc5245c475eb44270413d0796c1~mv2.png",
    },
  ];

  const avatar =
    "https://imgclostechstorage.blob.core.windows.net/userimg/26347d68-257a-4d71-9530-36e39671dde6.webp";

  console.log(urlImageDown, urlImageTop);

  const { isPending: isLoading, isError: isErrorImage, mutate } = useMutation({
    mutationFn: () =>
      getOverlapCloth(
        avatar,
        urlImageTop || "",
        urlImageDown || "",
        "upper_body",
        "lower_body"
      ),
    onSuccess: (data) => {
      setImage(data.Link);
      console.log("URL DE LA IMAGEN: ", data.Link)
    },
  });

  const handleConfirm = (
    setImageFn: React.Dispatch<React.SetStateAction<string>>,
    imageUrl: string
  ) => {
    setImageFn(imageUrl);
    mutate();
  };

  return (
    <>
      <main className="h-screen w-screen flex items-end">
        <div className="h-[calc(100vh-70px)] w-full p-8 ">
          <div className="grid grid-cols-5 grid-rows-4 gap-4 w-full h-full">
            <div className="col-span-4 row-span-4 col-start-2 row-start-1 w-full h-full border-black  p-5">
              <div className="w-full h-full flex flex-col gap-y-2">
                <div className="w-full h-1/2 flex gap-4 px-10 pb-5">
                  {superior.map((prenda, name) => (
                    <>
                      <div
                        className="w-1/3 h-full flex bg-gray-100 rounded-lg"
                        key={name}
                      >
                        <div className="w-[50%] h-full">
                          <Image
                            src={prenda.url}
                            width={1000}
                            height={1000}
                            alt=""
                            className="w-full h-full object-contain p-8"
                          />
                        </div>
                        <div className="w-[50%] h-full py-10 px-3 flex flex-col justify-between">
                          <div className="w-full h-full flex flex-col justify-between pb-10">
                            <div className="w-full">
                              <p className="text-black font-bold text-base mb-2">
                                {prenda.name}
                              </p>
                              <p className="text-black font-extralight text-sm mb-5">
                                {prenda.tipo}
                              </p>
                            </div>
                            <div className="">
                              <p className="text-black font-bold text-lg">
                                ${prenda.precio}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="w-full flex gap-2">
                              <button className="w-full py-2 bg-gray-900 rounded-sm transition-all duration-100 hover:bg-black hover:scale-105">
                                <p className="text-white text-xs">Comprar</p>
                              </button>
                              <button className="w-full py-2 bg-gray-900 rounded-sm transition-all duration-100 hover:bg-black hover:scale-105">
                                <p className="text-white text-xs flex justify-center items-center gap-2">
                                  Agregar
                                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                                </p>
                              </button>
                            </div>
                            <button
                              className="w-full py-2 bg-blue-900 rounded-sm transition-all duration-100 hover:bg-blue-950 hover:scale-105"
                              onClick={() =>
                                handleConfirm(setUrlImageTop, prenda.url)
                              }
                            >
                              <p className="text-white text-base">
                                Probar prenda
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="w-full h-1/2 flex gap-4 px-10 pb-5">
                  {inferior.map((prenda, name) => (
                    <>
                      <div
                        className="w-1/3 h-full flex bg-gray-100 rounded-lg"
                        key={name}
                      >
                        <div className="w-[50%] h-full">
                          <Image
                            src={prenda.url}
                            width={1000}
                            height={1000}
                            alt=""
                            className="w-full h-full object-contain p-8"
                          />
                        </div>
                        <div className="w-[50%] h-full py-10 px-3 flex flex-col justify-between">
                          <div className="w-full h-full flex flex-col justify-between pb-10">
                            <div className="w-full">
                              <p className="text-black font-bold text-base mb-2">
                                {prenda.name}
                              </p>
                              <p className="text-black font-extralight text-sm mb-5">
                                {prenda.tipo}
                              </p>
                            </div>
                            <div className="">
                              <p className="text-black font-bold text-lg">
                                ${prenda.precio}
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="w-full flex gap-2">
                              <button className="w-full py-2 bg-gray-900 rounded-sm transition-all duration-100 hover:bg-black hover:scale-105">
                                <p className="text-white text-xs">Comprar</p>
                              </button>
                              <button className="w-full py-2 bg-gray-900 rounded-sm transition-all duration-100 hover:bg-black hover:scale-105">
                                <p className="text-white text-xs flex justify-center items-center gap-2">
                                  Agregar
                                  <ShoppingCartIcon className="w-5 h-5 text-white" />
                                </p>
                              </button>
                            </div>
                            <button
                              className="w-full py-2 bg-blue-900 rounded-sm transition-all duration-100 hover:bg-blue-950 hover:scale-105"
                              onClick={() =>
                                handleConfirm(setUrlImageDown, prenda.url)
                              }
                            >
                              <p className="text-white text-base">
                                Probar prenda
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className="row-span-4 col-start-1 row-start-1 w-full h-full p-10">
              
                {isLoading && !image.length ? (
                  <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center rounded-lg">
                    <h1 className="text-4xl font-bold text-white">Cargando...</h1>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg p-5">
                    <Image
                      src={image.length === 0 ? avatar : image}
                      width={1000}
                      height={1000}
                      alt="avatar"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
