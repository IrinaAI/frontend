function f(){
    var str = document.getElementById("input_id").value;   
    if(/[a-zа-я]+/gi.test(str)){
        alert("Введены недопустимые символы");
        return str;
    }
    else{
        var spltLine = splitLine(str); 
        var result = operations(spltLine);        
        if(isNaN(result) || result === null){
            alert("Неверное выражение");
            return str;
        }
        else return result;
    }
    function splitLine(s) {
        var line = (s.replace(/\s/g, '').match(/([0-9\.]+|[+*-/])/g) || []);
        return line;
    }
    function operations(st){
        var count = 0;
        for(var i = 0; i < st.length; i++){            
            switch(st[i]){
                case '*':
                    st[i+1] *= st[i-1]; 
                    delete st[i-1];
                    delete st[i];                
                    break;
                case '/':
                    st[i+1] = st[i-1] / st[i+1];
                    delete st[i-1];
                    delete st[i];                                               
                    break; 
                case '+':
                case '-':
                    count = 0;
                    break;
                default:
                    break;
            }                 
        }        
        var res = st.join('').match(/([0-9\.]+|[+*-/])/g);
        if (res === null){
            return res;
        }   
        if(res[0] == "+" || res[0] == "-"){
            res[0]+=res[1];
            res.splice(1,1);
        }
        var res1 = +res[0];       
        for(var i = 0; i < res.length; i++){ 
                   
            switch(res[i]){
                case '+':
                    res1 += +res[i+1];
                    break;
                case '-':
                    res1 -= res[i+1];
                    break;    
                default:
                    break;
            }        
        }
        return res1;
    }    
}
function backspace(){
    var str = document.getElementById("input_id").value;
    return str.substring(0, str.length - 1);
}
function cursorToEnd(){
    input_id.focus();
    input_id.selectionStart = input_id.value.length;
}

window.onkeydown = function (e) {

    var code = e.keyCode ? e.keyCode : e.which;

    if (code === 13) { //up key
        f();
        cursorToEnd()
    } else if (code === 40) { //down key
        alert('down');
    }
};
//
// var input = document.getElementById("btnEq");
// debugger
// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keydown", function(event) {
//     // Cancel the default action, if needed
//     debugger
//     event.preventDefault();
//
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//         // Trigger the button element with a click
//         calc.input.value = f(), cursorToEnd()
//     }
// });
/*function checkKey(e) {
    if(e.keyCode === "13") {
       return f();
    }
}*/
    
