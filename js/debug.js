function MAKE()
{
	console.log(window.AV);
	var test_class = AV.Object.extend('test');
	var test = new test_class();
	test.set('name','Kewth');
	test.set('test_name','LaLaLa');
	test.save({ TTT: 'aaa' }).then(
		function(todo)
		{
			alert('Lean test');
			save(todo.id);
			dealWith(todo);
			alert('Lean test!');
		} ,
		function(error)
		{
			alert('fail');
			dealWith(error)
			alert('fail!');
		} );
	alert('end');
}
function READ()
{
	var query = AV.Query('test');
	query.get('5bb7035ffb4ffe0069b875e2').then(
			function (data)
			{
				alert(data.get('test_name'));
			} ,
			function (err)
			{
				alert('READ fail');
			}
		);
	alert(AV.Object.createWithoutData('test' , '5bb7035ffb4ffe0069b875e2').get('test_name'));
}
function SAVE()
{
	var query = new AV.Query('test');
	query.first().then(
			function (data)
			{
				alert(data.get('test_name'));
				data.set('test_name' , 'fuck');
				data.save(null , { query: new AV.Query('test').equalTo('test' , 'LaLaLa') }).then(
					function (d)
					{
						alert('Y');
					} ,
					function (d)
					{
						alert('N');
					}
				);
			} ,
			function (err)
			{
				alert('VERY FAIL');
			}
		);
}
function debug_test()
{
	alert('start');
	READ();
	SAVE();
}
