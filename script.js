let currentValue = $("#output").html();

$("span").click(function(e) {
    let identifier = e.target.innerHTML

    if(identifier === "÷"){
        identifier = '/';
    }

    if(identifier == "AC"){
        $("#output").html(null);
        currentValue = "";
    }else{
        if(identifier.startsWith("<") === false){
            if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('.') === true || currentValue.endsWith('+') === true || currentValue.endsWith('.') === true){
                console.log(currentValue.length)
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
            }else if($("#output").html() === "" && identifier === "=" || $("#output").html() === "" && identifier === "%" || $("#output").html() === "" && identifier === "/" || $("#output").html() === "" && identifier === "x" || $("#output").html() === "" && identifier === "-" || $("#output").html() === "" && identifier === "." || $("#output").html() === "" && identifier === "+" || $("#output").html() === "" && identifier === "." ){

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
      if(isNaN(inputKeyboard) === false || inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "." ||  inputKeyboard === "+" ){
        
        if(currentValue.endsWith('%') === true || currentValue.endsWith('=') === true || currentValue.endsWith('/') === true || currentValue.endsWith('x') === true || currentValue.endsWith('-') === true || currentValue.endsWith('.') === true || currentValue.endsWith('+') === true || currentValue.endsWith('.') === true){
            if(inputKeyboard === "=" || inputKeyboard === "%" || inputKeyboard === "/" || inputKeyboard === "x" || inputKeyboard === "-" || inputKeyboard === "." ||  inputKeyboard === "+" ){
                erase();
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }else{
                currentValue = currentValue + inputKeyboard
                $("#output").html(currentValue);
                changeValue();
            }
        }else if($("#output").html() === "" && inputKeyboard === "=" || $("#output").html() === "" && inputKeyboard === "%" || $("#output").html() === "" && inputKeyboard === "/" || $("#output").html() === "" && inputKeyboard === "x" || $("#output").html() === "" && inputKeyboard === "-" || $("#output").html() === "" && inputKeyboard === "." ||  $("#output").html() === "" && inputKeyboard === "+" ||  $("#output").html() === "" && inputKeyboard === "." ){

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
    //   console.log(value)
    }

    function result(){

    }
