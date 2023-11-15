

export async function translate(text,source,target){
    if(localStorage.getItem("language")==='GB') return text;
    try{
        let encodedText=encodeURI(text);
        // let API_KEY = 'AIzaSyAw8hV_zx0thXj32cuaqj9NeV4s00VQqZU';
        let API_KEY = 'AIzaSyBS9MaYZBCQYhLBG6rHAfU9a76cLjmaJBs' ;
        let url=`https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${encodedText}&source=${source}&target=${target}`
        let  result=await axios.get(url);
        return result.data.data.translations[0].translatedText;
        }catch{           
            return text;
        }

}


