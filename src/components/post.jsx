import React from 'react';
import classes from '../App.css';

const Post =(props) => {
    return (
        <div className={classes}>
            <div className="post"> {props.post.id} 
        <img className="post__image" src={props.post.imgUrl}/>
        <div className="post__content">
            <h2 className="post__title">{props.post.title} </h2>
            <p className="post__text">{props.post.text}</p>
            <div className="post__footer">
                <time className="post__time">{props.post.date}</time>
                <a className="post__tag">создание сайтов</a>
                <a className="post__link">Читать</a>
            </div>
        </div>
    </div>
        </div>
        
    
    )
}
export default Post;

