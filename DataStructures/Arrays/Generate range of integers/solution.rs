pub fn generate_range(min: i32, max: i32, step: i32) -> Vec<i32> {
  let mut result = Vec::new();

  if step <= 0 || min > max {
    return result;
  }

  let mut i = min;

  while i <= max {
    result.push(i);
    
    match i.checked_add(step) {
      Some(next) => i = next,
      None => break,
    }
  }

  result
}