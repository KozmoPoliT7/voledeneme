const $_ = (mlivesistem) => document.querySelector(mlivesistem);
const $$_ = (mlivesistem) => document.querySelectorAll(mlivesistem);
let statusBar = function(data) {
    if ($_('.status-bar')) return $_('.status-bar').remove();
    let div = document.createElement('DIV');
    div.classList.add('status-bar');
    div.innerHTML = `<div class="status-${data.status}"><div class="status-title">${data.title}</div><div class="status-text">${data.text}</div></div>`
    return document.body.append(div);
}

function iOS() {
    var iDevices = ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'];
    if (!!navigator.platform) {
        while (iDevices.length) {
            if (navigator.platform === iDevices.pop()) {
                return true;
            }
        }
    }
    return false;
}
let oddsYerlestir = function(el) {
    try {
        $_('.odds-container .list-head > div').textContent = `${el.dataset.name} Maçına Bahis Yap`;
        $_('.odds-container .single-odds.home img').src = el.querySelector('img:first-child').src;
        $_('.odds-container .single-odds.home>div').textContent = el.querySelector('.home').textContent;
        $_('.odds-container .single-odds.away img').src = el.querySelector('img:last-child').src;
        $_('.odds-container .single-odds.away>div').textContent = el.querySelector('.away').textContent;
    } catch (err) {
        console.log(err)
    }
}
if ($_('[data-popup')) {
    let popupOptions = JSON.parse($_('[data-popup]').dataset.popup);
    let popup = localStorage.getItem('popup');
    let date = new Date();
    if (popup != `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`) {
        localStorage.setItem('popup', `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDay()}`);
        let div2 = document.createElement('DIV');
        div2.classList.add('popup-back');
        document.body.prepend(div2);
        let div = document.createElement('DIV');
        div.classList.add('popup-ads');
        div.style.left = `calc(50% - ${popupOptions.width/2}px)`;
        div.style.top = `calc(50% - ${popupOptions.height/2}px)`;
        if (popupOptions.link.length) {
            div.innerHTML = `<a href="${popupOptions.link}" target="_blank"><img src="/file/tanitim/dikkat/${popupOptions.imageUrl}"></a>`
        } else {
            div.innerHTML = `<img src="/file/tanitim/dikkat/${popupOptions.imageUrl}">`
        }
        div.innerHTML += `<div class="popup-close">Kapat</div>`
        document.body.prepend(div);
    }
}
window.addEventListener('click', function(e) {
    if (e.target.closest('.popup-close')) {
        $_('.popup-back').remove();
        return $_('.popup-ads').remove();
    }
    if ($_('[data-popup]') && e.target.closest('.popup-back')) {
        $_('.popup-back').remove();
        return $_('.popup-ads').remove();
    }
});


