pub fn array_plus_array(arr1: &[i32], arr2: &[i32]) -> i32 {
    arr1.iter().chain(arr2.iter()).copied().sum()
}
