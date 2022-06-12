let currentValue = $("#output").html();
let indexOperator = [];
let result = true;

let bilangan1 = false;
let bilangan2 = false;
let operator = false;

$("span").click(function(e) {
    let identifier = e.target.innerHTML

    if(identifier === "÷"){
        identifier = '/';
    }
    
    if(identifier === "Result"){
        identifier = '=';
    }

    if(identifier == "AC"){
        $("#output").html(null);
        currentValue = "";

    }else{
        if(identifier.startsWith("<") === false){

            if(identifier === "=" || identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "+" ){
                if(operator === false){
                    operator = identifier;
                    console.log(operator)
                }else{
                    count();
                }
            }else{
                if(operator === false){
                    if(bilangan1 === false){
                        bilangan1 = "";
                    }
                    bilangan1 += identifier
                    console.log(bilangan1)
                }else{
                    if(bilangan2 === false){
                        bilangan2 = "";
                    }
                    bilangan2 += identifier
                    console.log(bilangan2)
                }
            }

            if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('+') === true ){
                if(identifier === "=" || identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "." ||  identifier === "+" ){
                    erase();
                    currentValue = currentValue + identifier
                    $("#output").html(currentValue);
                    changeValue();
                }else{
                    currentValue = currentValue + identifier
                    $("#output").html(currentValue);
                    changeValue();
                }
            }else if($("#output").html() === "" && identifier === "=" || $("#output").html() === "" && identifier === "%" || $("#output").html() === "" && identifier === "/" || $("#output").html() === "" && identifier === "x" || $("#output").html() === "" && identifier === "-" || $("#output").html() === "" && identifier === "+" || $("#output").html() === "" && identifier === "." ){

            }else{
                currentValue = currentValue + identifier
                $("#output").html(currentValue);
                changeValue();
            }
        }
    }
  });
  
  $(document).keypress(function(e) {
      let inputKeyboard = e.key;
      if(isNaN(inputKeyboard) === false || inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "+" ){

        if(inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" ||  inputKeyboard === "+" ){
            indexOperator.push(inputKeyboard);

        }

          if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('.') === true || currentValue.endsWith('+') === true){
            if(inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "." ||  inputKeyboard === "+" ){
                indexOperator.pop();
                indexOperator.pop();
                indexOperator.push(inputKeyboard);
                erase();
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }else{
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }
        }else if($("#output").html() === "" && inputKeyboard === "=" || $("#output").html() === "" && inputKeyboard === "%" || $("#output").html() === "" && inputKeyboard === "/" || $("#output").html() === "" && inputKeyboard === "x" || $("#output").html() === "" && inputKeyboard === "-" || $("#output").html() === "" && inputKeyboard === "+" ||  $("#output").html() === "" && inputKeyboard === "." ){

        }else{
            currentValue = currentValue + inputKeyboard
            $("#output").html(currentValue);
            changeValue();
        }
    }
    });
    
    function erase(){
        $("#output").html(currentValue.slice(0, currentValue.length-1));
        currentValue = $("#output").html();
    }
    
    function changeValue(){
      let value = $("#output").html();
      currentValue = value;
    }
    
    function count(){
        console.log('masuk')
        if(bilangan1.indexOf('.') > -1 || bilangan2.indexOf('.') > -1){

        }else{
            if(operator === '+'){
                result = parseInt(bilangan1) + parseInt(bilangan2);
                bilangan2 = false;
                operator = currentValue.slice(currentValue.length-1 , currentValue.length)
                console.log(currentValue)
            }

        }


        showResult();

    }

    function showResult(){
        if(result !== true){
            $("#result").html(result);
        }
    }
