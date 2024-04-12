$("#formValidation").validate({
    rules:{
        name:{
            minlength:3,
            name:true
        },
        email:{
            email:true
        },
        phone:{
            minlength:10,
            mobile:true  
        },
        password: {
            minlength: 5,
        },
        password_confirm: {
            minlength: 5,
            equalTo:"#password"
        }
    },
    messages:{
        name:{
            required:"please enter your name"
        },
        email:{
            required:"please enter a valid email id"
        },
        phone:{
            required:"please enter a valid mobile number"
        },
        password_confirm:{
            equalTo:"Please re-enter the same password"
        }
    },
    
    submitHandler: function(form) {
      form.submit();
    }
   });
