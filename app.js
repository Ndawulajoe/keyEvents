const username= document.querySelector('#username');
username.addEventListener('keydown',function(e){
    console.log('KEY DOWN')
})
username.addEventListener('keyup',function(e){
    console.log('KEY UP')
})
username.addEventListener('keypress',function(e){
    console.log('KEY PRESS')
})
const input=document.querySelector('#list')
const listUl=document.querySelector('#needs')
input.addEventListener('keypress',function(e){
    if(e.key==='Enter'){
        const li=document.createElement('li')
        li.innerText=this.value;
        this.value=''
        listUl.appendChild(li)
        console.log(li.innerText)
        
    }
})