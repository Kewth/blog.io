function debug_test()
{
	alert('start');
	AV.init({
		appId: '{{ site.leancloud.app_id }}' ,
		appKey: '{{ site.leancloud.app_key }}'
	});
	console.log(window.AV);
	var test_class = AV.Object.extend('test');
	var test = new test_class();
	test.set('name','Kewth');
	test.set('test_name','LaLaLa');
	test.save({ TTT: 'aaa' }).then(
		function(todo)
		{
			save(todo.id);
			dealWith(todo);
			alert('Lean test!');
		} ,
		function(error)
		{
			dealWith(error)
		} );
}
