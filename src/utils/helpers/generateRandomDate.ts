export function generateRandomDate(): string {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const outputDate = new Date(timestamp).toLocaleDateString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    return outputDate;
}