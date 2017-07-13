/**
 * Created by Janith on 7/13/2017.
 */

var display_txt = "";
var firstNum = 0.0;
var secondNum = 0.0;
var operation = "";

$('#oneBtn,#twoBtn,#threeBtn,#fourBtn,#fiveBtn,#sixBtn,#sevenBtn,#eightBtn,#nineBtn,#zeroBtn,#dotBtn').click(function () {
    display_txt = display_txt + $(this).text();
    $('#cal_display').val(display_txt);
    $('#cal_display').css('background-color','white');
});

$('#plusBtn,#minusBtn,#mulBtn,#divBtn').click(function () {
   var action= this.id;

   if(!isNaN($('#cal_display').val())) {
       if (operation != "") {
           firstNum = calculate($('#cal_display').val());
           $('#memTxt').text(firstNum);
       } else {
           firstNum = $('#cal_display').val();
       }
   }

   if(action == "plusBtn"){
       operation = "sum";
   }else if(action == "minusBtn"){
       operation = "sub";
   }else if(action == "mulBtn"){
       operation = "mul";
   }else{
       operation = "div";
   }

   display_txt = "";
   $('#cal_display').val("");
   $('#cal_display').css('background-color','white');
});

$('#clear_btn').click(function () {
    display_txt = "";
    firstNum = 0.0;
    secondNum = 0.0;
    operation = "";
    $('#cal_display').val("");
    $('#cal_display').css('background-color','white');
    $('#memTxt').text("");
});

$('#eqBtn').click(function () {
    if(!isNaN($('#cal_display').val())) {
        var result = calculate($('#cal_display').val());
        $('#cal_display').val(result);
        $('#cal_display').css('background-color', 'yellow');
        $('#memTxt').text("");
        display_txt = "";
        operation = "";
    }
});

function calculate(secNum) {
    var num1 = new Big(firstNum);
    var num2 = new Big(secNum);

    if(operation == "sum"){
        return num1.plus(num2);
    }else if(operation == "sub"){
        return num1.minus(num2);
    }else if(operation == "mul"){
        return num1.times(num2);
    }else {
        return num1.div(num2);
    }
}