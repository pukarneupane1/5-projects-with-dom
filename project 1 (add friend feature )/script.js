var istatus = document.querySelector("#card h5");

var btn = document.querySelector("#add");

var check = 0;

btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.textContent = "Remove Friend";
        btn.style.backgroundColor = "#dadada";
        btn.style.color = "#111";
        check = 1;
    }
    else{
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.textContent = "Add Friend";
        btn.style.backgroundColor = "cadetblue";
        btn.style.color = "#fff";
        check = 0;
    }
   
   
})
