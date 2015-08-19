console.log('Justine is here');

//Here we go!
///////////////////////////////////////
function onlyNumbers(element) {
   var error_message = 'Solo números';
  if(!isNaN(element))
  {
    createError(element, error_message);
  }else{
    console.log('is a number');
  }
}

function emptynessValidation(element) {
  
  var error_message = 'Tú, se te ha olvidado';

  if(!element.value){//error
    createError(element, error_message);
  }else{
    console.log('is not empty');
    return true
  }
};


//Fire validations up
var fire_validations_element = document.getElementsByClassName("validation-btn");

for(var i=0;i<fire_validations_element.length;i++){

    fire_validations_element[i].addEventListener('click', whichForm, false);

};

function whichForm(event) {
  
  event.preventDefault();
  
  var button              = event.target;
  var parent_element      = button.parentNode;
  var what_im_looking_for = 'form';

  while (parent_element.tagName.toLowerCase() != what_im_looking_for) {
    parent_element = parent_element.parentNode;
  }

  getFormDomElements(parent_element);

};

function getFormDomElements(form) {
  
  form_children = form.childNodes;

  for (var i = 0; i < form_children.length; i++) {
    
    if(form_children[i].nodeType == 1){
      getJustineElementsAndValidations(form_children[i]);
    };
  };

};

function getJustineElementsAndValidations(form_dom_element) {

  var form_child_classes = form_dom_element.className.split(' ');

      for (var i = 0; i < form_child_classes.length; i++) {

        if (form_child_classes[i].indexOf('justine-') !== -1) {
          var function_name = form_child_classes[i].substring(form_child_classes[i].indexOf("-") + 1);
          fireValidation(function_name, form_children[i]);
        };
      };
};

function fireValidation(function_name, function_argument){
  
  var fn = window[function_name];

  if(typeof fn === 'function') {
	 fn(function_argument);
  }
};

function createError(element, error_message) {
  console.log(element);
  // var parent_node  = element.parentNode;
  // var new_element  = document.createElement("span");

  // if(parent_node.lastchild == element) {
  
  //  var error_container = parent_node.appendChild(new_element);
  // } else {
  
  //  var error_container = parent_node.insertBefore(new_element, element.nextSibling);
  // }

  // error_container.classList.add('error');
  
  var error_container       = document.getElementById('errors-display');
  error_container.innerHTML = error_message;
}

















