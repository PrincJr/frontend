import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux'

import './style.css'

import Post from './components/Post'

import Profile from './components/Profile'

import Stories from './components/Stories'

import api from '../../services/api'

import * as GeneralAction from '../../storage/modules/general/actions'

export default function Home() {

    const { posts } = useSelector(state => state.general)

    const dispatch = useDispatch()


    useEffect(() => {
        (async function () {
            _getpostsFunction();
        })()
    }, [])


    async function _getpostsFunction() {
        try {
            const response = await api.get('instagram_feed.json?key=d3fb7580');
            dispatch(GeneralAction.setPost({data: response.data}))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="home">

            <div className="post_container">
                {
                    posts.map((i, index) => (
                        <Post item={i} key={index} index={index}/>
                    ))
                }
            </div>
            <div className="detail_container">
                <Profile />
                <Stories />
            </div>
        </div>
    );
}
