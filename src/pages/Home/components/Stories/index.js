import React from 'react';

import './style.css'

export default function Stories() {
    return (
        <div className="stories">
            <div className="header">
                <span>Stories</span>
                <button>Ver tudo</button>
            </div>
            <div className="itens">
                <div className="storie-item">
                    <div className="profile-container">
                        <img src="/images/Male.jpeg" alt="@bendevoficial" />
                        <div className="details">
                            <h2>bendevoficial</h2>
                            <div className="description">24 minutos</div>
                        </div>
                    </div>
                    <div className="profile-container">
                        <img src="/images/Male.jpeg" alt="@bendevoficial" />
                        <div className="details">
                            <h2>eliashonoratto</h2>
                            <div className="description">30 minutos</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
