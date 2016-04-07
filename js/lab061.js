/**************************************
 TITLE: Madlib First Version: Pulling Through
 AUTHOR: Noah Leigh
 CREATE DATE: 2014-04-07
 PURPOSE: Pulling Text From a Text Field
 LAST MODIFIED ON: 2014-04-07
 LAST MODIFIED BY: Noah Leigh
 MODIFICATION HISTORY: Created
*/


$(document).ready(function(){
    $("#input").submit(function(){
        console.log("Submit!"); // Debug Message
        $("#output").text($("#input1").val());  // Scape and assign in one line.
        return false;   // Don't refresh the page.
    });
});