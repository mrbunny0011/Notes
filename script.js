let mod = "light";

function DarkMood(){
    let btn= document.querySelector(".mood");
    btn.addEventListener("click",()=>{
        if(mod=="light"){
                //body stylling
        let body= document.querySelector("body");
        body.style.backgroundColor="black";
        body.style.color="white";
            //Nav styling
        document.querySelector("nav").style.color="rgb(252, 240, 214)";
        let a=document.querySelectorAll(".a");
        a.forEach(e => {
            e.style.color="rgb(252, 240, 214)";
        });
        //btn styling
        btn.style.backgroundColor="rgb(252, 240, 214)";
        btn.style.color="Black";
        btn.textContent="Light Mood";
        btn.classList.add("mood");
        


        mod="dark";
    }
    else{
         //body stylling
       let body= document.querySelector("body");
       body.style.backgroundColor="rgb(252, 240, 214)";
       body.style.color="black";
        //Nav styling
       document.querySelector("nav").style.color="rgb(59, 5, 94)";
       let a=document.querySelectorAll(".a");
       a.forEach(e => {
           e.style.color="rgb(59, 5, 94)";
       });
       //btn styling
         btn.style.backgroundColor="rgb(59, 5, 94)";
         btn.style.color="rgb(252, 240, 214)";
        btn.textContent="Dark Mood";



       mod="light";
   
    }
});    
}

function buy(){
    let btn=document.querySelectorAll("#span3");
    btn.forEach(e => {
        e.addEventListener("click",()=>{
            document.querySelector(".popap").style.display="flex";
            
        })
    });
    let i =document.querySelector("#i");
    i.addEventListener("click",()=>{
        document.querySelector(".popap").style.display="none";
    })

    
}


DarkMood();
buy();