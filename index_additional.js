function my_function(n) {
    if (n == 1) {
		return 1;
	} else {
		const result = my_function(n - 1);
		return result + ' ' + n;
	}
}

//Функция my_function использует рекурсию для создания строки,
//содержащей последовательность чисел от 1 до n, разделенных пробелами.