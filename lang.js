// Загружаем язык из localStorage или ставим русский только один раз
function loadLang() {
    const saved = localStorage.getItem("lang");
    if (saved) {
        setLang(saved, false); // НЕ сохраняем снова
    } else {
        setLang("ru"); // первый заход на сайт
    }
}

function setLang(lang, save = true) {
    if (save) {
        localStorage.setItem("lang", lang);
    }
    
    document.documentElement.lang = lang;

    // перевод текста с помощью data-ru и data-en
    document.querySelectorAll("[data-ru]").forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    
}

// При загрузке страницы восстанавливаем язык
loadLang();
