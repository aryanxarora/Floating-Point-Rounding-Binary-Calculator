function calculate(){
    document.getElementById('errorMsg').innerHTML = ""
    var binary = document.getElementById('binary').value;
    var bits = document.getElementById('bits').value;
    var binaryList = binary.split("")

    console.log(binary, bits, binaryList);

    var truncate = []
    var roundUp = 0
    var roundDown = 0
    var ties = 0
    var isBinary = true;
    var errorMsg = "ERR: INPUT IS NOT A BINARY"
    var invalidLength = "ERR: INVALID # OF BITS"

    for(i = 0; i < binaryList.length; i ++){
        if(binaryList[i] === "0" || binaryList[i] === "1" || binaryList[i] === "." || binaryList[i] === "-" || binaryList[i] === "+"){
            console.log("BINARY FOUND");
        } else {
            isBinary = false;
            console.log(errorMsg)
        }
    }

    if(bits <= binaryList.length && bits >= 0){
        if(isBinary == true){
            for(i = 0; i < bits; i ++){
                truncate = truncate + binaryList[i];
                if(binaryList[i] === "." || binaryList[i] === "-" || binaryList[i] === "+"){
                    bits++;
                }
            }
        
            console.log(truncate)
        
            document.getElementById('truncate').innerHTML = truncate;
            document.getElementById('roundUp').innerHTML = roundUp;
            document.getElementById('roundDown').innerHTML = roundDown;
            document.getElementById('ties').innerHTML = ties;
        } else {
            document.getElementById('errorMsg').innerHTML = errorMsg;
        }
    } else {
        document.getElementById('errorMsg').innerHTML = invalidLength;
    }
}