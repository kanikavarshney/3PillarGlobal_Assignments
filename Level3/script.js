function changeColor(){
    var x=document.getElementById("change");
    if(x.style.color == "yellow")
        x.style.color ="red";
    else if(x.style.color == "red")
        x.style.color="green";
    else if(x.style.color =="green")
        x.style.color="purple";
    else if(x.style.color =="purple")
        x.style.color ="palevioletred";
    else if(x.style.color =="palevioletred")
        x.style.color ="aqua";
    else if(x.style.color =="aqua")
        x.style.color ="greenyellow";
    else if(x.style.color == "greenyellow")
        x.style.color ="blue";
    else  if(x.style.color =="blue")
        x.style.color = "yellow"
    
}

setInterval (changebg,1000);
function changebg(){
    var y=document.getElementById("changebg");
    if(y.style.backgroundColor =="red")
    y.style.backgroundColor ="blue"
    else if(y.style.backgroundColor =="blue")
    y.style.backgroundColor ="green"
    else if(y.style.backgroundColor =="green")
    y.style.backgroundColor ="pink"
    else if(y.style.backgroundColor =="pink")
    y.style.backgroundColor ="purple"
    else if(y.style.backgroundColor =="purple")
    y.style.backgroundColor ="yellow"
    else if(y.style.backgroundColor =="yellow")
    y.style.backgroundColor ="greenyellow"
    else if(y.style.backgroundColor =="greenyellow")
    y.style.backgroundColor ="aqua"
    else y.style.backgroundColor ="red"
}

 
setInterval(showTime,1000);
function showDayandMonth(){
    let dateobj=new Date();
    let Days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let Months=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let day=dateobj.getDay();
    let month=dateobj.getMonth();
    let year=dateobj.getFullYear();
    let date=dateobj.getDate();

    let daymonth=Days[day]+","+date+" "+Months[month]+" "+year;
    document.getElementById("date").innerHTML = daymonth;
}
function showTime(){
    let time=new Date();
    let hour=time.getHours();
    let min=time.getMinutes();
    let sec=time.getSeconds();
    session ="AM"

    if(hour>12){
        hour -=12;
        session="PM"
    }
    if(hour ==0){
        hr=12;
        session="AM"
    }
    hour=hour<10?"0"+hour:hour;
    min=min<10?"0"+min:min;
    sec=sec<10?"0"+sec:sec;
    let currentTime= hour + ":"+min +":"+sec+" "+session;
    document.getElementById("clock").innerHTML= currentTime;

}
showDayandMonth();










function pyrun(){
var changeheight = document.getElementById("python")
if(changeheight.className == "python"){
    changeheight.className = "pythonn"
}else{
    changeheight.className="python"
}
}
function jsrun(){
    var changeheight = document.getElementById("javascript")
    if(changeheight.className == "javascript"){
        changeheight.className = "javascriptt"
    }else{
        changeheight.className="javascript"
    }
    }
    function htmlrun(){
        var changeheight = document.getElementById("html")
        if(changeheight.className == "html"){
            changeheight.className = "htmll"
        }else{
            changeheight.className="html"
        }
        }
    function reactrun(){
        var changeheight = document.getElementById("react")
        if(changeheight.className == "react"){
            changeheight.className = "reactt"
        }else{
            changeheight.className="react"
        }
        }
        function nativerun(){
            var changeheight = document.getElementById("reactnative")
            if(changeheight.className == "reactnative"){
                changeheight.className = "reactnativee"
            }else{
                changeheight.className="reactnative"
            }
            }
            function fullrun(){
                var changeheight = document.getElementById("fullstack")
                if(changeheight.className == "fullstack"){
                    changeheight.className = "fullstackk"
                }else{
                    changeheight.className="fullstack"
                }
                }
                function datarun(){
                    var changeheight = document.getElementById("data")
                    if(changeheight.className == "data"){
                        changeheight.className = "dataa"
                    }else{
                        changeheight.className="data"
                    }
                    }
                    function machinerun(){
                        var changeheight = document.getElementById("machine")
                        if(changeheight.className == "machine"){
                            changeheight.className = "machinee"
                        }else{
                            changeheight.className="machine"
                        }
                        }