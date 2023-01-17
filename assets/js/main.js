const button = document.getElementById('button');
var toggle = true;

button.addEventListener("click", function(){
    if(toggle){
        button.style.marginLeft = "110px";
        document.body.style.backgroundColor = "#292C35";
        document.body.style.color = "white";
        toggle = false;
    } else {
        button.style.marginLeft = "0px"
        document.body.style.backgroundColor = "#F1F1F1";
        document.body.style.color = "black";
        toggle = true;
    }
    console.log(toggle);
});