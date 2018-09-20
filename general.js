function checkform()
{
	var fullname = document.getElementById('fullname').value;
	var phone1 = document.getElementById('phone1').value;
	var phone2 = document.getElementById('phone2').value;
	var phone3 = document.getElementById('phone3').value;
	var email = document.getElementById('email').value;
	
	var form_ok = true;
	
	var name_ok = true;
	if (fullname == "")
	{
		name_ok = false;
	}
	
	var phone_ok = true;
	if (phone1 == "")
	{
		phone_ok = false;
	}
	else
	{
		if (phone1.length != 3)
		{
			phone_ok = false;
		}
		else
		{
			if (isNaN(phone1))
			{
				phone_ok = false;
			}
		}
	}
	if (phone2 == "")
	{
		phone_ok = false;
	}
	else
	{
		if (phone2.length != 3)
		{
			phone_ok = false;
		}
		else
		{
			if (isNaN(phone2))
			{
				phone_ok = false;
			}
		}
	}
	if (phone3 == "")
	{
		phone_ok = false;
	}
	else
	{
		if (phone3.length != 4)
		{
			phone_ok = false;
		}
		else
		{
			if (isNaN(phone3))
			{
				phone_ok = false;
			}
		}
	}
	
	var email_ok = true;
	if (email == "")
	{
		email_ok = false;
	}
	else
	{
		var atpos = email.indexOf('@');
		var dotpos = email.indexOf('.');
		
		if (atpos < 1)
		{
			email_ok = false;
		}
		else
		{
			if (email.length-dotpos < 1)
			{
				email_ok = false;
			}
			else
			{
				if (dotpos-atpos < 2)
				{
					email_ok = false;
				}
			}
		}
	}
	
	form_ok = (name_ok && phone_ok && email_ok);
	
	if (!form_ok)
	{
		if(!name_ok)
		{
			alert("Enter your name");
		}
		else
		{
			if (!phone_ok)
				{	
					alert("Please check your phone number");
				}
				else
				{
					if (!email_ok)
					{
						alert ("Please check your email");
					}
				}
	
		}
	}
	
	return form_ok;
}