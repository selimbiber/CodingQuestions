export default function getAverage(marks: number[]): number {
    if (marks.length === 0) return 0;

    const sum = marks.reduce((acc, mark) => acc + mark, 0);
    const average = sum / marks.length;

    return Math.floor(average);
}
