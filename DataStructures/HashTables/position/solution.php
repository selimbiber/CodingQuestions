function position(string $alphabet): string 
{
    $letters = str_split('abcdefghijklmnopqrstuvwxyz');
    $lettersMap = [];
    
    $index = 1;
    foreach ($letters as $letter) {
      $lettersMap[$letter] = $index;
      $index++;
    }
    
    return 'Position of alphabet: ' . $lettersMap[$alphabet];
}