/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import { ShoppingCartIcon, PhotoIcon } from "@heroicons/react/24/outline";
import { getOverlapCloth } from "@/service/image";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { LogoClostechCarga } from "../../public/logo";
import { ModalPreview } from "../components/Modal/ModalPreview";

export default function Home() {
  const [urlImageTop, setUrlImageTop] = useState<string>("");
  const [urlImageDown, setUrlImageDown] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const avatar =
    "https://imgclostechstorage.blob.core.windows.net/userimg/26347d68-257a-4d71-9530-36e39671dde6.webp";

  const superior = [
    {
      name: "Camiseta SanBuddy",
      tipo: "Deportivo de Hombre",
      precio: "33.000",
      url: "https://acdn.mitiendanube.com/stores/544/116/products/11-b16d4694e48b2015ff16863353444146-1024-1024.png",
    },
    {
      name: "Remera Trevo",
      tipo: "Deportivo de Hombre",
      precio: "40.000",
      url: "https://dcdn.mitiendanube.com/stores/090/363/products/remerasegundapielm-largahombretrevoweb-63797426a9c243f71717136278847001-480-0.png",
    },
  ];

  const inferior = [
    {
      name: "Pantalón Jean Casual",
      tipo: "Casual de Hombre",
      precio: "15.000",
      url: "https://www.pngmart.com/files/1/Mens-Pant-Transparent-PNG.png",
    },
    {
      name: "Pantalón de Ripstop",
      tipo: "Formal de Hombre",
      precio: "16.000",
      url: "https://acdn.mitiendanube.com/stores/894/482/products/whatsapp_image_2021-03-22_at_11-29-20-removebg-preview11-46af83229bfa8f51e616164243549753-640-0.png",
    },
  ];

  const { isError: isErrorImage, mutate } = useMutation({
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
      setIsLoading(false); 
    },
    onError: () => {
      setIsLoading(false); 
    },
  });

  const handleSelect = (imageUrl: string, isTop: boolean) => {
    setSelectedImages((prevImages) => {
      const alreadySelected = prevImages.includes(imageUrl);
      if (alreadySelected) {
        if (isTop) setUrlImageTop("");
        else setUrlImageDown("");

        return prevImages.filter((img) => img !== imageUrl);
      } else {
        if (isTop) setUrlImageTop(imageUrl);
        else setUrlImageDown(imageUrl);

        return [...prevImages, imageUrl];
      }
    });
  };

  const handleConfirm = () => {
    setIsLoading(true); 
    setImage(""); 
    mutate();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <main className="relative h-screen w-screen flex items-end">
        <div className="h-[calc(100vh-70px)] w-full p-8 ">
          <div className="grid grid-cols-3 grid-rows-4 gap-4 w-full h-full">
            <div className="col-span-4 row-span-4 col-start-2 row-start-1 w-full h-full border-black pb-14">
              <div className="w-full h-full flex flex-col gap-y-2 p-5">
                <div className="w-full h-1/2 flex gap-4 px-10">
                  {superior.map((prenda, name) => (
                    <>
                      <div
                        className={`w-1/2 h-full flex bg-gray-100 rounded-lg p-5
                          ${selectedImages.includes(prenda.url) ? "border-2 border-pink-700" : ""}`}
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
                              className={`w-full py-2 bg-blue-900 rounded-sm transition-all duration-100 hover:bg-blue-950 hover:scale-105
                                ${isLoading ? "bg-gray-600 pointer-events-none cursor-not-allowed" : ""}`}
                              onClick={() => handleSelect(prenda.url, true)}
                            >
                              <p className="text-white text-sm">
                                {selectedImages.includes(prenda.url)
                                  ? "Deseleccionar"
                                  : "Seleccionar"}
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="w-full h-1/2 flex gap-4 px-10">
                  {inferior.map((prenda, name) => (
                    <>
                      <div
                        className={`w-1/2 h-full flex bg-gray-100 rounded-lg p-5
                          ${selectedImages.includes(prenda.url) ? "border-2 border-pink-700" : ""}`}
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
                              className={`w-full py-2 bg-blue-900 rounded-sm transition-all duration-100 hover:bg-blue-950 hover:scale-105
                                ${isLoading ? "bg-gray-600 pointer-events-none cursor-not-allowed" : ""}`}
                              onClick={() => handleSelect(prenda.url, false)} 
                            >
                              <p className="text-white text-sm">
                                {selectedImages.includes(prenda.url)
                                  ? "Deseleccionar"
                                  : "Seleccionar"}
                              </p>
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div className="w-full px-10 flex justify-between items-center">
                  <h1 className="text-lg text-black font-bold">
                    Prendas Seleccionadas: {selectedImages.length}
                  </h1>
                  <button
                    className={`py-2 bg-blue-700 px-5 rounded-md transition-colors duration-150 hover:bg-blue-800
                      ${isLoading ? "bg-gray-600 pointer-events-none cursor-not-allowed" : ""}`}
                    onClick={handleConfirm}
                    disabled={isLoading}
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
            <div className="row-span-4 col-start-1 row-start-1 w-full h-full p-5">
                {isLoading ? (
                <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-20">
                  <div className="w-40 h-40">
                    <LogoClostechCarga className={"animate-pulse"} />
                  </div>
                </div>
              ) : ( 
                <>
                  <div className="w-full h-full bg-gray-200 rounded-lg p-10">
                    <Image
                      src={image.length === 0 ? avatar : image}
                      width={1000}
                      height={1000}
                      alt="avatar"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </>
              )}
            </div>
          </div>  
        </div>
      </main>
    </>
  );
}
