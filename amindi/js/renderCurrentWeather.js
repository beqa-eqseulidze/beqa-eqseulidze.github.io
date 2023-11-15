import { elements } from "./elements.js";
import {CgetDate,CgetHour,CgetWeekDay,CgetMonth} from "./helper.js"
import { dayOrNIght } from "./dayOrNight.js";
import { translate } from "./translate.js";


export async function renderCurrentWeather(d){
    let language=localStorage.getItem('language');   

    const dayTime=dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,d[0].data.dt);
    const currentWeatherImageSrc=`./img/${dayTime}/${d[0].data.weather[0].main}.png`;
    const currentTep=Math.round(d[0].data.main.temp);

      elements.curentForcast.innerHTML=`
            <h2>${await translate(d[0].data.name,'en','ka')}</h2>
        <p class="date"> 
            <span>${CgetWeekDay(d[0].data.dt)},</span>
            <span>${CgetDate(d[0].data.dt)} ${CgetMonth(d[0].data.dt)}</span>
        </p>
        <p class="current-time"></p>        
        <div class="forcast">
            <img src="${currentWeatherImageSrc}"  alt="${d[0].data.weather[0].description}">
            <p class="degree">${currentTep}<sup>o</sup> </p>
        </div>
<p class="description">${language=='GE'? await translate(d[0].data.weather[0].main,'en','ka'):d[0].data.weather[0].main}</p>`
    setInterval(function(){document.querySelector('.current-time').innerText=`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}, 1000)


    elements.hourlyFocastList.innerHTML=`<li> ${CgetHour(d[0].data.dt).asString} საათი <img src="${currentWeatherImageSrc}" width="32" height="32" alt="sun" ><span >${currentTep}<sup>o</sup></span> </li>`
    
    d[1].data.list.forEach(el=>{
        if(CgetDate(el.dt)===CgetDate(d[0].data.dt)){
            elements.hourlyFocastList.innerHTML +=`
            <li> ${CgetHour(el.dt).asString} საათი <img src="./img/${dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,el.dt)}/${el.weather[0].main}.png" width="32" height="32" alt="${el.weather[0].description}" ><span>${Math.round(el.main.temp)}<sup>o</sup></span> </li>
            `
        }   
    })

    let open=false;
    elements.btnSeeAll.addEventListener('click',function(){  
        if(open){
            language==='GE'? this.innerText="მაჩვენე სრულად ":this.innerText='See More' 
            elements.hourlyFocastList.innerHTML='';
            elements.hourlyFocastList.innerHTML=`<li> ${CgetHour(d[0].data.dt).asString} საათი <img src="${currentWeatherImageSrc}" width="32" height="32" alt="sun" ><span>${currentTep}<sup>o</sup></span> </li>`
            d[1].data.list.forEach(el => {           
                if(CgetDate(el.dt)===CgetDate(d[0].data.dt)){
                    elements.hourlyFocastList.innerHTML +=`                
                     <li> ${CgetHour(el.dt).asString} საათი <img src="./img/${dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,el.dt)}/${el.weather[0].main}.png" width="32" height="32" alt="${el.weather[0].description}" ><span > ${Math.round(el.main.temp)}<sup>o</sup></span> </li>
                     `
                    }               
            }) 
            open=!open;
        }else{
            language==='GE'? this.innerText="მაჩვენე ნაკლები":this.innerText='See less' 
            elements.hourlyFocastList.innerHTML='';
            let currentDay=CgetDate(d[0].data.dt)
            let nextDay;
            
            d[1].data.list.forEach(el => {
                if(CgetDate(el.dt)!==currentDay){
                    nextDay?null:nextDay=CgetDate(el.dt)
                }
            })
            console.log(currentDay,nextDay)
            
            d[1].data.list.forEach(el => {           
                 if(CgetDate(el.dt)===currentDay||CgetDate(el.dt)===nextDay){
                     if(elements.hourlyFocastList.children.length<9){
                        elements.hourlyFocastList.innerHTML +=`                
                         <li> ${CgetHour(el.dt).asString} საათი <img src="./img/${dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,el.dt)}/${el.weather[0].main}.png" width="32" height="32" alt="${el.weather[0].description}" ><span >${Math.round(el.main.temp)}<sup>o</sup></span> </li>
                         `}
                    }               
            })  
            open=!open;         
        }
    })

    elements.windFocast.innerHTML+=`
                        <div>
                            <h3>ქარი და წნევა</h3>
                            <p>ქარის სიჩქარე:</p>
                            <p>${d[0].data.wind.speed} meter/sec</p>
                            <p>წნევა:</p>
                            <p>${d[0].data.main.pressure} hPa</p>
                        </div> `
   elements.additionalInfo .innerHTML=`
                        <p>ტემპერატურის მგრძნომბელობა: <span>${Math.round(d[0].data.main.feels_like)}<sup>o</sup> </span></p>
                        <p>ქარის მიმართულება: <span>${d[0].data.wind.deg}<sup>o</sup> </span></p>
                        <p>ტენიანობა: <span>${d[0].data.main.humidity}%</span></p>
                        <p>ხილვადობა: <span>${Math.round(d[0].data.visibility/1000)} km </span></p>
                        `                  
            
} 
       










