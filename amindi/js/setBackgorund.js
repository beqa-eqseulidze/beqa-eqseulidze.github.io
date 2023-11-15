import { dayOrNIght } from "./dayOrNight.js";

export function setBackground(d){
    const body=document.body;
    const weather=d[0].data.weather[0].main;

   switch(dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,d[0].data.dt)){
        case 'day':
            console.log('case: day')
            if(weather==='Clear') body.style.backgroundImage="url(./img/bodybackground2.jpg)"
            else if (weather==='Snow') body.style.backgroundImage="url(./img/day/snow_bg.gif)"
            break;
        case 'night':
            if( weather==='Clear') body.style.backgroundImage="url(./img/night/Clear_bg.jpg)"
            else if(weather==='Snow') body.style.backgroundImage="url(./img/night/snow_bg.gif)"
            else  body.style.backgroundImage="url(./img/night/Clear_bg.jpg)"
            break;    

    }
}
               