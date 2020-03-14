import React from 'react';

import './style.css'

export default function Profile() {
  return (
    <div className="profile-container">
        <img src="/images/Male.jpeg" alt="@bendevoficial" />
        <div className="details">
            <h2>bendevoficial</h2>
            <div className="description">Desenvolvedor web e mobile</div>
        </div>
    </div>
  );
}
