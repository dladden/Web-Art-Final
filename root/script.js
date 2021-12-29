/*eslist-env es6 */
/*eslist-disable */


var x = {
    default: "a default value"
};

const text = document.querySelector('textanim');
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";

for(let i=0; i < splitText.length; i++){
    
    
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}//end for

let char = 0;
let timer = setIntrval(onTick, 50);


function onTick(){
    
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    
    if(char === splitText.length){
    
        complete();
        return;
        
    }//end if
    
}//end onTick

function complete(){
    
    clearInterval(timer);
    timer = null;
    
}

"env":{
    
    "browser": true,
        "node": true;
            "es6": true;
}

{
    "language":{
        "javascript":{
            "linting.perefer": [
                "JSHint"
            ],
                "Linting.usePreferredOnly": true
        }
    }
}