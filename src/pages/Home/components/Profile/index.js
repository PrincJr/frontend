import React from 'react';

import './style.css'

export default function Profile() {
  return (
    <div className="profile-container">
        <img src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83584403_672321270252727_2207677391315140608_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_ohc=eDOz_406KYwAX-0YqKI&oh=66ff81a6aa67c617740eaf0a2e51bb72&oe=5E966747" alt="@bendevoficial"/>
        <div className="details">
            <h2>bendevoficial</h2>
            <div className="description">Desenvolvedor web e mobile</div>
        </div>
    </div>
  );
}
