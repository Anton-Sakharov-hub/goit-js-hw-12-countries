
import { error } from '@pnotify/core/dist/PNotify.js';
import setMessage from "./setMessage";


export default function(searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
        .then(r => {
            if (r.status === 404) throw new Error('Страна не найдена');
            if (r.status >= 400) throw new Error('Что-то пошло не так, попробуйте позже');

            return r.json()
        }, () => {
            throw new Error('Что-то пошло не так, попробуйте позже')
        })
        .then(countries => {
            if (countries.status === 404) {
                setMessage(error, 'Страна не найдена', 1000)
            }
            console.log(countries);
            return countries;
        })
        // .catch(countries => {
        //     if (countries.status === 404) {
        //         setMessage(error, 'Страна не найдена', 1000)
        //     };

        //     console.log(countries);
        // });
};

