/**************************************
 TITLE: Madlib Final Version
 AUTHOR: Noah Leigh
 CREATE DATE: 2014-04-21
 PURPOSE: Doing all the Madlib stuff
 LAST MODIFIED ON: 2014-04-21
 LAST MODIFIED BY: Noah Leigh
 MODIFICATION HISTORY: Created
*/

// Watches for clicks on the arrow buttons to toggle the display
var currentDisplay;
function movement(){
    $("#leftArrow").click(function(){
        showLeft();
    });
    $(document).keypress(function(event){
        if (event.keyCode == 13){
            if (currentDisplay == "RIGHT"){
                showLeft();
            };
        };
    });
    $("#rightArrow").click(function(){
        showRight();
    });
}
// Slides the Right pane out of the way to display the Left pane
function showLeft(){
    console.log("Show Left");
    $("#left .internal").animate({opacity:"1.0"}, 0);
    $("#left").animate({width:"660px"}, 500);
    $("#right").animate({padding:"0px 0px 0px 20px"}, 500);
    $("#leftArrow").animate({opacity:"0.0"}, 500);
    $("#rightArrow").animate({opacity:"1.0"}, 500, function(){
        currentDisplay = "LEFT";
        $("#input1").focus(); // Give keyboard a focus.
    });
}
// Slides the Left pane out of the way to display the Right pane
function showRight(){
    console.log("Show Right");
    $("input").blur(); // Remove keyboard focus from inputs
    $("#left").animate({width:"0%"}, 500);
    $("#left .internal").animate({opacity:"0.0"}, 250);
    $("#right").animate({padding:"0px 0px 0px 0px"}, 500);
    $("#leftArrow").animate({opacity:"1.0"}, 500);
    $("#rightArrow").animate({opacity:"0.0"}, 500, function(){
        currentDisplay = "RIGHT";
    });
}

function formButtons(){

    $("form").submit(function(event){
        submitInput();
        event.preventDefault();
    });
    
    $("form").bind("reset", function(event) {
        if (confirm("Are you sure you want to reset the forms?")){
        } else {
            event.preventDefault();
        }
    });
    
    $("#btnAutofill").click(function(){
        console.log("autofilling");
        $("#input1").val("Jacob");
        $("[name='gender1'][value='M']").prop("checked", true)
        $("#input3").val("England");
        $("#input4").val("Alice");
        $("[name='gender2'][value='F']").prop("checked", true)
        $("#input6").val("5");
        $("#input7").val("serendipidous");
        $("#input8").val("dancing");
        $("#input9").val("sushi");
        $("#input10").val("Jupiter");
    });
}
// Puts the input from the form into an array, which is then used to create the output string.
var inputArray;
var story1Array = ["<p>Once upon a time there was someone named <span class='userInput'>", 
                   "</span> who lived in <span class='userInput'>", 
                   "</span> and had a <span class='userInput'>",
                   "</span> dog named <span class='userInput'>", 
                   "</span> the Great who was <span class='userInput'>", 
                   "</span> years old. </p>", 
                   "<p>They often went out <span class='userInput'>",
                   "</span> together, followed by a delicious meal of <span class='userInput'>",
                   "</span>. After that, they would climb on the roof and try to spot the planet <span class='userInput'>",
                   "</span> through their telescope and dream of traveling there someday.</p>",];
