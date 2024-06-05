let item = 0 
const max = 11;

function proxImagem( img ){
    fetch(`img/${img}.jpg`)
    .then(resp => resp.blob())
    .then(blob =>{
        const imageObjectURL = URL.createObjectURL(blob);
        
        const proxIMGTag = document.createElement("img");
        proxIMGTag.src = imageObjectURL;
        document.getElementById("placeholder").appendChild(proxIMGTag);    
    })
}
window.onload = function(){
    for (;item < 5 ; item++){
        proxImagem(item);
    }
  
    
}
window.onscroll = function(){
    let altura = document.body.scrollHeight;
    let scrollPoint = window.scrollY + window.innerHeight;
    if(scrollPoint >= altura ){
        proxImagem(item++ % max);
    }
}