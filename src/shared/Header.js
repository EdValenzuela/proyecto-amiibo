import React from 'react';
import { Link } from 'react-router-dom';

import { ReactSVG } from "react-svg";
import logoNintendo from '../img/logo-nintendo.svg';

const Header = () => {
    return (
        <header className="w-full h-20 flex items-center bg-red-700 pl-5">
            <h1 className="uppercase">
                <Link to="/" title="Home">
                    <ReactSVG src={ logoNintendo } className="animate-pulse cursor-pointer" />
                </Link>
            </h1>
        </header>
    )
}

export default Header
