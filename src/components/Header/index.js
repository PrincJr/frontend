import React from 'react';


import { ReactComponent as Home } from '../../assets/icons/home.svg'
import { ReactComponent as Search } from '../../assets/icons/search-menu.svg'
import { ReactComponent as Feed } from '../../assets/icons/feed.svg'
import './style.css'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="container-image">
                    <img src="/images/instagram-logo.png" alt="Logo do instagram" />
                </div>
                <div className="input-container">
                    <input />
                </div>
                <div className="container-icons">
                    <div className="icons">
                        <div>
                            <Home />
                        </div>
                        <div>
                            <Search />
                        </div>
                        <div>
                            <Feed />
                        </div>
                        <div>
                            <img src="/images/Male.jpeg" alt="@bendevoficial" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
