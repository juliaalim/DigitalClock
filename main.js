class DigitalClock{
    constructor(element){
        this.element = element;
        console.log(this.element);
    }

    start(){
        this.update();
        
        setInterval(() => {
            this.update();
        }, 500);
    }

    update(){
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const timeFormattted = `${parts.hour}:${minuteFormatted}`;
        const amPm = parts.isAm ? "AM" : "PM";

        this.element.querySelector(".clock-time").textContent = timeFormattted;
        this.element.querySelector(".clock-ampm").textContent = amPm;

    }

    getTimeParts(){
        const now = new Date();


        return {
            hour: now.getHours() % 12 || 12, // now.getHours() give current hour number between 0 and 23
            minute: now.getMinutes(),
            isAm: now.getHours() < 12
        }
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

console.log(clockObject.getTimeParts());

clockObject.start();