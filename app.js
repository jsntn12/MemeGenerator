const form = document.querySelector('form'); 
const createMeme = document.querySelector('.createMeme');
const imgUrl = document.querySelector('#imageURL');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');


form.addEventListener("submit", function(event){
    event.preventDefault();
    let memeDiv  = document.createElement('div');
    memeDiv.classList.add('memes');

    let imgTopText = document.createElement('div');
    imgTopText.classList.add('top-center');
    imgTopText.innerHTML= topText.value.toUpperCase();

    memeDiv.style.backgroundImage= "url(" + imgUrl.value + ")";

    let imgBottomText= document.createElement('div');
    imgBottomText.classList.add('bottom-center');
    imgBottomText.innerText = bottomText.value.toUpperCase();

    memeDiv.append(imgTopText, imgBottomText);
    memeDiv.addEventListener('click', handleClick)
   
    createMeme.append(memeDiv);
    
    
})

function handleClick(){
    this.remove()
}
