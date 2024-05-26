
document.addEventListener('DOMContentLoaded', function () {
    let coll = document.getElementsByClassName('collapsible');
    for (let i = 0; i < coll.length; i++) {
        let arrow = coll[i].getElementsByClassName('arrow')[0];
        arrow.innerHTML = '>'; // Устанавливаем стрелку >

        coll[i].addEventListener('click', function () {
            let allCollapsible = document.getElementsByClassName('collapsible');
            for (let j = 0; j < allCollapsible.length; j++) {
                if (allCollapsible[j] !== this && allCollapsible[j].classList.contains('active')) {
                    allCollapsible[j].classList.remove('active');
                    let arrow = allCollapsible[j].getElementsByClassName('arrow')[0];
                    arrow.innerHTML = '>'; // меняем стрелку на >
                    let content = allCollapsible[j].nextElementSibling;
                    content.style.maxHeight = null;
                }
            }
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.innerHTML = '>'; // меняем стрелку на >
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                arrow.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
            }
        });
    }

    // Открываем первый элемент при загрузке страницы
    if (coll.length > 0) {
        setTimeout(function () {
            coll[0].classList.add('active');
            let content = coll[0].nextElementSibling;
            content.style.maxHeight = content.scrollHeight + 'px';
            let arrow = coll[0].getElementsByClassName('arrow')[0];
            arrow.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
        }, 0);
    }
});



document.addEventListener('DOMContentLoaded', function () {
    let colll = document.getElementsByClassName('collapsible1');
    for (let i = 0; i < colll.length; i++) {
        let arrow1 = colll[i].getElementsByClassName('arrow1')[0];
        arrow1.innerHTML = '<'; // Устанавливаем стрелку <

        colll[i].addEventListener('click', function () {
            let allCollapsible = document.getElementsByClassName('collapsible1');
            for (let j = 0; j < allCollapsible.length; j++) {
                if (allCollapsible[j] !== this && allCollapsible[j].classList.contains('active')) {
                    allCollapsible[j].classList.remove('active');
                    allCollapsible[j].style.color = 'white';
                    let arrow1 = allCollapsible[j].getElementsByClassName('arrow1')[0];
                    arrow1.innerHTML = '<'; // меняем стрелку на <
                    let content = allCollapsible[j].nextElementSibling;
                    content.style.maxHeight = null;
                }
            }
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.style.color = 'white';
                arrow1.innerHTML = '<'; // меняем стрелку на <
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.color = 'red';
                arrow1.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
            }
        });
    }

    // Открываем первый элемент при загрузке страницы
    if (colll.length > 0) {
        colll[0].classList.add('active');
        let content = colll[0].nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
        colll[0].style.color = 'red';
        let arrow1 = colll[0].getElementsByClassName('arrow1')[0];
        arrow1.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
    }
});



document.addEventListener('DOMContentLoaded', function () {
    let collll = document.getElementsByClassName('collapsible2');
    for (let i = 0; i < collll.length; i++) {
        let arrow2 = collll[i].getElementsByClassName('arrow2')[0];
        arrow2.innerHTML = '<'; // Устанавливаем стрелку <

        collll[i].addEventListener('click', function () {
            let allCollapsible = document.getElementsByClassName('collapsible2');
            for (let j = 0; j < allCollapsible.length; j++) {
                if (allCollapsible[j] !== this && allCollapsible[j].classList.contains('active')) {
                    allCollapsible[j].classList.remove('active');
                    allCollapsible[j].style.color = 'black'; // Цвет текста в закрытом состоянии
                    let arrow2 = allCollapsible[j].getElementsByClassName('arrow2')[0];
                    arrow2.innerHTML = '<'; // меняем стрелку на <
                    let content = allCollapsible[j].nextElementSibling;
                    content.style.maxHeight = null;
                }
            }
            this.classList.toggle('active');
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                this.style.color = 'black'; // Цвет текста в закрытом состоянии
                arrow2.innerHTML = '<'; // меняем стрелку на <
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.color = '#999'; // Цвет текста в открытом состоянии
                arrow2.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
            }
        });

        // Изменяем цвет текста при наведении мышки
        collll[i].addEventListener('mouseover', function () {
            if (!this.classList.contains('active')) {
                this.style.color = '#999'; // Цвет текста при наведении мышки
            }
        });

        // Возвращаем цвет текста после того, как мышь покидает элемент
        collll[i].addEventListener('mouseout', function () {
            if (!this.classList.contains('active')) {
                this.style.color = 'black'; // Цвет текста в закрытом состоянии
            }
        });
    }

    // Открываем первый элемент при загрузке страницы
    if (collll.length > 0) {
        let firstElement = collll[0];
        firstElement.classList.add('active');
        let content = firstElement.nextElementSibling;
        content.style.maxHeight = content.scrollHeight + 'px';
        firstElement.style.color = '#999'; // Цвет текста первого элемента в открытом состоянии
        let arrow2 = firstElement.getElementsByClassName('arrow2')[0];
        arrow2.innerHTML = '&#8964;'; // меняем стрелку на стрелку вниз
    }

    // Цвет текста остальных элементов на загрузке страницы
    for (let i = 1; i < collll.length; i++) {
        collll[i].style.color = 'black';
    }
});





