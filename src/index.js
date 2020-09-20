 'use strict';

 import countTimer from './modules/countTimer';
 countTimer('23 september 2020');
 import "@babel/polyfill";
 import 'dom-node-polyfills';
 import 'nodelist-foreach-polyfill';
 import elementClosest from 'element-closest';
 import 'fetch-polyfill';
 import 'es6-promise';
 import 'formdata-polyfill';
 elementClosest(window);

 import menuToggle from './modules/menuToggle';
 import togglePopUp from './modules/togglePopUp';
 import toggleTab from './modules/toggleTab';
 import slider from './modules/slider';
 import getDataImg from './modules/getDataImg';
 import calc from './modules/calc';
 import sendForm from './modules/sendForm';

  //timer

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