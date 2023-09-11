const inputfield = document.getElementById("input-text");
const buttons=document.getElementsByClassName("button");
const infoPara=document.getElementById('info');

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',(event)=>{
        let inputtext='';
        switch(event.target.innerHTML){
            case 'C':
                break;
            case '=':
                try{
                    inputtext=eval(inputfield.value);
                    infoPara.style.display='block';
                    infoPara.style.color='black';
                    infoPara.style.textAlign='center';
                    infoPara.innerHTML="Thank you for using this calculator!!!"
                }
                catch(e){
                    inputtext='';
                    infoPara.style.display='block';
                    infoPara.style.color='black';
                    infoPara.style.textAlign='center';
                    infoPara.innerHTML="Invalid Operation";
                }
                break;
            case '←':
                inputtext= inputfield.value.slice(0,inputfield.value.length-1);
                break;
            default:
                inputtext=`${inputfield.value}${event.target.innerHTML}`;
        }
        inputfield.value= inputtext;
    });
}