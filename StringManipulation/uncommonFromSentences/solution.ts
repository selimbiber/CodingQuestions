const uncommonFromSentences = function (s1: string, s2: string): string[] {
    const s1Words = s1.split(" ");
    const s2Words = s2.split(" ");
    const uncommonWords: string[] = [];

    s1Words.forEach((word) => {
        if (s1Words.filter((w) => w === word).length === 1 && !s2Words.includes(word)) {
            uncommonWords.push(word);
        }
    });

    s2Words.forEach((word) => {
        if (s2Words.filter((w) => w === word).length === 1 && !s1Words.includes(word)) {
            uncommonWords.push(word);
        }
    });

    return uncommonWords;
};