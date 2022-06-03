var selectedItems = [];

// var operators = [];

var firstNumber = [];
var secondNumber = [];
var operator = [];



// boolean variables

var firstNumberEntered = false;
var secondNumberEntered = false;
var operatorEntered = false;


// Functions are given to the calculator in this section

$(".button").on("click", function () {
    if ($(this).hasClass("number") === true) {
        if (firstNumberEntered === false) {
            
            firstNumber.push($(this).html());
            selectedItems.push($(this).html());
            $("#result").html(selectedItems);
            console.log(firstNumber);
        };

    };

    if ($(this).hasClass("square") === true) {
        firstNumberEntered = true
        console.log(firstNumber);  
        var squareNumber = +parseInt(firstNumber.join(""));
        console.log(squareNumber);
        $("#result").html(squareNumber*squareNumber);
    }



    if ($(this).hasClass("operators") === true) {
        if (operatorEntered === false) {
            if (firstNumber.length !== 0) {
                $(this).fadeIn(100).fadeOut(100).fadeIn(100);
                firstNumberEntered = true
                operatorEntered = true
                operator.push($(this).html());
                selectedItems.push($(this).html());
                $("#result").html(selectedItems)
            }

        };

    };

    if ($(this).hasClass("number") === true) {
        if (secondNumberEntered === false) {
            if (operatorEntered === true) {

                
                secondNumber.push($(this).html());
                selectedItems.push($(this).html());
                $("#result").html(selectedItems);
                console.log(secondNumber);

            };
        };
    };



    if ($(this).hasClass("equal") === true) {
        secondNumberEntered = true
        if (firstNumberEntered === true && operatorEntered === true && secondNumberEntered === true) {

            
            var afirstNumber = +parseInt(firstNumber.join(""));
            var asecondNumber = +parseInt(secondNumber.join(""));
            var aoperator = operator.join("");
            console.log(afirstNumber, aoperator, asecondNumber);
            calculate(afirstNumber, asecondNumber, aoperator);
            setTimeout(() => {
                reset();
                firstNumberEntered = false
                secondNumberEntered = false;
                operatorEntered = false;
                selectedItems = [];
                firstNumber = [];
                secondNumber = [];
                operator = [];
            }, 1500);

            


        }
    }

    if ($(this).hasClass("del") === true) {
        selectedItems.pop();
        $("#result").html(selectedItems);

    }


});

// $(".operators").on("click",()=>{
//     alert("ok");
    
// });


// functions used in this program

function calculate(f, s, op) {
    if (op === "+") {
        $("#result").html(f + s);
    } else if (op === "-") {
        $("#result").html(f - s);
    } else if (op === "*") {
        $("#result").html(f * s);
    } else if (op === "/") {
        $("#result").html(f / s);
    }

}

function reset() {
    $("#result").html("Let's begin");

}









