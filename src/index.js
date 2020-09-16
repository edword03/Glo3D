 'use strict';

 import "@babel/polyfill";
 import 'nodelist-foreach-polyfill';
 import elementClosest from 'element-closest';
 import 'fetch-polyfill';
 import 'es6-promise';
 import 'formdata-polyfill';
 elementClosest(window);

 import countTimer from './modules/countTimer';
 import menuToggle from './modules/menuToggle';
 import togglePopUp from './modules/togglePopUp';
 import toggleTab from './modules/toggleTab';
 import slider from './modules/slider';
 import getDataImg from './modules/getDataImg';
 import calc from './modules/calc';
 import sendForm from './modules/sendForm';

  //timer
  countTimer('23 september 2020');

  //menu
  menuToggle();

  //popup
  togglePopUp();

  //tabs
  toggleTab();

  //slider
  slider();

  //changing img
  getDataImg();
  
  //calculator
  calc(100);

  //send ajax-form
  sendForm();