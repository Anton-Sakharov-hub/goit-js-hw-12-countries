
import { error } from '@pnotify/core/dist/PNotify.js';
import { G } from 'handlebars/dist/handlebars.runtime';
import setMessage from "./setMessage";


export default function (searchQuery) {
    return fetch(`https://restcountries.com/v2/name/${searchQuery.trim()}`)
        .then(async response => {
            const serverResponse = (await response.json());

            if (serverResponse.status === 404) throw new Error("Ошибка!!!!!!!!!");
            console.log(serverResponse);
            return serverResponse;
        });
};

















// export default function (searchQuery) {
//     return fetch(`https://restcountries.com/v2/name/${searchQuery.trim()}`)
//         .then(response => {
//             // if (response.status === 404) throw new Error('Страна не найдена');
//             // if (response.status >= 400) throw new Error('Что-то пошло не так, попробуйте позже');
//             console.log(response);
//             // return response.json()
//         }, (response) => {
//             // console.log(response);
//             // if (response.status === 404) throw new Error('Что-то пошло не так, попробуйте позже')
//         })
//         .then(countries => {
//             console.log(countries);
//             if (countries.status === 404) {
//                 setMessage(error, 'Страна не найдена', 1000)
//                 throw new Error("Ошибка!!!!!!!!!");
//             }
//         })
        
// };

