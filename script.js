window.addEventListener('load', () => {
    $('#calculate').click(function(){
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
        var isDone = false;
        var numDot = 0;
        var numSign = 0;

        //Refresh
        $('#inputBinary').removeClass('border-danger');
        $('#inputBits').removeClass('border-danger');

        //Binary Input Checker
        for(i=0; i<binaryList.length; i++){
            if(binaryList[i] === ".") numDot++;
            if(binaryList[i] === "+" || binaryList[i] === "-") numSign++
        };  if(numDot>1 || numSign>1) err6();

        while(isDone!== true){
            for(i = 0; i < binaryList.length; i ++){
                if(binaryList[i] === "0" || binaryList[i] === "1" || binaryList[i] === "." || binaryList[i] === "-" || binaryList[i] === "+"){
                    console.log("BINARY FOUND");
                } else {
                    isBinary = false;
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
                        isDone = true;
                    } else {
                        err1();
                    }
                } else {
                    err2();
                }
            } else {
                err3();
            }
        }

        //ERROR MESSAGES
        //Error 1: Input is not a binary
        function err1(){
            $('#inputBinary').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "INPUT IS NOT A BINARY";
            isDone = true;
        };

        //Error 2: Invalid number of bits
        function err2(){
            $('#inputBits').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "INVALID # OF BITS";
            isDone = true;
        };

        //Error 3: Empty binary
        function err3(){
            $('#inputBinary').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "BINARY IS REQUIRED";
            isDone = true;
        };

        //Error 4: Empty number of bits
        function err4(){
            $('#inputBits').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "NUMBER OF BITS IS REQUIRED";
            isDone = true;
        };

        //Error 5: Both fields are empty
        function err5(){
            $('#inputBinary').addClass('border border-danger');
            $('#inputBits').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "BOTH FIELDS ARE REQUIRED";
            isDone = true;
        };

        //Error 6: Invalid Binary
        function err6(){
            $('#inputBinary').addClass('border border-danger');
            document.getElementById('errorMsg').innerHTML = "INVALID BINARY";
            isDone = true;
        };
    });
});