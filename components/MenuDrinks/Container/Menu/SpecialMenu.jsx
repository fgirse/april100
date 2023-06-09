import React from 'react';

import {  MenuItem, SubHeading } from '../../Components';
import { datamenu  } from '../../../../data';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_flaschenPost  flex__center">
        <p className="app__specialMenu-menu_heading">Bier vom Fass</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((bierOffen, index) => (
            <MenuItem key={bierOffen.title + index} title={bierOffen.title} price={bierOffen.price} tags={bierOffen.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_flaschenPost  flex__center">
        <p className="app__specialMenu-menu_heading">Flaschenpost</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((flaschenPost, index) => (
            <MenuItem key={flaschenPost.title + index} title={flaschenPost.title} price={flaschenpost.price} tags={flaschenPost.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default SpecialMenu;