
function onAnchorClick(event) {
    chrome.tabs.create({
        selected: true,
        url: event.srcElement.href
    });
    return false;
}

document.addEventListener('DOMContentLoaded', function () {
    const rootElement = document.getElementById("root");

    chrome.history.search({
            'text': 'pr0gramm.com'
        },
        function (historyItems) {
            const [latest] = historyItems;
            const visitedAt = new Date(latest.lastVisitTime);
            const element = document.createElement('a');

            element.href = latest.url;
            element.onclick = onAnchorClick;
            element.innerText = visitedAt.toISOString() + " - " + latest.title;

            rootElement.appendChild(element);
        });

});

