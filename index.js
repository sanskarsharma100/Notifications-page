const markAsRead = document.querySelector('.mark-red-text');
const notifCount = document.querySelector('.notification-count');
const unreadMsgs = document.querySelectorAll('.unread');
const unreadDot = document.querySelectorAll('.unread-dot');
markAsRead.addEventListener('click', () => {
    if(unreadMsgs) {
        for(msg of unreadMsgs) {
            msg.classList.remove('unread');
            const unreadMsgs = document.querySelectorAll('.unread');
            notifCount.innerText = unreadMsgs.length;
        }
    }
})

unreadMsgs.forEach((msgs) => {
    msgs.addEventListener('click', () => {
        msgs.classList.remove('unread');
        const unreadMsgs = document.querySelectorAll('.unread');
        notifCount.innerText = unreadMsgs.length;
    })
})

