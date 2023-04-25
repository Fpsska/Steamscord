export function generateRandomDate(): string {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);

    return new Date(timestamp).toLocaleDateString('en-GB');
}