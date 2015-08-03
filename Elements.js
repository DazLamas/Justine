/* Write here your elements:                */

var emptyness_validation = document.querySelectorAll("[data-form-validation='emptyness_validation']");
// var validation_btn       = document.querySelectorAll("[data-funtion='send-data']");

document.getElementById('validation-btn').addEventListener('click', fireValidations, false);

function setEmptynessValidationToElements() {
  for (var i = 0; i < emptyness_validation.length; i++) {
    isEmpty(emptyness_validation[i]);
  };
};