function mostWordsFound(sentences) {
    let maxWords = 0;

    for (const sentence of sentences) {
        const wordCount = sentence.split(" ").length;
        if (wordCount > maxWords) maxWords = wordCount;
    }

    return maxWords;
}