// Число ползёт вверх
document.addEventListener('DOMContentLoaded', () => { // Код выполнится после полной загрузки DOM
    let numbers = document.querySelectorAll('.number'); // Находим все элементы с классом 'number'
    let hasAnimated = new Set();  // Множество для отслеживания уже анимированных элементов

    function animateNumbers() {
        numbers.forEach((number) => {
            if (hasAnimated.has(number)) return;// Пропускаем элемент, если он уже анимирован

            let numberTop = number.getBoundingClientRect().top,// Получаем позицию элемента относительно верхней части окна
                start = +number.querySelector('b').innerHTML,// Начальное значение (0) внутри тега <b>
                end = +number.dataset.max;// Конечное значение, указанное в data-max атрибуте

            if (window.scrollY > numberTop - window.innerHeight / 2) { // Проверяем, находится ли элемент в видимой части окна
                hasAnimated.add(number);  // Добавляем элемент в множество, чтобы не анимировать повторно

                let duration = 4000; // 3 секунды в миллисекундах
                let steps = 100; // Количество шагов для всех анимаций
                let stepTime = duration / steps; // Время одного шага
                let increment = end / steps; // Значение, на которое нужно увеличивать на каждом шаге

                let interval = setInterval(() => {
                    start += increment;  // Увеличиваем текущее значение на increment
                    if (start >= end) {
                        start = end;  // Устанавливаем текущее значение в конечное, если оно достигнуто
                        clearInterval(interval);  // Останавливаем интервал
                    }
                    number.querySelector('b').innerHTML = Math.floor(start); // Обновляем отображаемое значение, округляя до целого
                }, stepTime);
            }
        });
    }

    window.addEventListener('scroll', animateNumbers); // Добавляем обработчик события scroll для анимации чисел
});

// Число ползёт вверх



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('feedbackForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Добавляем обработчик события клика на кнопку закрытия модального окна
        var closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const textBlock = document.getElementById('textBlock');
    const texts = textBlock.querySelectorAll('.text');
    let options = {
        root: null, // Область просмотра - окно браузера
        rootMargin: '0px',
        threshold: 0.5 // 50% элемента должно быть видно
    };

    function callback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let delay = 0;
                texts.forEach((text, index) => {
                    setTimeout(() => {
                        text.classList.add('visible');
                    }, delay);
                    delay += 200; // задержка 1 секунда между строками
                });
                observer.unobserve(entry.target); // перестать наблюдать после появления текста
            }
        });
    }

    let observer = new IntersectionObserver(callback, options);
    observer.observe(textBlock);
});



// Модальное окноМодальное окноМодальное окноМодальное окноМодальное окноМодальное окноМодальное окно
// Открыть модальное окно
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".open-modal-btn").forEach(button => {
        button.addEventListener("click", function (e) {
            e.preventDefault();
            document.getElementById("my-modal").classList.add("open");
        });
    });

    // Закрыть модальное окно
    document.getElementById("close-my-modal-btn").addEventListener("click", function () {
        document.getElementById("my-modal").classList.remove("open")
    })

    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            document.getElementById("my-modal").classList.remove("open")
        }
    });

    // Закрыть модальное окно при клике вне его
    document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
        event._isClickWithInModal = true;
    });
    document.getElementById("my-modal").addEventListener('click', event => {
        if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
    });
    // Обработчик отправки формы
    document.getElementById("registration-form").addEventListener("submit", function (e) {
        e.preventDefault(); // Предотвращение стандартного поведения отправки формы
        document.getElementById("form-container").style.display = "none"; // Скрытие формы
        document.getElementById("confirmation-message").style.display = "block"; // Отображение сообщения
    });
});

// Модальное окно Модальное окно Модальное окно Модальное окно Модальное окно Модальное окно




// script.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalSpan = document.getElementsByClassName("close")[0];
    const requestForm = document.getElementById("requestForm");
    const confirmation = document.getElementById("confirmation");

    openModalBtn.onclick = function (event) {
        event.preventDefault();
        modal.style.display = "flex";
    }

    closeModalSpan.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    requestForm.onsubmit = function (event) {
        event.preventDefault();
        modal.style.display = "none";
        confirmation.style.display = "flex";
        setTimeout(() => {
            confirmation.style.display = "none";
        }, 5000); // Убирает сообщение через 5 секунд
    }
});






// script.js для появления текста в услугах
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.element');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});



// ------------------------------------------------------------------

// script.js для появления текста в услугах
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.element1');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});






