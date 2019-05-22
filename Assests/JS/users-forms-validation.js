(function ($) {
	'use strict'
	
	//$("SignIn") .on('click', function(){
	//});
	
})(jQuery)

function validate_register_donor_form()
{
	
	var errFlag = false;
	if( $.trim( $("#name") .val() ) == "" )
	{
		errFlag = true;
		$("#name") .addClass('is-invalid');
		if( $("#name-error-msg") .length > 0 )
		{
			$('#name-error-msg') .html('Please enter your full name.');
		}
		else
		{
			$('<span id="name-error-msg" class="text-danger">Please enter your name.</span>') .insertAfter('#name');
		}
	}
	else
	{
		errFlag = false;
		$("#name-error-msg") .remove();
		$("#name") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#email") .val() ) == "" )
	{
		errFlag = true;
		$("#email") .addClass('is-invalid');
		if( $("#email-error-msg") .length > 0 )
		{
			$('#email-error-msg') .html('Please enter your valid email.');
		}
		else
		{
			$('<span id="email-error-msg" class="text-danger">Please enter your valid.</span>') .insertAfter('#email');
		}
	}
	else
	{
		errFlag = false;
		$("#email-error-msg") .remove();
		$("#email") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#password") .val() ) == "" )
	{
		errFlag = true;
		$("#password") .addClass('is-invalid');
		if( $("#password-error-msg") .length > 0 )
		{
			$('#password-error-msg') .html('Please enter your password.');
		}
		else
		{
			$('<span id="password-error-msg" class="text-danger">Please enter your password.</span>') .insertAfter('#password');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#password-error-msg") .remove();
		$("#password") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#confirm_password") .val() ) == "" )
	{
		errFlag = true;
		$("#confirm_password") .addClass('is-invalid');
		if( $("#confirm-password-error-msg") .length > 0 )
		{
			$('#confirm-password-error-msg') .html('Please confirm your password.');
		}
		else
		{
			$('<span id="confirm-password-error-msg" class="text-danger">Please confirm your password.</span>') .insertAfter('#confirm_password');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#confrim-password-error-msg") .remove();
		$("#confirm-password") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#confirm_password") .val() ) != "" && $.trim( $("#password") .val() ) != "" && $.trim( $("#password") .val() ) != $.trim( $("#confirm_password") .val() )  )
	{
		errFlag = true;
		$("#confirm_password") .addClass('is-invalid');
		if( $("#confirm-password-error-msg") .length > 0 )
		{
			$('#confirm-password-error-msg') .html('Your password doesn\'t match.');
		}
		else
		{
			$('<span id="confirm-password-error-msg" class="text-danger">Your password doesn\'t match.</span>') .insertAfter('#confirm_password');
		}
	}
	else if( $.trim( $("#confirm_password") .val() ) != "" && $.trim( $("#password") .val() ) != "" && $.trim( $("#password") .val() ) == $.trim( $("#confirm_password") .val() )  )
	{
		errFlag = errFlag ? true : false
		$("#confirm-password-error-msg") .remove();
		$("#confirm_password") .removeClass('is-invalid');
	}
	
	if( $("#is_agreed") .is(":checked") == false )
	{
		errFlag = true;
		$("#is_agreed") .addClass('is-invalid');
		if( $("#is-agreed-error-msg") .length > 0 )
		{
			$('#is-agreed-error-msg') .html('Please agree on terms and conditions.');
		}
		else
		{
			$('<span id="is-agreed-error-msg" class="text-danger">Please agree on terms and conditions.</span>') .insertAfter('#alink');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#is-agreed-error-msg") .remove();
		$("#is-agreed") .removeClass('is-invalid');
	}
	
	return errFlag ? false : true;
}	//	End of function validate_register_donor_form()

function validate_login_donor_form()
{
	var errFlag = false;
	if( $.trim( $("#email") .val() ) == "" )
	{
		errFlag = true;
		$("#email") .addClass('is-invalid');
		if( $("#email-error-msg") .length > 0 )
		{
			$('#email-error-msg') .html('Please enter your email.');
		}
		else
		{
			$('<span id="email-error-msg" class="text-danger">Please enter your email.</span>') .insertAfter('.fa-envelope');
		}
	}
	else
	{
		errFlag = false;
		$("#email-error-msg") .remove();
		$("#email") .removeClass('is-invalid');
		
	}
	
	if( $.trim( $("#password") .val() ) == "" )
	{
		errFlag = true;
		$("#password") .addClass('is-invalid');
		if( $("#password-error-msg") .length > 0 )
		{
			$('#password-error-msg') .html('Please enter your password.');
		}
		else
		{
			$('<span id="password-error-msg" class="text-danger">Please enter your password.</span>') .insertAfter('.fa-lock');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#password-error-msg") .remove();
		$("#password") .removeClass('is-invalid');
	}
	
	return errFlag ? false : true;
}	//	End of function validate_login_donor_form()

function validate_donor_change_password_form()
{
	var errFlag = false;
	if( $.trim( $("#old_password") .val() ) == "" && $("#old_password") .length > 0 )
	{
		errFlag = true;
		$("#old_password") .addClass('is-invalid');
		if( $("#old-password-error-msg") .length > 0 )
		{
			$('#old-password-error-msg') .html('Please enter your old password.');
		}
		else
		{
			$('<span id="old-password-error-msg" class="text-danger">Please enter your old password.</span>') .insertAfter('#old_password');
		}
	}
	else
	{
		errFlag = false;
		$("#old-password-error-msg") .remove();
		$("#old_password") .removeClass('is-invalid');
		
	}
	
	if( $.trim( $("#new_password") .val() ) == "" )
	{
		errFlag = true;
		$("#new_password") .addClass('is-invalid');
		if( $("#new-password-error-msg") .length > 0 )
		{
			$('#new-password-error-msg') .html('Please enter your new password.');
		}
		else
		{
			$('<span id="new-password-error-msg" class="text-danger">Please enter your new password.</span>') .insertAfter('#new_password');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#new-password-error-msg") .remove();
		$("#new_password") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#confirm_password") .val() ) == "" )
	{
		errFlag = true;
		$("#confirm_password") .addClass('is-invalid');
		if( $("#confirm-password-error-msg") .length > 0 )
		{
			$('#confirm-password-error-msg') .html('Please re-enter your new password.');
		}
		else
		{
			$('<span id="confirm-password-error-msg" class="text-danger">Please re-enter your new password.</span>') .insertAfter('#confirm_password');
		}
	}
	else
	{
		errFlag = errFlag ? true : false
		$("#confirm-password-error-msg") .remove();
		$("#confirm_password") .removeClass('is-invalid');
	}
	
	if( $.trim( $("#confirm_password") .val() ) != "" && $.trim( $("#new_password") .val() ) != "" && $.trim( $("#new_password") .val() ) != $.trim( $("#confirm_password") .val() )  )
	{
		errFlag = true;
		$("#confirm_password") .addClass('is-invalid');
		if( $("#confirm-password-error-msg") .length > 0 )
		{
			$('#confirm-password-error-msg') .html('Your password doesn\'t match.');
		}
		else
		{
			$('<span id="confirm-password-error-msg" class="text-danger">Your password doesn\'t match.</span>') .insertAfter('#confirm_password');
		}
	}
	else if( $.trim( $("#confirm_password") .val() ) != "" && $.trim( $("#new_password") .val() ) != "" && $.trim( $("#new_password") .val() ) == $.trim( $("#confirm_password") .val() )  )
	{
		errFlag = errFlag ? true : false
		$("#confirm-password-error-msg") .remove();
		$("#confirm_password") .removeClass('is-invalid');
	}
	return errFlag ? false : true;
}	//	End of function validate_donor_change_password_form()

function validate_lost_password_donor_form()
{
	var errFlag = false;
	if( $.trim( $("#email") .val() ) == "" )
	{
		errFlag = true;
		$("#email") .addClass('is-invalid');
		if( $("#email-error-msg") .length > 0 )
		{
			$('#email-error-msg') .html('Please enter your email.');
		}
		else
		{
			$('<span id="email-error-msg" class="text-danger">Please enter your email.</span>') .insertAfter('#email');
		}
	}
	else
	{
		errFlag = false;
		$("#email-error-msg") .remove();
		$("#email") .removeClass('is-invalid');
		
	}
	
	return errFlag ? false : true;
}	//	End of function validate_lost_password_donor_form()