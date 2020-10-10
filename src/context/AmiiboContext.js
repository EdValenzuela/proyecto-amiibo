import { Steps } from 'antd';
import React, { useState, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const FigureContext = createContext();

const AmiiboContext = ({children}) => {

    const [data, loading] = useFetch('https://www.amiiboapi.com/api/amiibo/');
    const [page, setPage] = useState({
        minValue: 0,
        maxValue: 10
    })

    const handleChange = value => {
        setPage({
            minValue: (value - 1) * 10,
            maxValue: value * 10
          });
      };

    return (
        <FigureContext.Provider value={{data, loading, handleChange, page}}>
            {children}
        </FigureContext.Provider>
    )
}

export default AmiiboContext
