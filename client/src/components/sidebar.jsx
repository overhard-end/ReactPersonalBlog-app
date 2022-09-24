import React from 'react';
import { observer } from 'mobx-react-lite';

export const Sidebar = observer(() => {
  return (
    <aside className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__header--img" src="../images/1212.jpg" alt="sidebar__img" />

        <h3> ГКОУ РД Горьковская ООШ Унцукульского района в Хасавюртовском районе с. Колоб</h3>

        <span></span>
      </div>
      <div className="sidebar__main">
        <p>
          Блог посвящен учебному процесу здесь каждый учитель может прочитать статью которая его
          интересует или написать свою статью на интересную тему
        </p>
        <span></span>
        <div className="sadibar__main--buttons">
          <button className="blue contact-me">Сайт школы</button>
        </div>
      </div>
    </aside>
  );
});
