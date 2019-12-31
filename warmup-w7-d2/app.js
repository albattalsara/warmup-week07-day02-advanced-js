// code goes here

const URL_MEME = "https://api.imgflip.com/get_memes"; 

let response = {}
function memes(){
    axios.get(URL_MEME).then(function(show){
    
        response= show.data;
        // response= response.data.memes;
        console.log(response);
        response.data.memes.forEach(element => { 
            
            document.getElementById("ID").innerHTML +=` <div>${element.name}</div> <img src= ${element.url} width=${element.width} height=${element.height} >`
            
        });
     
        
        
    });

}
