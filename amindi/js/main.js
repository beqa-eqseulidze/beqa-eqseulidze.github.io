import { getWeatherData } from './getWeatherData.js';
import { renderCurrentWeather } from './renderCurrentWeather.js';
import {language} from './language.js'
import { renderNextDaysWeather } from './renderNextDaysWeather.js';
import { spiner } from './spiner.js';
import { setBackground } from './setBackgorund.js';
import { shearch } from './search.js';
import { map } from './map.js';
import { domManipulate } from './domManipulate.js';
import { chooseCity } from './chooseCity.js';

domManipulate();
chooseCity();
spiner('start');
shearch();

(async function(){
    let data
   if(sessionStorage.getItem('city')){
    data=await getWeatherData('',sessionStorage.getItem('city'));
        if(data==='error'){
        data=await getWeatherData('','Tbilisi');
        sessionStorage.removeItem('city');
        alert("city not found ")
        }
    }else{
        if(sessionStorage.getItem('lat'))
            data=await getWeatherData([sessionStorage.getItem("lat"), sessionStorage.getItem("lon")]);
        else
            data=await getWeatherData('','Tbilisi')
    }
    setBackground(data);
    map();
    language();
    renderCurrentWeather(data);
    renderNextDaysWeather(data);
    spiner('stop')
    
})();




