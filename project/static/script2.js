toogled.addEventListener("click",(e)=>{
    e.preventDefault('')
    document.getElementById('bg').style.backgroundColor="black"
    document.getElementById('bga').style.backgroundColor="black"
    document.getElementById('bg').style.backgroundColor="black"
    // document.getElementById('bga').style.color="white"
})
tooglel.addEventListener("click",(e)=>{
    e.preventDefault('')
    document.getElementById('bg').style.backgroundColor="white"
    document.getElementById('bga').style.backgroundColor="white"
    document.getElementById('bg').style.backgroundColor="white"
    document.getElementById('bga').style.color="black"
})
document.write("<center><font size=+3 style='color: black; font-family:monospace;'>");
        var day = new Date();
        var hr = day.getHours();
        var hr = 5;
        if (hr >= 0 && hr < 12) {
            document.write("Good Morning!");
        } 
        else if (hr >= 12 && hr <= 17) {
            document.write("Good Afternoon!");
        }
        else if (hr >= 17 && hr <= 19){
            document.write("Good Evening!");
        }
        else{
            document.write("Good Night!");
        }
document.write("</font></center>");


