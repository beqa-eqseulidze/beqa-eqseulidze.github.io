import { elements } from './elements.js'
import { getWeatherData } from './getWeatherData.js';



const citys=[
    {   id:0,
        nameKa:'აბასთუმანი',
        nameEn:'Abastumani',
        lat:'41.7528',
        lon:'42.832'
    },{ id:1,
        nameKa:'ახალციხე',
        nameEn:'Akhalcikhe',
        lat:'41.6267',
        lon:'42.9299'
    },
    {   id:2,
        nameKa:'ბოლნისი',
        nameEn:'Bolnisi',
        lat:'41.4433',
        lon:'44.5151'
    },
    {   id:3,
        nameKa:'ბათუმი',
        nameEn:'Batumi',
        lat:'41.651',
        lon:'41.636'
    },{ id:4,
        nameKa:'ბაკურიანი',
        nameEn:'Bakuriani',
        lat:'41.7452',
        lon:'43.5031'
    },{ id:5,
        nameKa:'გუდაური',
        nameEn:'Gudauri',
        lat:'42.4764',
        lon:'44.4768'
    },{ id:6,
        nameKa:'გორი',
        nameEn:'Gori',
        lat:'41.9832',
        lon:'44.106'
    },{ id:7,
        nameKa:'გურჯაანი',
        nameEn:'Gurjaani',
        lat:'41.7462',
        lon:'45.7965'
    },{ id:8,
        nameKa:'ზესტაფონი',
        nameEn:'Zestaponi',
        lat:'42.1155',
        lon:'43.026'
    },{ id:9,
        nameKa:'ზუგდიდი',
        nameEn:'Zugdidi',
        lat:'42.4943',
        lon:'41.8771'
    },{ id:10,
        nameKa:'თბილისი',
        nameEn:'Tbilisi',
        lat:'41.6887',
        lon:'44.8204'
    },
    {   id:11,
        nameKa:'თელავი',
        nameEn:'Telavi',
        lat:'41.9001',
        lon:'45.4599'
    },
    {   id:12,
        nameKa:'თიანეთი',
        nameEn:'Tianeti',
        lat:'42.1053',
        lon:'44.9519'
    },{id:13,
        nameKa:'ლაგოდეხი',
        nameEn:'Lagodekhi',
        lat:'41.8189',
        lon:'46.2588'
    },
    {id:14,
        nameKa:'მარნეული',
        nameEn:'Marneuli',
        lat:'41.4741',
        lon:'44.7981'
    },
    {   id:15,
        nameKa:'მესტია',
        nameEn:'Mestia',
        lat:'43.0425',
        lon:'42.7283'
    },
    {   id:16,
        nameKa:'ონი',
        nameEn:'Oni',
        lat:'42.5838',
        lon:'43.4427'
    },
    {   id:17,
        nameKa:'რუსთავი',
        nameEn:'Rustavi',
        lat:'41.5598',
        lon:'44.995'
        
    },
    {   id:18,
        nameKa:'სამტრედია',
        nameEn:'Samtredia',
        lat:'42.1638',
        lon:'42.3334'
    },
    {   id:19,
        nameKa:'საჩხერე',
        nameEn:'Sachkhere',
        lat:'42.3395',
        lon:'43.4103'
    },
    {   id:20,
        nameKa:'სენაკი',
        nameEn:'Senaki',
        lat:'42.2691',
        lon:'42.067'
    },
    {   id:21,
        nameKa:'სოხუმი',
        nameEn:'Sokhumi',
        lat:'43.0038',
        lon:'41.0272'
    },
    {   id:22,
        nameKa:'ფოთი',
        nameEn:'Poti',
        lat:'42.1432',
        lon:'41.6737'
    },
    {   id:23,
        nameKa:'ქუთაისი',
        nameEn:'Kutaisi',
        lat:'42.2521',
        lon:'42.6806'
    },
    {   id:24,
        nameKa:'ცხინვალი',
        nameEn:'Tskhinvali',
        lat:'42.2246',
        lon:'43.9698'
    },
    {   id:25,
        nameKa:'ჭიათურა',
        nameEn:'Chiatura',
        lat:'42.2905',
        lon:'43.2842'
    },
    {   id:26,
        nameKa:'ხარაგაული',
        nameEn:'Kharagauli',
        lat:'41.9999',
        lon:'43.1914'
    },
    {   id:27,
        nameKa:'ხაშური',
        nameEn:'Khashuri',
        lat:'41.9959',
        lon:'43.5984'
    }
   
]

export function chooseCity(){
    let lan=localStorage.getItem('language')
    let list=elements.cityList;
    citys.forEach(el=>{
        list.innerHTML+=`<span class="list" index=${el.id}> ${lan==="GE"?el.nameKa:el.nameEn}</span>`
    });

    let items=document.querySelectorAll('.list');    
    items.forEach(el=>{
        el.addEventListener('click',(e)=>{
            let index= e.target.attributes.index.value;
        sessionStorage.setItem('lat',citys[index].lat);
        sessionStorage.setItem('lon',citys[index].lon);
        location.reload();
        })
    });

}