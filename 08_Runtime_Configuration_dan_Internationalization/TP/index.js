const now = new Date();

const formatTime = new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});

console.log(formatTime.format(now));