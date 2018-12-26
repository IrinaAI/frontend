window.onload = function(){
    var emailHistory = document.getElementById("emailHistory");
    var historyButton = document.getElementById("historyButton");
    var close = document.querySelector(".close");
    var main = document.getElementById("main");
    historyButton.onclick = function(){
        emailHistory.style.display = "block";
        main.style.display = "none";
    };
    close.onclick = function(){
        emailHistory.style.display = "none";
        main.style.display = "block";
    }
    window.onclick = function(e){
        if(e.target == emailHistory){
            emailHistory.style.display = "none";
            main.style.display = "block";
        }
    }
    //localStorage.clear();
    for(let key,i=0;i<localStorage.length;i++){
        key=localStorage.key(i);  
        tr = document.createElement("tr");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        tr.appendChild(td1);
        tr.appendChild(td2);
        td1Text = document.createTextNode(key);
        td2Text = document.createTextNode(localStorage.getItem(key));
        td2.appendChild(td1Text);
        td1.appendChild(td2Text);
        historyTable.appendChild(tr);
        console.log(key,':', localStorage.getItem(key));
    }
}

function addEmailToTable(){          
    var email = document.getElementById("input_id").value;  
    var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;    
    if(reg.test(email)){
        alert("Почта добавлена в localStorage");        
        var date = new Date();        
        var options = {            
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            timezone: 'UTC',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        };   
        var dateTime = date.toLocaleString("ru", options); 
        alert(dateTime);     
        localStorage.setItem(dateTime, email);
    }else alert("Почта введена неверно");
}  
