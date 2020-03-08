import React from 'react';

import './style.css'

import Post from './components/Post'

import Profile from './components/Profile'

import Stories from './components/Stories'

export default function Home() {
    return (
        <div className="home">

            <div className="post_container">
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="detail_container">
                <Profile />
                <Stories />
            </div>
        </div>
    );
}
