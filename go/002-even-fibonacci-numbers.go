package main

import "fmt"

func fib() func() int64 {
	var a, b int64 = 0, 1

	return func() int64 {
		var tot = a + b
		a = b
		b = tot
		return tot
	}
}

func main() {
	next := fib()
	var i, sum int64 = 1, 0

	for i = 1; i < 4000000; i = next() {
		if i%2 == 0 {
			sum += i
		}
	}

	fmt.Println(sum)
}