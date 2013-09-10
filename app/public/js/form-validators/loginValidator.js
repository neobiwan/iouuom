
function LoginValidator(){

// bind a simple alert window to this controller to display any errors //
	//jQuery.noConflict();
	this.loginErrors = $('.modal-alert');
	//jQuery.noConflict();
	this.loginErrors.modal({ show : false, keyboard : true, backdrop : true});

	this.showLoginError = function(t, m)
	{
		$('.modal-alert .modal-header .modal-title').text(t);
		$('.modal-alert .modal-body p').text(m);
		//this.loginErrors.modal('show');
		$('.modal-alert').modal('show');
		$('.modal-alert button').click(function(){window.location.href = '#/signin';})

	}

}

LoginValidator.prototype.validateForm = function()
{
	if ($('#user-tf').val() == ''){
		this.showLoginError('Whoops!', 'Please enter a valid username');
		return false;
	}	else if ($('#pass-tf').val() == ''){
		this.showLoginError('Whoops!', 'Please enter a valid password');
		return false;
	}	else{
		return true;
	}
}