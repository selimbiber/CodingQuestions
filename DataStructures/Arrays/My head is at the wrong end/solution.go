package kata

func FixTheMeerkat(arr []string) []string {
	n := len(arr)
	res := make([]string, n)

	for i := 0; i < n; i++ {
		res[i] = arr[n-1-i]
	}
	return res
}