var story2Array = [
        /*  0    */"<p>Standing over the dead body, <span class='userInput'>",
        /*  1 M  */"</span> stooped down and wiped his blood-soaked sword on the dark creature's rags until the blade glimmered like gold in the sun.</p> <p><span class='userInput'>",
        /*  2 F  */"</span> stooped down and wiped her blood-soaked sword on the dark creature's rags until the blade glimmered like gold in the sun.</p> <p><span class='userInput'>",
        /*  3 MM */"</span>, his brother pushed himself up from the dust where he had lain, his life snatched out of the jaws of fate by the timely arrival of <span class='userInput'>",
        /*  4 MF */"</span>, his sister pushed herself up from the dust where she had lain, her life snatched out of the jaws of fate by the timely arrival of <span class='userInput'>",
        /*  5 FM */"</span>, her brother pushed himself up from the dust where he had lain, his life snatched out of the jaws of fate by the timely arrival of <span class='userInput'>",
        /*  6 FF */"</span>, her sister pushed herself up from the dust where she had lain, her life snatched out of the jaws of fate by the timely arrival of <span class='userInput'>",
        /*  7 MM */"</span>. He knew he ought to be grateful, to seize his brother in a joyeous embrace. But his heart remained hard, fueled by bitterness that had taken root <span class='userInput'>",
        /*  8 MF */"</span>. She knew she ought to be grateful, to seize her brother in a joyeous embrace. But her heart remained hard, fueled by bitterness that had taken root <span class='userInput'>",
        /*  9 FM */"</span>. He knew he ought to be grateful, to seize his sister in a joyeous embrace. But his heart remained hard, fueled by bitterness that had taken root <span class='userInput'>",
        /* 10 FF */"</span>. She knew she ought to be grateful, to seize her sister in a joyeous embrace. But her heart remained hard, fueled by bitterness that had taken root <span class='userInput'>",
        /* 11    */"</span> years ago in <span class='userInput'>",
        /* 12    */"</span> while <span class='userInput'>",
        /* 13    */"</span>&#8230;</p>"];
var stringOutput;
function submitInput(){
    console.log("submitted");   // Debug
    
    // Capitalize the names.
    var name = $("#input1").val();
    name = name.charAt(0).toUpperCase()+name.substr(1);
    $("#input1").val(name);
    name = $("#input4").val();
    name = name.charAt(0).toUpperCase()+name.substr(1);
    $("#input4").val(name);
    
    inputArray = $("form").serializeArray();    // Put all the input data into an array.
    
    console.log(inputArray);    // Debug
    for (var i=0; i<inputArray.length; i++){
        console.log("array["+i+"]: "+inputArray[i].value); // Show contents of array.
    };
    
    // Determine which story to display.
    if (inputArray[0].value == "story1"){
        $("#right > .internal > h1").text("Output (simple)");
        
        // Contatinate the array entries. No conditions here.
        stringOutput = story1Array[0] + inputArray[1].value + 
                       story1Array[1] + inputArray[3].value + 
                       story1Array[2] + inputArray[7].value + 
                       story1Array[3] + inputArray[4].value + 
                       story1Array[4] + inputArray[6].value +
                       story1Array[5] + 
                       story1Array[6] + inputArray[8].value + 
                       story1Array[7] + inputArray[9].value + 
                       story1Array[8] + inputArray[10].value + 
                       story1Array[9];
    
    } else if(inputArray[0].value == "story2"){
        $("#right > .internal > h1").text("Output (sophisticated)");
        
        stringOutput = story2Array[0] + inputArray[1].value;
        
        // Choose appropriate strings depending on the gender of that character.
        if (inputArray[2].value == "M"){
            stringOutput = stringOutput + story2Array[1] + inputArray[4].value;
        } else if(inputArray[2].value == "F"){
            stringOutput = stringOutput + story2Array[2] + inputArray[4].value;
        };
        
        // Four options with both characters (MM,MF,FM,FF)
        console.log("Gender selections: "+inputArray[2].value +", "+ inputArray[5].value);
        if (inputArray[2].value == "M" & inputArray[5].value == "M"){
            
            stringOutput = stringOutput + story2Array[3] + inputArray[1].value + 
                                          story2Array[7] + inputArray[6].value;
                                          
        } else if (inputArray[2].value == "M" & inputArray[5].value == "F"){
            
            stringOutput = stringOutput + story2Array[4] + inputArray[1].value + 
                                          story2Array[8] + inputArray[6].value;
                                          
        } else if (inputArray[2].value == "F" & inputArray[5].value == "M"){
            
            stringOutput = stringOutput + story2Array[5] + inputArray[1].value + 
                                          story2Array[9] + inputArray[6].value;
                                          
        } else if (inputArray[2].value == "F" & inputArray[5].value == "F"){
            
            stringOutput = stringOutput + story2Array[6] + inputArray[1].value + 
                                          story2Array[10] + inputArray[6].value;
        };
        // Final concatinations
        stringOutput = stringOutput + story2Array[11] + inputArray[3].value + 
                                      story2Array[12] + inputArray[8].value + 
                                      story2Array[13];
    };
    
    $("output").html(stringOutput); // Display string in the output
    showRight(); // Switch to the output view.
}

$(document).ready(function(){
    showLeft();
    movement();
    formButtons();
    
});