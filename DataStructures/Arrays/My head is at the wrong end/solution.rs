pub fn fix_the_meerkat<T, U, V>((tail, body, head): (T, U, V)) -> (V, U, T) {
	(head, body, tail)
}