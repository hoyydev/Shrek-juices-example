function validator(options){

    function validate(inputElement, rule) {
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        var errorMessage = rule.test(inputElement.value); 
        

                   if(errorMessage){
                        errorElement.innerText = errorMessage;  
                        inputElement.parentElement.classList.add('invalid');      
                   }else{
                        errorElement.innerText = '';
                        inputElement.parentElement.classList.remove('invalid');
                   }
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        options.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selector);

            if(inputElement){
                inputElement.onblur = function () {
                   validate(inputElement, rule);
                }
                
                inputElement.oninput = function () {
                    var errorElement = inputElement.parentElement.querySelector('.form-message');
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.remove('invalid');
                }
            }
        });
    }

}

validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function (value){
            return value.trim() ? undefined : 'Please enter your name'
        }
    };
}

validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function (value){
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
            return regex.test(value) ? undefined : 'Please enter your email';
        }
    };
}