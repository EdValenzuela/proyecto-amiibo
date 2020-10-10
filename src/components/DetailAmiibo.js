import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DetailAmiibo = () => {
  const { id } = useParams();
  const [data] = useFetch(`https://www.amiiboapi.com/api/amiibo/?id=${id}`);
  const { amiiboSeries, image, character, gameSeries, name, type } = data;

  return (
    <div className="container m-auto">
      <div className="w-2/4 m-auto mt-10 flex flex-row flex-auto justify-around items-center border-2 border-red-700 rounded-md cursor-pointer px-2 py-4">
        <div className="flex flex-col items-center">
          <p className="bg-transparent text-red-700 font-semibold py-2 px-4 border border-red-700 rounded-full text-base uppercase text-center">
            amiiboSeries: {amiiboSeries}
          </p>
          <div className="my-5 w-32">
            <img src={image} className="w-full" alt="img" />
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <p className="font-semibold text-lg capitalize">name: {name}</p>
          <p className="font-semibold text-lg capitalize">
            character: {character}
          </p>
          <p className="font-semibold text-lg capitalize">
            gameSeries: {gameSeries}
          </p>
          <p className="font-semibold text-lg capitalize">type: {type}</p>
          <Link
            to="/"
            title="Volver"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded uppercase text-base"
          >
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailAmiibo;
