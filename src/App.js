import React from 'react';
import AmiiboRouter from './router/AmiiboRouter';
import AmiiboContext from './context/AmiiboContext';


const App = () => {
    return (
        <AmiiboContext>
            <AmiiboRouter/>
        </AmiiboContext>
    )
}

export default App
