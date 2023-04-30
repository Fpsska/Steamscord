export function generateRandomDate(): string {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    const formattedDate = new Date(timestamp).toLocaleDateString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const outputDate = formattedDate.replace(/,/g, '');

    return outputDate;
}