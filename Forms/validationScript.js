    // JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

       

       //myForm.addEventListener("submit", function(){});

    let inputField = document.getElementById("inputField");
    let fieldRegexp = /^[a-zA-z0-9]+$/;

      inputField.addEventListener("blur", validateInput);

      function validateInput(){
        
        //inputField.setCustomValidity("");
        if (!fieldRegexp.test(inputField.value)){            
             
             inputField.setCustomValidity("Special characters are not permitted");
             event.preventDefault();
             
             
             
        }

        else{
           inputField.setCustomValidity("");
          myForm.addEventListener("submit",confirmMsg);
           
           }
             
       }

      function confirmMsg(){
            alert("Form successfully submitted");  
    
            
            
        
    }