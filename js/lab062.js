/**************************************
 TITLE: Madlib Interim Version
 AUTHOR: Noah Leigh
 CREATE DATE: 2014-04-18
 PURPOSE: Pulling Data from a form
 LAST MODIFIED ON: 2014-04-18
 LAST MODIFIED BY: Noah Leigh
 MODIFICATION HISTORY: Created
*/

var counter = 0; // Counter for the button presses

function jQueryUI(){
    // List of states for Autocomplete
    var availableTags = [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
	];
    
    // Makes the autocomplete jQueryUI widget
    $("#autocomplete").autocomplete({
        source: availableTags
    });
    // Makes the datepicker jQueryUI widget
    $("#date").datepicker({
        dateFormat: "yy-mm-dd"
    });
};

// Run on form submission.
function submitForm(){
    console.log("Submit!"); // Debug Message
    var data = new Array;   // Array to store form data.
    
    // Reads the values from the inputs and puts them in the array.
    data["text"] = $("#text").val();
    data["radio"] = $("[name='radio']:checked").attr("id");
    data["checkbox"] = $("#checkbox").prop("checked");
    data["email"] = $("#email").val();
    data["password"] = $("#password").val();
    data["counter"] = $("#counter").val();
    data["tel"] = $("#tel").val();
    data["number"] = $("#number").val();
    data["range"] = $("#range").prop("value");
    data["date"] = $("#date").val();
    data["autocomplete"] = $("#autocomplete").val();
    data["textarea"] = $("#textarea").val();
    
    console.log(data);  // allows you to inspect the array in the web console.
    // Iterates through the keys in the array to print them out.
    for (var key in data){
        console.log(key+": "+data[key]);
    };
};

$(document).ready(function(){
    jQueryUI();
    
    // Increment the counter on pressing the button.
    $("#button").click(function(){
        counter++;
        $("#counter").val(counter);
    });
    
    $("#form").submit(function(event){
        submitForm();
        event.preventDefault();   // Don't refresh the page.
    });
    
    $("#form").bind("reset", function(event) {
        if (confirm("Are you sure you want to reset the forms?")){
        } else {
            event.preventDefault();
        }
    });
});