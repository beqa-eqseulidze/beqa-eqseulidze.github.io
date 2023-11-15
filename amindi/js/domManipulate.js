import { elements } from "./elements.js";

export function domManipulate(){

// burger menue open and close
void (function(){
   let btn=elements.burgerBtn;
   let l=elements.menu;
   let v=false
   btn.addEventListener('click',()=>{
        v=!v
        v? l.style.height=220+'px':l.style.height=0+'px'
        v? setTimeout(()=>l.style.overflow='visible',500):l.style.overflow='hidden'
                     
    })
    document.addEventListener('click',(e)=>{            
      if(!e.target.closest('.burger-btn')){
      v=false;
      l.style=`height:0px;
                overflow:hidden;`                
            }
          })                     
      })();


    // CHOOSE CITY DROPDOWN
    void (function(){
      let btn=elements.choosCity;
      let list=elements.cityList;
      btn.addEventListener('click',()=>{
        list.classList.toggle('open')
    })
    window.addEventListener('click',(e)=>{
        if(!e.target.closest('.choose-city')) list.classList.remove('open')
    })
    })()
  }

