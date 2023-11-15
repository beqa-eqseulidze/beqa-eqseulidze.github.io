
// PASS Seconds(წამები) NUMBER AS AN ARGUMENT 
// AND RETURNS TWO VALUE HOURS AS A STRING LIKE THIS "05:15" 
//AND ALSO RETURNS AS NUMBER LIKE THIS 515:

export const CgetHour=function(secunds){
    let hour= new Date(secunds*1000).toString().split(' ')[4].split(':').slice(0,2).join(':')
    return {
        asNumber:Number(hour.split(':').join('')),
        asString:hour
    }
    }


// convert seconds since 01-01-1970 T 00:00:00 to date:
export const CgetDate=function(seconds){
    return new Date(seconds*1000).getDate();
}
// convert seconds since 01-01-1970 T 00:00:00 to month:
export const CgetMonth=function(seconds){
    const monthGE = ["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერუ","დეკემბერი"];
    const monthEN=['January','February','March','April','May','June','July','August','September','October','November','December']
    return localStorage.getItem('language')==="GE"? monthGE[new Date(seconds*1000).getMonth()]:monthEN[new Date(seconds*1000).getMonth()];
}
// convert seconds since 01-01-1970 T 00:00:00 to weekday:

export const CgetWeekDay=function(secunds){
    const weekdayGE = ["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]
    const weekdayEN=["Sunday", "Monday", "Tueday", "Wednesday", "Thursday","Friday","Saturday"]
    const d = new Date(secunds*1000);
    return localStorage.getItem('language')==="GE"? weekdayGE[d.getDay()] : weekdayEN[d.getDay()];
}

