let name;

//Validate form
$("#btn-submit").on("click", function () {
  if (!$("form")[0].checkValidity()) {
    // If the form is invalid, submit it. The form won't actually submit;
    // this will just cause the browser to display the native HTML5 error messages.
    $("form").find("#submit-hidden").click();
  }
  else {
    //All good
    name = document.getElementById("name-text").value;
    alert(`do stuff with ${name} data`);
  }
});