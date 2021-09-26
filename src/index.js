import main from "./sass/base/base.scss";
import debounce from 'lodash.debounce';

import { success } from '@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
// defaultModules.set(PNotifyMobile, {});

import setMessage from "./js/setMessage";
import fetchCountries from "./js/fetchCountries";
import makesMarkup from "./js/makesMarkup";
import refs from "./js/refs";

function catchRequest(event) {
  const target = event.target;
  const message = target.value;

  if (!message) return;

  setMessage(success, 'Загрузка...', 500);

  fetchCountries(message).then(makesMarkup);
};


refs.input.addEventListener('input', debounce(catchRequest, 1000));


















// делаю функция, которая отлавливает, что цвводит пользователь в input
// и добавляю это в завпрос fetch
// debonce ввода 500мс
// finally() очищаю input

// подключаю handlebars и делаю разметку для отрисовки свойста стран, которые приходят
// 1) случай - одна страна и ее свойства
// 2) несколько стран - просто списком их вывожу
// по уловию if использую отрисовку одним шаблоном или вторым

// 
