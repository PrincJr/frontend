import React, { useState } from 'react';


import { ReactComponent as Like } from '../../../../assets/icons/like.svg'
import { ReactComponent as LikeActive } from '../../../../assets/icons/like_active.svg'
import { ReactComponent as Comment } from '../../../../assets/icons/comment.svg'
import { ReactComponent as Send } from '../../../../assets/icons/send.svg'
import { ReactComponent as Save } from '../../../../assets/icons/send.svg'

import './style.css'

export default function Post({ item }) {

    const [isLike, setIsLike] = useState(false)

    const [comments, setComments] = useState([])

    const [comment, setComment] = useState(null)

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        comments.push(comment)
        setComment("")
    }

    return (
        <article className="post">
            <div className="header-post">
                <div className="photography">
                    <img src={`/images/${item.avatar}.jpeg`}
                        alt="foto perfil de quem postou" />
                </div>
                <div className="container-post">
                    <h5>{item.username}</h5>
                    <div>{item.bio}</div>
                </div>
            </div>
            <div className="container-pub">
                <img src={item.picture} alt="post-img" />
            </div>
            <div className="footer-container">
                <section className="tools">
                    <span>
                        {
                            !isLike ? <Like onClick={() => setIsLike(true)} /> :
                                <LikeActive onClick={() => setIsLike(false)} />

                        }
                    </span>
                    <span>
                        <Comment />
                    </span>
                    <span>
                        <Send />
                    </span>
                    <span className="save">
                        <Save />
                    </span>
                </section>
                <section >
                    {
                        comments.map((i, index) => (
                            <div key={index}>
                                <span><strong>bendevoficial </strong>{i}</span>
                            </div>
                        ))
                    }
                </section>

                <section className="coment">
                    <form onSubmit={handleSubmit}>
                        <textarea placeholder="Adicione um comentário..." onChange={handleChange} value={comment}></textarea>
                        <button type="submit">Publicar</button>
                    </form>
                </section>
            </div>
        </article>
    );
}
