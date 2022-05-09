import React from 'react'

export const Works = (props) => {
  return (  
<div class="works-item">
            <div class="works-item__left-item">
                <img src={props.work.imgUrl} alt="" class="left-item__img"/>
            </div>
            <div class="works-item__right-item">
                <h3 class="right-item__name">{props.work.title}</h3>
                <p class="right-item__text">{props.work.text}</p>
                <div class="right-item__tags">
                    <p class="work-tag">{props.work.tag1}</p>
                    <p class="work-tag">{props.work.tag2}</p>
                    <p class="work-tag">{props.work.tag3}</p>
                </div>
                <div class="right-item__btn-item">
                    <a href={props.work.workLink} class="go-site-btn">Перейти на сайт</a>
                </div>
            </div>
        </div>
  )
}



