let buttons=document.querySelectorAll(".box");
let body=document.querySelector("body");
let header=document.querySelector("header");
let footer=document.querySelector("footer");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        if(e.target.id == 'White'){
            body.style.backgroundColor=e.target.id;
            header.style.backgroundColor="#bad8d4";
            footer.style.backgroundColor="#bad8d4";
            document.querySelectorAll('*').forEach(element => {
                element.style.color = '#010e2b';
            });
        }else if(e.target.id == 'Orange'){
            body.style.backgroundColor=e.target.id;
            header.style.backgroundColor="#e7ae62";
            footer.style.backgroundColor="#e7ae62";
            document.querySelectorAll('*').forEach(element => {
                element.style.color = '#933a04';
            });
        }else if(e.target.id == 'Gray'){
            body.style.backgroundColor=e.target.id;
            header.style.backgroundColor="#b8b8b8";
            footer.style.backgroundColor="#b8b8b8";
            document.querySelectorAll('*').forEach(element => {
                element.style.color = '#6f5050';
            });
        }else if(e.target.id == 'Pink'){
            body.style.backgroundColor=e.target.id;
            header.style.backgroundColor="#d8adb4";
            footer.style.backgroundColor="#d8adb4";
            document.querySelectorAll('*').forEach(element => {
                element.style.color = '#754b72';
            });
        }else if(e.target.id == 'Black'){
            body.style.backgroundColor=e.target.id;
            header.style.backgroundColor="#2c2a2a";
            footer.style.backgroundColor="#2c2a2a";
            document.querySelectorAll('*').forEach(element => {
                element.style.color = '#3f0406';
            });
        }
    });
});