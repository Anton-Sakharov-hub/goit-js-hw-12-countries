import { alert } from '@pnotify/core/dist/PNotify.js';
import countriesListTpl from "../templates/countries-list.hbs";
import countryDescription from "../templates/country-description.hbs";
import refs from "./refs";
import setMessage from './setMessage';


export default function (countries) {

  if (countries.length > 1 && countries.length <= 10) {
      const markup = countriesListTpl(countries);
      refs.container.innerHTML = markup;

  } else if (countries.length > 10) {
    refs.container.innerHTML = '';
    
    setMessage(alert, 'Введите более специфический запрос', 1000)
 
  } else {
      const markup = countryDescription(countries);
      refs.container.innerHTML = markup;
  }  
};