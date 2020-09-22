function calculate(){
    document.getElementById('errorMsg').innerHTML = "";
    var inputBinary = document.getElementById('inputBinary').value;
    var inputBits = document.getElementById('inputBits').value;
    var binaryList = inputBinary.split("");

    console.log(inputBinary, inputBits, binaryList);

    var truncate = [];
    var roundUp = 0;
    var roundDown = 0;
    var ties = 0;
    var isBinary = true;
    var errorMsg1 = "ERR: INPUT IS NOT A BINARY";
    var errorMsg2 = "ERR: INVALID # OF BITS";
    var errorMsg3 = "ERR: ALL FIELDS ARE REQUIRED";

    for(i = 0; i < binaryList.length; i ++){
        if(binaryList[i] === "0" || binaryList[i] === "1" || binaryList[i] === "." || binaryList[i] === "-" || binaryList[i] === "+"){
            console.log("BINARY FOUND");
        } else {
            isBinary = false;
            console.log(errorMsg1);
        }
    }

    if(inputBinary !== "" && inputBits !== ""){
        if(inputBits <= binaryList.length && inputBits >= 0){
            if(isBinary == true){
                for(i = 0; i < inputBits; i ++){
                    truncate = truncate + binaryList[i];
                    if(binaryList[i] === "." || binaryList[i] === "-" || binaryList[i] === "+"){
                        inputBits++;
                    }
                }
                console.log(truncate)
                document.getElementById('truncate').innerHTML = truncate;
                document.getElementById('roundUp').innerHTML = roundUp;
                document.getElementById('roundDown').innerHTML = roundDown;
                document.getElementById('ties').innerHTML = ties;
            } else {
                document.getElementById('errorMsg').innerHTML = errorMsg1;
            }
        } else {
            document.getElementById('errorMsg').innerHTML = errorMsg2;
        }
    } else {
        document.getElementById('errorMsg').innerHTML = errorMsg3;
    }
}