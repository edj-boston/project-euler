function fib() {
	var a = 0;
	var b = 1;

	return function() {
		var tot = a + b;
		a = b;
		b = tot;
		return tot;
	}
}

var sum = 0;
var next = fib();

for(var i = 0; i < 4000000; i = next()) {
	if(i%2 == 0) sum += i;
}

console.log(sum);