const h1= document.querySelector('h1');

const section= document.querySelector('section')




const colors= ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for(let i=0; i<colors.length; i++){
    const div= document.createElement('div');
    div.style.backgroundColor= colors[i];
    div.classList.add('box');
     section.appendChild(div);
     div.addEventListener('mouseover', function() {
    h1.style.color=this.style.backgroundColor;

    section.style.backgroundColor=this.style.backgroundColor;
})

}