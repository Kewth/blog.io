function debug_test()
{
	alert('start');
	AV.init({
		  appId: 'ULc6VQsRiQr4NENpfoJpfd52-gzGzoHsz'
		  appKey: 'iYA2I9QBd6SJ1fwGOQxceyQD'
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
	alert('end');
}
