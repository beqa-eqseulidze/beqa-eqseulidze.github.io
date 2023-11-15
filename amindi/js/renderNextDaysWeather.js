import { dayOrNIght } from "./dayOrNight.js";
import { elements } from "./elements.js";
import { CgetDate, CgetHour,CgetMonth,CgetWeekDay } from "./helper.js";


export function renderNextDaysWeather(d){
    let show='day'
    let naxetDaysData=[[],[],[],[],[]];
    let today=CgetDate(d[0].data.dt);
    let nextDay=[];
    
    d[1].data.list.forEach(el=>{
        if(CgetDate(el.dt)!==today){
            nextDay.some(item=>item===CgetDate(el.dt))?null:nextDay.push(CgetDate(el.dt))
        }
    })
    
     d[1].data.list.forEach(el=>{
        if(CgetDate(el.dt)!==today){
            switch (CgetDate(el.dt)){
                case nextDay[0]:
                        naxetDaysData[0].push(el);
                        break;
                case nextDay[1]:
                        naxetDaysData[1].push(el);
                        break;
                case nextDay[2]:
                        naxetDaysData[2].push(el);
                        break;
                case nextDay[3]:
                        naxetDaysData[3].push(el);
                        break;
                case nextDay[4]:
                        naxetDaysData[4].push(el);
                        break;
            }
        }
    })  
   
    function renderDays(){
        elements.dailyWeatherTitle.innerText='ამინდი დღეების მიხედვით'
        elements.cards.innerHTML='';
         naxetDaysData.forEach(el => {
            let maxTemp=[];
            let minTemp=[];
            el.forEach(e =>{
                maxTemp.push(Math.round(e.main.temp_max));
                minTemp.push(Math.round(e.main.temp_min));
            })
            
            elements.cards.innerHTML+=`
         <div class="card">
            <p>${CgetWeekDay(el[0].dt)}</p>
            <p>${CgetDate(el[0].dt)} ${CgetMonth(el[0].dt)}</p>
            <div>
              <img src="./img/day/${el[0].weather[0].main}.png" title="${el[0].weather[0].main}" alt="${el[0].weather[0].main}">
            </div>           
            <p class="degree" ><span>${Math.min(... minTemp)}<sup>o</sup></span> <span>${Math.max(... maxTemp)}<sup>o</sup></span></p>
        </div>`   
         
    })
    } 
    function renderHourly(){
        elements.dailyWeatherTitle.innerText='ამინდი ხუთი დღის საათობრივი'
        elements.cards.innerHTML='';
        naxetDaysData.forEach(el=>{
            el.forEach(e=>{
                elements.cards.innerHTML+=`
                <div class="card">
                    <p>${CgetDate(el[0].dt)} ${CgetMonth(el[0].dt)}</p>
                    <p>${CgetWeekDay(el[0].dt)}</p>
                    <p>${CgetHour(e.dt).asString.split(':')[0]} საათი</p>
                    <div>
                     <img src="./img/${dayOrNIght(d[0].data.sys.sunrise,d[0].data.sys.sunset,e.dt)}/${e.weather[0].main}.png" title="${e.weather[0].main}" alt="${e.weather[0].main}">
                    </div>           
                    <p class="degree" ><span>${Math.round(e.main.temp)}<sup>o</sup></span></p>
                </div>`
                
            })
        })
    }
    const children=Array.from(elements.fiveDaysHourlyWeather.children);
    // let firstChildActiv=true;
    children.forEach(child=>{child.addEventListener('click',(e)=>{
        if(children.indexOf(e.target)===0){           
            children[0].classList.add('active');
            children[1].classList.remove('active');
            renderDays(); 
        }else if(children.indexOf(e.target)===1){
            // console.log('test2')
            children[1].classList.add('active');
            children[0].classList.remove('active');
            renderHourly();
        }
    })})
     
    renderDays(); 

   
            
    

}

