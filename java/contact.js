function myFunction() {
    var name = document.getElementById("name").value;
    console.log(name);
    var email = document.getElementById("email").value;
    console.log(email);
    var message = document.getElementById("message").value;
    console.log(message);
    var select = document.getElementById("select").value;
    console.log(select);
}
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();