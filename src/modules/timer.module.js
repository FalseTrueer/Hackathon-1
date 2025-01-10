import { Module } from "../core/module";


export class Timer extends Module{
    constructor(type,text) {
        super(type, text);
        this.isTimerActive = false;
    }

    trigger(event){
        this.initHTML()    

        const timer = document.querySelector('.timer')
        const timerInput =  document.querySelector('.timer__input')

        timer.style.left = `${event.pageX}px`;
        timer.style.top = `${event.pageY}px`;
        timer.classList.add('active')

        timer.addEventListener('submit', (event) => {
            event.preventDefault()

            this.waitToEnd(Number(timerInput.value))
        })
    }

    initHTML(){
        const timerHTML = `
        <form class="timer">
            <input type="number" class="timer__input" placeholder="Введите время в секундах" min="1" required>
            <button type="submit" class="timer__button">Запустить таймер</button>
        </form>`

        document.body.append(new DOMParser().parseFromString(timerHTML, 'text/html').body.firstChild)
    }

    waitToEnd(timeInSeconds){
        if (this.isTimerActive) {
            return;
        }
        this.isTimerActive = true;

        const timer = document.querySelector('.timer')
        const timerInput = document.querySelector('.timer__input')
        const timerButton = document.querySelector('.timer__button')
        let timeLeft = timeInSeconds;
        let countdownDisplay = document.querySelector('.countdown-display')

        timerButton.disabled = true
        countdownDisplay = document.createElement('div');
        countdownDisplay.classList.add('countdown-display');
        timer.appendChild(countdownDisplay);

        const updateCountdown = () => {
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                timer.style.backgroundColor = '#006400'
                countdownDisplay.innerText = "Таймер завершен!";
                setTimeout(() => {
                    countdownDisplay.remove();
                    timerInput.value = ''
                    timer.style.backgroundColor = '#343434'
                    timer.classList.remove('active')
                    timerButton.disabled = false
                    this.isTimerActive = false;
                }, 2000);
            } else {
                countdownDisplay.innerText = `Осталось времени: ${timeLeft} сек`;
                timeLeft--;
            }
        };

        const countdownInterval = setInterval(updateCountdown, 1000);
    }
}   