import main from "./sass/base/base.scss";
import debounce from 'lodash.debounce';
import Handlebars from "handlebars";
import countriesListTpl from "./countries-list.hbs";
import countryDescription from "./country-description.hbs";

// const inputRef = document.querySelector('input');
const refs = {
  input: document.querySelector('input'),
  container: document.querySelector('.countries-container'),
}


function catchRequest(event) {

  const target = event.target;
  const message = target.value;
  // if (!message) return;

  fetch(`https://restcountries.com/v2/name/${message}`)
    .then(r => {
      if (r.status === 404) throw new Error('Страна не найдена');
      if (r.status >= 400) throw new Error('Что-то пошло не так, попробуйте позже');

      return r.json()
    }, () => {
      throw new Error('Что-то пошло не так, попробуйте позже')
    })
    .then(countries => {
      console.log(countries);
      return countries;
    })
    .then(countries => {
      if (countries.status === 404) return;

      if (countries.length > 1) {
        const markup = countriesListTpl(countries);
        refs.container.innerHTML = markup;
        
      } else {
        const markup = countryDescription(countries);
        refs.container.innerHTML = markup;
      }
    }).catch(alert)
    // .finally(form.reset());

  console.log(message);
};


refs.input.addEventListener('input', debounce(catchRequest, 1000));
console.dir(refs.input);

















// делаю функция, которая отлавливает, что цвводит пользователь в input
// и добавляю это в завпрос fetch
// debonce ввода 500мс
// finally() очищаю input

// подключаю handlebars и делаю разметку для отрисовки свойста стран, которые приходят
// 1) случай - одна страна и ее свойства
// 2) несколько стран - просто списком их вывожу
// по уловию if использую отрисовку одним шаблоном или вторым

// 
