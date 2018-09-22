var click_g = false;
document.onkeydown=function(event)
{
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(!e)
	{
		return;
	}
	else
	{
		if(e.keyCode==36)
			location.href = '/';
		if(e.keyCode==71)
		{
			if(e.shiftKey)
			{
				location.href = '#bottom';
				click_g = false;
			}
			else if(click_g)
			{
				location.href = '#top';
				click_g = false;
			}
			else
				click_g = true;
		}
		else
			click_g = false;
	}
	For_KeyCode(event);
}; 
