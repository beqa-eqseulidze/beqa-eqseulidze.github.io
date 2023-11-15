import { elements } from "./elements.js"

//spiner funqtion if argument is true spiner start if argument is false spiner stop;
export const spiner=function(status){
    if(status==="start")
    elements.loader.style='display:flex';
    else if(status==='stop')
    elements.loader.style='display:none';
}