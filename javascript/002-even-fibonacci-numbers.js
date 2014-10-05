var sum = 0;

function fib(first, second, limit) {
	if( first < limit ) {
		if( first%2 == 0 ) sum += first;
		fib(second, first+second, limit--);
	}
}

fib(1, 2, 4000000);

console.log(sum);