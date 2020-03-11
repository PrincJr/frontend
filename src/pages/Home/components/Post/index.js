import React, { Component } from 'react';

// import { Container } from './styles';

import './style.css'

export default class Post extends Component {
    render() {
        return (
            <article className="post">
                <div className="header-post">
                    <div className="photography">
                        <img src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/83584403_672321270252727_2207677391315140608_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_ohc=eDOz_406KYwAX-0YqKI&oh=66ff81a6aa67c617740eaf0a2e51bb72&oe=5E966747"
                            alt="foto perfil de quem postou" />
                    </div>
                    <div className="container-post">
                        <h5>Júnior Silva</h5>
                    </div>
                </div>
                <div className="container-pub">
                    <img src="https://instagram.fnat1-1.fna.fbcdn.net/v/t51.2885-15/e35/89602911_206222990739754_2311956367490192721_n.jpg?_nc_ht=instagram.fnat1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=ijJcRrAepjAAX8Q9dv1&oh=eef132fc2851aac88542a13010b4524c&oe=5E9A0A81" alt="post-img" />
                </div>
                <div className="footer-container">
                    <section className="tools">
                        <span>
                            <svg aria-label="Descurtir" class="_8-yf5 " fill="#ed4956" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M35.3 35.6c-9.2 8.2-9.8 8.9-11.3 8.9s-2.1-.7-11.3-8.9C6.5 30.1.5 25.6.5 17.8.5 9.9 6.4 3.5 13.7 3.5 20.8 3.5 24 8.8 24 8.8s3.2-5.3 10.3-5.3c7.3 0 13.2 6.4 13.2 14.3 0 7.8-6.1 12.3-12.2 17.8z" fill-rule="evenodd"></path></svg>
                        </span>
                        <span>
                        <svg aria-label="Comentar" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
                        </span>
                        <span>
                        <svg aria-label="Compartilhar publicação" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M46.5 3.5h-45C.6 3.5.2 4.6.8 5.2l16 15.8 5.5 22.8c.2.9 1.4 1 1.8.3L47.4 5c.4-.7-.1-1.5-.9-1.5zm-40.1 3h33.5L19.1 18c-.4.2-.9.1-1.2-.2L6.4 6.5zm17.7 31.8l-4-16.6c-.1-.4.1-.9.5-1.1L41.5 9 24.1 38.3z"></path><path d="M14.7 48.4l2.9-.7"></path></svg>
                        </span>
                        <span className="save">
                        <svg aria-label="Salvar" class="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
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
}
