let counter = 0 ;
document.querySelector(".Counter").textContent=counter;

function Increment(){
    counter++
    document.querySelector(".Counter").textContent=counter;
}
function decrement(){
    if(counter<=0){
       alert("Number Is already Zero!")
    }
    else{
        counter--;
    }
    document.querySelector(".Counter").textContent=counter;

}
function divideBy2(){
    if(counter<=0)
    alert("Can't Divide by 0")
    counter/=2;
    document.querySelector(".Counter").textContent=counter;
    
}
function MultiplyBy2(){
    if(counter<=0)
    alert(" Multiply with 0 is 0")
    counter*=2;
    document.querySelector(".Counter").textContent=counter;
    
}
function SettoZero(){
    if(counter<=0){
        alert("Number Is already Zero!")
     }
    counter =0;
    document.querySelector(".Counter").textContent=counter;
    
}