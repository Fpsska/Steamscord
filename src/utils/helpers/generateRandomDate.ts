export function generateRandomDate(): string {
    const minDate = new Date('2019-03-31').getTime();
    const maxDate = new Date().getTime();

    const timeDiff = maxDate - minDate;
    const randomTime = Math.random() * timeDiff;
    const randomDate = new Date(minDate + randomTime);

    const formattedDate = new Date(randomDate).toLocaleDateString('en-GB', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });

    const outputDate = formattedDate.replace(/,/g, '');

    return outputDate;
}