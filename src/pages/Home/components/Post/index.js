import React, {useState} from 'react';


import { ReactComponent as Like } from '../../../../assets/icons/like.svg'
import { ReactComponent as LikeActive } from '../../../../assets/icons/like_active.svg'
import { ReactComponent as Comment } from '../../../../assets/icons/comment.svg'
import { ReactComponent as Send } from '../../../../assets/icons/send.svg'
import { ReactComponent as save } from '../../../../assets/icons/send.svg'

import './style.css'

import * as GeneralAction from '../../../../storage/modules/general/actions'

export default function Post({ item, index }) {

    const [isLike, setIsLike] = useState(false)

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
                            !isLike ? <Like onClick={() => setIsLike(true) } /> :
                                      <Like onClick={() => setIsLike(false) } />

                        }
                    </span>
                    <span>
                        <Comment />
                    </span>
                    <span>
                        <Send />
                    </span>
                    <span className="save">

                    </span>
                </section>
                <section className="coment">
                    <form>
                        <textarea placeholder="Adicione um comentário..."></textarea>
                        <button type="submit">Publicar</button>
                    </form>
                </section>
            </div>
        </article>
    );
}
