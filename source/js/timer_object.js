/* *
 * Author: Donald Wolfson, Justin Lee, Enrique Gan
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/04/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/12
 * */

 // TODO:
class Timer {
    /* *
     * Constructor for the timer object.
     * @input minutes: Numerical value of maximum minutes.
     * @input seconds: Numerical value of maximum seconds.
     * @input timerElement: The timer on the document to update time for 
     * */
    constructor(minutes, seconds, timerElement) { 
        //time = new Date();
        this.minutes = minutes;
        this.seconds = seconds;
        this.timerElement = timerElement;
    }

    /* *
     * Starts ticking the timer. Timer cannot be reset to original time after ticking.
     * Note: This doesn't not check system date/time. It ticks at 1 second 
     * intervals, possibly being ahead or behind by negligible amounts.
     * */
    startTimer() {
        return new Promise(resolve => {
            let countdown = setInterval(() => {
                console.log(this.parseMinutes() + ":" + this.parseSeconds());
                if(this.seconds == 0 && this.minutes != 0) {
                    this.minutes --;
                    this.seconds = 60;
                } 
                else if (this.seconds == 0 && this.minutes == 0) {
                    resolve();
                    clearInterval(countdown);
                }
                this.seconds --;
            }, 1000);
        });
    }

    /* *
     * Returns a string representing the minutes left with the format "MM".
     * ie: If 25 minuts are left, "25". If 9 minutes are left "09"
     * @returns {String} Minutes Left
     * */
    parseMinutes() {
        if(this.minutes < 10) 
            return "0" + String(this.minutes);
        return String(this.minutes);
    }

    /* *
     * Returns a string representing the seconds left with the format "SS".
     * ie: If 25 seconds are left, "25". If 9 seconds are left "09"
<<<<<<< HEAD
     * @returns {String} Seconds Left
=======
     * @returns {String} Minutes Left
>>>>>>> d971ca95f018edfb065d53d841da4b8f034cac32
     * */
    parseSeconds() {
        if(this.seconds == 60)
            return "00";
        else if(this.seconds < 10)
            return "0" + String(this.seconds);
        return String(this.seconds)
    }
}

async function sessionTest() {
    const timer = new Timer(0, 5, null);
    await timer.startTimer();
    console.log("DONE");    
}

sessionTest();