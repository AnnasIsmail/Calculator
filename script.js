let currentValue = $("#output").html();
let indexOperator = [];
let result = 0;

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
                indexOperator.push(identifier);
            }

            if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('+') === true ){
                if(identifier === "=" || identifier === "%" || identifier === "/" || identifier === "x" || identifier === "-" || identifier === "." ||  identifier === "+" ){
                    indexOperator.pop();
                    indexOperator.pop();
                    indexOperator.push(identifier);
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
        changeValue();
    }
    
    function changeValue(){
      let value = $("#output").html();
      currentValue = value;
      count();
    }
    
    function count(){

        result = 0;
        let first = true;

        indexOperator.map((data , index)=>{
            let bilangan = currentValue.split(data)

            let checkDecimal = currentValue.split('.');

            if(checkDecimal.length > 1){
                console.log('masuk')
                if(data === '+'){
                    if(first === true){
                        first = false;
                            result = parseFloat(bilangan[0]) + parseFloat(bilangan[1]);
                    }else{
                            result += parseFloat(bilangan[bilangan.length-1]);
                    }
                }else if(data === '-'){
                    if(first === true){
                        first = false;
                            result = parseFloat(bilangan[0]) - parseFloat(bilangan[1]);
                    }else{
                            result -= parseFloat(bilangan[bilangan.length-1]);
                    }
                }else if(data === 'x'){
                    if(first === true){
                        first = false;
                            result = parseFloat(bilangan[0]) * parseFloat(bilangan[1]);
                    }else{
                            result *= parseFloat(bilangan[bilangan.length-1]);
                    }
                }else if(data === '/'){
                    if(first === true){
                        first = false;
                            result = parseFloat(bilangan[0]) / parseFloat(bilangan[1]);
                    }else{
                            result /= parseFloat(bilangan[bilangan.length-1]);
                    }
                }else if(data === '%'){
                    if(first === true){
                        first = false;
                            result = parseFloat(bilangan[0]) % parseFloat(bilangan[1]);
                    }else{
                            result %= parseFloat(bilangan[bilangan.length-1]);
                    }
                }
            }else{
        
                        if(data === '+'){
                                if(first === true){
                                    first = false;
                                        result = parseInt(bilangan[0]) + parseInt(bilangan[1]);
                                }else{
                                        result += parseInt(bilangan[bilangan.length-1]);
                                }
                            }else if(data === '-'){
                                if(first === true){
                                    first = false;
                                        result = parseInt(bilangan[0]) - parseInt(bilangan[1]);
                                }else{
                                        result -= parseInt(bilangan[bilangan.length-1]);
                                }
                            }else if(data === 'x'){
                                if(first === true){
                                    first = false;
                                        result = parseInt(bilangan[0]) * parseInt(bilangan[1]);
                                }else{
                                        result *= parseInt(bilangan[bilangan.length-1]);
                                }
                            }else if(data === '/'){
                                if(first === true){
                                    first = false;
                                        result = parseInt(bilangan[0]) / parseInt(bilangan[1]);
                                }else{
                                        result /= parseInt(bilangan[bilangan.length-1]);
                                }
                            }else if(data === '%'){
                                if(first === true){
                                    first = false;
                                        result = parseInt(bilangan[0]) % parseInt(bilangan[1]);
                                }else{
                                        result %= parseInt(bilangan[bilangan.length-1]);
                                }
                            }

            }
        })
        showResult()

    }

    function showResult(){
        console.log(result)
        $("#result").html(result);
    }
