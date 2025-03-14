function capitalizeTitle(title: string): string {
    const words: string[] = title.split(' ');
    const result: string[] = [];

    for (let word of words) {
        word = word.toLowerCase();

        if (word.length > 2) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        result.push(word);
    }

    return result.join(' ');
};