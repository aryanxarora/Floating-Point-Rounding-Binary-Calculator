window.addEventListener('load', () => {
    $('#calculate').click(function(){
        document.getElementById('errorMsg').innerHTML = "";
        const inputBinary = document.getElementById('inputBinary').value;
        const inputBits = document.getElementById('inputBits').value;
        const inputSign = $("input[name='inputSign']:checked").val();
        var binaryList = inputBinary.split("");

        console.log(inputBinary, inputBits, binaryList);
        
        var truncate = [];
        var roundUp = 0;
        var roundDown = 0;
        var ties = 0;

        var isBinary = true;
        var isDone = false;
        var isEmpty = false;
        var numDot = 0;

        var firstNz = -1;   //first non zero index
        var lastNz = -1;    //last non zero index
        var dotIndex = -1;   //index of dot
        var sigNum = -1;     //number of significant
        var sigOut = 

        var userBits = inputBits;
        var ctr1 = 0;


        refresh();

        //Empty Checker
        if(inputBinary===""){   
            if(inputBits===""){
                if(inputSign===undefined){
                    warnBinary();
                    warnBits();
                    warnSign();
                    err3();
                } else{
                    warnBinary();
                    warnBits();
                    err3();
                }
            } else{
                warnBinary();
                err3();
            }
        } else if(inputBits===""){
            if(inputSign===undefined){
                warnBits();
                warnSign();
                err3();
            } else{
                warnBits();
                err3();
            }
        } else if(inputSign===undefined){
            warnSign();
            err3();
        };

        //PRE-OPERATION
        if(isDone === false){
            //Binary Input First Checker
            for(i=0; i<binaryList.length; i++){
                if(binaryList[i] === ".") numDot++;
                if(binaryList[i] !== "0" && binaryList[i] !== "1" && binaryList[i] !== ".") isBinary = false;
            };  if(numDot>1) isBinary = false;

            scanIndex();

            //PRE-OPERATION CHECKERS
            if(isEmpty === false){
                //Number of Bits Chcecker
                if(inputBits <= sigNum && inputBits > 0){  
                    //Binary Input Second Checker
                    if(isBinary == true){
                        //ACTUAL OPERATIONS
                        arTrunc();
                        arRup();
                        arRdown();
                        arTte();
                        isDone = true;
                    } else err1();
                } else err2();
            };
        };

        //ROUNDING OPERATIONS
        //Truncate

        function scanIndex(){
            for(i=0; i<binaryList.length; i++){
                if(binaryList[i] !== "0" && binaryList[i] !== "." && firstNz === -1) firstNz=i;
                else if(binaryList[i] !== "0" && binaryList[i] !== ".") lastNz=i;
                else if(binaryList[i] === ".") dotIndex=i;
            }

            if(dotIndex !== -1 && dotIndex<firstNz) sigNum = binaryList.length - firstNz;
            else if(dotIndex !== -1 && dotIndex>firstNz) sigNum = binaryList.length - 1 - firstNz;
            else if(firstNz !== -1 && lastNZ !== -1) sigNum = lastNz - firstNz + 1;
            else sigNum = 0;

            console.log("Dot Index: " + dotIndex);
            console.log("First NZ Index: " + firstNz);
            console.log("Last NZ Index: " + lastNz);
            console.log("Significant Num: " + sigNum);
        }

        function arTrunc(){
<<<<<<< Updated upstream
            for(i = 0; i < binaryList.length; i ++){
                if(binaryList[i] !== undefined){
                    if(binaryList[i] === ".") inputBits++;
                    if(dotIndex !== -1){
                        console.log("temp");
                    } else{ 
                        while(sigOut<sigNum){
                            if(i>=firstNz && i<=lastNz){
                                truncate = truncate + binaryList[i];
                                sigOut++;
                                i++;
                            }
                        }
                    }
=======
            for(i = 0; i < binaryList.length; i++){
                if(binaryList[i] !== undefined){
                    if(dotIndex !== -1 && ctr1 < userBits){    //if dot exists
                        if(binaryList[i] === ".") userBits++;
                        if(i>=firstNz){
                            truncate = truncate + binaryList[i];
                            ctr1++;
                        };
                    } else if(dotIndex === -1 && ctr1 < userBits){  //if dot doesn't exist
                        if(i>=firstNz){
                            truncate = truncate + binaryList[i];
                            ctr1++;
                        };
                    };
>>>>>>> Stashed changes
                } else err2();
            };
            if(isDone === false){
                document.getElementById('truncate').innerHTML = truncate;
                console.log("Truncate: " + truncate);
            };
        };

        //Round Up
        function arRup(){
            roundUp = parseFloat(truncate);
            document.getElementById('roundUp').innerHTML = roundUp;
            console.log("Round Up: " + roundUp);
        };

        //Round Down
        function arRdown(){
            document.getElementById('roundUp').innerHTML = roundDown;
            console.log("Round Down: " + roundDown);
        };

        //Ties to Even
        function arTte(){
            document.getElementById('roundUp').innerHTML = ties;
            console.log("Round Ties To Even: " + ties);
        };

        //ERROR MESSAGES
        //Error 1: Input is not a binary
        function err1(){
            warnBinary();
            document.getElementById('errorMsg').innerHTML = "INVALID BINARY";
            isDone = true;
        };

        //Error 2: Invalid number of bits
        function err2(){
            warnBits();
            document.getElementById('errorMsg').innerHTML = "INVALID # OF BITS";
            isDone = true;
        };

        //Error 3: Empty binary
        function err3(){
            document.getElementById('errorMsg').innerHTML = "ALL FIELDS ARE REQUIRED";
            isDone = true;
            isEmpty = true;
        };

        //CSS FUNCTIONS
        //Borderize Input Binary
        function warnBinary(){
            $('#inputBinary').addClass('border border-danger');
        };

        //Borderize Input Bits
        function warnBits(){
            $('#inputBits').addClass('border border-danger');
        };

        //Borderize Input Sign
        function warnSign(){
            $('#inputSignBox').addClass('border border-danger');
        };

        //REFRESH FUNCTION
        function refresh(){
            $('#inputBinary').removeClass('border-danger');
            $('#inputBits').removeClass('border-danger');
            $('#inputSignBox').removeClass('border border-danger');
            document.getElementById('truncate').innerHTML = 0;
            document.getElementById('roundUp').innerHTML = 0;
            document.getElementById('roundUp').innerHTML = 0;
            document.getElementById('roundUp').innerHTML = 0;
        }
    });
});