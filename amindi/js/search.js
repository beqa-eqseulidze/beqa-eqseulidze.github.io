import { elements } from "./elements.js";

//search weather data by city name;
export function shearch(){
       elements.searchInput.addEventListener('change', function(){
        var letters = /^[ა-ჰa-zA-z]+$/;
        if(this.value!='' && this.value.match(letters) ){
            sessionStorage.setItem('city',this.value);
            location.reload();
        }else{
            alert("city not found")
        }
    })
}

               