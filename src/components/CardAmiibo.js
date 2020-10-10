import React from 'react'
import { Link } from 'react-router-dom';

const CardAmiibo = ({item}) => {

    const {amiiboSeries, image, head, tail} = item;

    return (
        <>
            <li className="flex flex-col justify-between items-center border-2 border-red-700 rounded-md cursor-pointer px-2 py-4 m-5 group hover:bg-red-900">
                <p className="bg-red-700 font-semibold py-2 px-4 border border-red-700 rounded-full text-sm text-white">{amiiboSeries}</p>
                <div className="my-5 w-40">
                    <img src={image} className="w-full" alt="img"/>
                </div>
                
                <Link to={`/detail/${head}${tail}`} title={`/detail/${head}${tail}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded uppercase text-base">
                    ver más
                </Link>
            </li>
        </>
    )
}

export default CardAmiibo
