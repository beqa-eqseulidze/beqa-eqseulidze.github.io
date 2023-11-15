import { elements } from "./elements.js";

export function language(){
if(!localStorage.getItem("language")) localStorage.setItem("language",elements.chooseLan.value);
elements.chooseLan.value = localStorage.getItem("language");
elements.chooseLan.addEventListener("change", function(){
        localStorage.setItem("language",this.value);
        location.reload();
    })    
}
        