function monthsOld(daysAgo) {
    // daysAgo: number of days ago
    if (typeof daysAgo !== 'number' || isNaN(daysAgo) || daysAgo < 0) return '';
    const years = Math.floor(daysAgo / 360);
    const months = Math.floor((daysAgo % 360) / 30);
    const days = daysAgo % 30;
    if (years > 0) {
        return years === 1 ? '1 year ago' : years + ' years ago';
    } else if (months > 0) {
        return months === 1 ? '1 month ago' : months + ' months ago';
    } else {
        return days <= 1 ? '1 day ago' : days + ' days ago';
    }
}

function viewsCount(views) {
    if (typeof views !== 'number' || isNaN(views) || views < 0) {
        return 'No views •';
    }
    if (views >= 1000000) {
        return (views / 1000000).toFixed(1).replace(/\.0$/, '') + 'M views •';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1).replace(/\.0$/, '') + 'K views •';
    } else {
        return views + ' views •';
    }
}

function createCard(title, channelName, views, date, duration, imgUrl) {
    document.querySelector(".contant-title").innerHTML = title;
    document.querySelector(".chanel-name").innerHTML = channelName;
    document.querySelector(".views").innerHTML = viewsCount(views);
    document.querySelector(".date").innerHTML = monthsOld(date);
    document.querySelector(".time-durition").innerHTML = duration;
    document.querySelector(".banner").src = imgUrl;
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "CodeWithHarry", 158000, 360, "12:00", "https://i.ytimg.com/vi/CO_DAXswOrc/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAbDeaG5nlgOfmj0aGOejvuL6680Q");