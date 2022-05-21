export function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
        return `${Math.floor(interval)} years`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${Math.floor(interval)} months`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${Math.floor(interval)} days`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)} hours`;
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
}

// The 'timestamp' function parameter is your timestamp passed in milliseconds.
export function timeDifference(timestamp, locale) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const current = Date.now();
    const elapsed = current - timestamp;

    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });

    if (elapsed < msPerMinute) {
        return rtf.format(-Math.floor(elapsed / 1000), 'seconds');
    }

    if (elapsed < msPerHour) {
        return rtf.format(-Math.floor(elapsed / msPerMinute), 'minutes');
    }

    if (elapsed < msPerDay) {
        return rtf.format(-Math.floor(elapsed / msPerHour), 'hours');
    }

    return new Date(timestamp).toLocaleDateString(locale);
}
