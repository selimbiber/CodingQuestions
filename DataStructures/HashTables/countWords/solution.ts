function countWords(words1: string[], words2: string[]): number {
    let counter = 0;

    const words1Map = getFrequencies(words1);
    const words2Map = getFrequencies(words2);

    for (const word of Object.keys(words2Map)) {
        if (words1Map[word] === 1 && words2Map[word] === 1) {
            counter++;
        }
    }

    return counter;
};

function getFrequencies(words: string[]) {
    const map: { [key: string]: number } = {};

    for (const word of words) {
        map[word] = (map[word] || 0) + 1;
    }

    return map;
}