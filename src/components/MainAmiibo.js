import React, { useState, useContext } from 'react';
import { Pagination, BackTop } from 'antd';
import { FigureContext } from '../context/AmiiboContext';

import CardAmiibo from './CardAmiibo';
import SearchAmiibo from './SearchAmiibo';
import LoadingAmiibo from './LoadingAmiibo';

import logoAmiibo from '../img/logo-amiibo.png';

const MainAmiibo = () => {

    const { data, loading, handleChange, page } = useContext(FigureContext);
    const [saveSearch, setSaveSearch] = useState('');
    const querySearch = data.filter(item => { return (saveSearch !== '') ? item.amiiboSeries.toLowerCase().includes(saveSearch) : data } );

    return (
        <>
            <div className="container xl:container m-auto p-5">
                <div className="my-10"> <img src={ logoAmiibo } className="m-auto" alt="img" /> </div>
                <h1 className="text-black text-center text-3xl">In this App you can find all the Amiibos</h1>
                
                <SearchAmiibo saveSearch={ saveSearch } setSaveSearch={ setSaveSearch } />

                {
                    loading ? (
                        <LoadingAmiibo/>
                    ): (
                        <>
                        <ul className="flex flex-wrap flex-row justify-center mt-5">
                        {
                            querySearch.slice(page.minValue, page.maxValue).map( (item, index) => (
                                <CardAmiibo key={index} item={item} />
                            ))
                        }
                        </ul>
                    
                        <div className="flex justify-center items-center">
                            <Pagination defaultCurrent={1} defaultPageSize={10} onChange={ handleChange } total={ querySearch.length } />
                        </div> 
                        </>
                    )
                }
                <BackTop>
                    <div className="flex items-center justify-center rounded bg-red-700 w-10 h-10 text-white text-4xl font-bold hover:bg-yellow-500">^</div>
                </BackTop>
            </div>
        </>
    )
}

export default MainAmiibo