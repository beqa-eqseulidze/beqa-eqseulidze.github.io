import { CgetHour } from "./helper.js"

//first parameter is sunrize time in seconds (since 01-01-1970 T 00:00:00)
//second parameter is sunset time in seconds
//therd parameter is current time in seconds
//this function  returns current day time as string: 'day' or 'night'

export const dayOrNIght=function(sunrise,sunset,time){

    let currentTime=CgetHour(time).asNumber;//time in seconds turn into hour as number for example: 1664679446-->15:35 --> 1535 
    let sunriseTime=CgetHour(sunrise).asNumber; //'---------------------------------------------------------------------------'
    let sunsetTime=CgetHour(sunset).asNumber; //'-----------------------------------------------------------------------------' 
        if(currentTime>sunriseTime&&currentTime<sunsetTime)
         return 'day'
        else
         return 'night'
        }
        