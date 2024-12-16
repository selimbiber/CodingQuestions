function position(alphabet:string):string {
    const letters: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letterMap: Record<string, number> = letters.reduce(
      (acc: Record<string, number>, letter, index) => {
      acc[letter] = index + 1;
      return acc;
    }, {});
    
    return `Position of alphabet: ${letterMap[alphabet]}`;
  }