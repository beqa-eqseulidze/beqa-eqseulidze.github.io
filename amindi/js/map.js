export function map(){let delay;
// sessionStorage.getItem('lat')? delay=0:delay=1000;
//setTimeout(()=>{
    let lat=sessionStorage.getItem("lat");
     let lon=sessionStorage.getItem("lon");       
    
    let map = L.map('map').setView([lat, lon],8);
    
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    let marker = L.marker([lat,lon]).addTo(map);
    
    function onMapClick(e) {
        sessionStorage.removeItem('city');
        let coords = [e.latlng.lat,e.latlng.lng]
        sessionStorage.setItem('lat',coords[0]);
        sessionStorage.setItem('lon',coords[1]);
        location.reload();
    }    
    map.on('click', onMapClick);
// },delay)
}