import React, { useState } from 'react';
import MessageSearchAmiibo from './MessageSearchAmiibo';

const SearchAmiibo = ({saveSearch, setSaveSearch}) => {

    const [error, setError] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        if(saveSearch.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        setSaveSearch(saveSearch = '');
    }

    const handleChange = e =>{
        setSaveSearch(e.target.value.toLowerCase()); 
        setError(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    className="w-full block p-4 m-auto mt-10 text-xl bg-gray-300 outline-none focus:shadow-lg rounded-lg" 
                    type="text" 
                    placeholder="Search by name or character"
                    name="search"
                    value={saveSearch}
                    onChange={handleChange} 
                />
                { error && (<MessageSearchAmiibo message="Please enter a name of amiibo series"/>) }
            </form>
        </div>
    )
}

export default SearchAmiibo
