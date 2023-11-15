// fatch weather data from openweathermap.org API
//first parameter is wanted coords[latitude,longitude] 
// if we want to search data by the city name we must pass
//first parameter '' and second parameter wanted city name 
//if firs parameter will '' and second parameta is omitted
// this function will return Tbilisi's data 

export  const getWeatherData=async(coords,city='Tbilisi')=>{

    const weatherKey=`2c3bf07437d44f8eba9978441edb91a5`
    try{
        if(coords==''){
            //fetch data paralel from two API 
            let weatherData=await Promise.allSettled([
                //get curent weather data        
                await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`) ,
               //get next five days weather data
                await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherKey}&units=metric`)
               ])    
                let [res1,res2]=weatherData                
                sessionStorage.setItem('lat',res1.value.data.coord.lat)
                sessionStorage.setItem('lon',res1.value.data.coord.lon)
               return [res1.value,res2.value]
            } 
            else if(coords!=''){
                //fetch data paralel from two API 
                let weatherData=await Promise.allSettled([
                    //get curent weather data                            
                    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${weatherKey}&units=metric`) ,
                   //get next five days weather data
                    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords[0]}&lon=${coords[1]}&appid=${weatherKey}&units=metric`)
                   ])    
                   let [res1,res2]=weatherData
                  return [res1.value,res2.value]
                }         
        }
     catch(err){
         console.error(err)
         return 'error'
     }
 }
           
     
            
