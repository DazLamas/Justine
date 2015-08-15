console.log('Justine is here');

//Here we go!
///////////////////////////////////////

function emptynessValidation(element) {
  
  var error_message = 'Tú, se te ha olvidado';

  if(!element.value){//error
    createError(element, error_message);
  }else{
    (element.value)
    alert('has value');
  }
};

function createError(element, error_message) {
  
  var parent_node 	= element.parentNode;
  var new_element	= document.createElement("span");

  if(parent_node.lastchild == element) {
  
  	var error_container = parent_node.appendChild(new_element);
  } else {
  
  	var error_container = parent_node.insertBefore(new_element, element.nextSibling);
  }

  error_container.classList.add('error');
  error_container.innerHTML = error_message;
}

//Fire validations up
var fire_validations_element = document.getElementsByClassName("validation-btn");

for(var i=0;i<fire_validations_element.length;i++){

    fire_validations_element[i].addEventListener('click', whichForm, false);

};

function whichForm(event) {
  event.preventDefault();
  // var form_id = event.target.classList[1];
  var button              = event.target;
  var parent_element      = button.parentNode;
  var what_im_looking_for = 'form';

  while (parent_element.tagName.toLowerCase() != what_im_looking_for) {
    parent_element = parent_element.parentNode;
  }

  lookForValidations(parent_element);

};

function lookForValidations(form) {
  
  var justine_elements = form.getElementsByClassName('justine');

  for (var i = justine_elements.length - 1; i >= 0; i--) {
    var what_validation = justine_elements[i].classList[1];
    fireValidation(what_validation, justine_elements[i]);
  };

};

function fireValidation(function_name, function_argument){
  
  var fn = window[function_name];

  if(typeof fn === 'function') {
	 fn(function_argument);
  }
};


















