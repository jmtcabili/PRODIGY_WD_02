
//code referenced from geeksforgeeks: https://www.geeksforgeeks.org/how-to-create-stopwatch-using-html-css-and-javascript/

document.addEventListener("DOMContentLoaded", function() {
    var start_stop =  document.getElementById("start-stop");
    var reset_lap = document.getElementById("reset-lap");

    var hr = document.getElementById("hour");
    var min = document.getElementById("min");
    var sec = document.getElementById("second");
    var ms = document.getElementById("millisecond");
    var log_container = document.getElementById("log-container");


    var hour = 0; 
    var minute = 0; 
    var second = 0; 
    var millis = 0; 
    var lapNum = 1; 

    
    var isRunning = false; 

    function setTime(hour, minute, second, millis){
        
        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let millisString = millis; 

        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (millis < 10) { 
            millisString = "0" + millisString; 
        }
  
        hr.innerText = hrString; 
        min.innerText = minString; 
        sec.innerText = secString; 
        ms.innerText = millisString; 
    }

    start_stop.addEventListener('click', () =>{
        isRunning = isRunning ? false : true;
        stopWatch();
    }); 

    reset_lap.addEventListener('click', () =>{
        if (isRunning){
            //lap
            currTime = hr.innerText + ":" + min.innerText + ":" + sec.innerText + ":" + ms.innerText;

            let recordDiv = document.createElement("div");
            recordDiv.classList.add("record");
            

            lapDiv = document.createElement("div");
            lapDiv.classList.add("lap");
            lapDiv.innerText = "Lap " + lapNum++ +":"; 

            timeDiv = document.createElement("div");
            timeDiv.classList.add("time");
            timeDiv.innerText = currTime;

            recordDiv.append(lapDiv, timeDiv);

            log_container.append(recordDiv);

        }else{
            //reset
            isRunning = false; 
            hour = 0; 
            minute = 0; 
            second = 0; 
            millis = 0; 
            hr.innerHTML = "00"; 
            min.innerHTML = "00"; 
            sec.innerHTML = "00"; 
            ms.innerHTML = "00";
            log_container.innerHTML = "";
            lapNum = 1; 
        }
    });
    
    function stopWatch() { 
        if (isRunning) { 
            millis+=1; 
      
            if (millis == 100) { 
                second++; 
                millis = 0; 
            } 
      
            if (second == 60) { 
                minute++; 
                second = 0; 
            } 
      
            if (minute == 60) { 
                hour++; 
                minute = 0; 
                second = 0; 
            } 
            setTime(hour, minute, second, millis);
            start_stop.innerText = "Stop";
            reset_lap.innerText = "Lap";
            setTimeout(stopWatch, 10); 
        } else{
            start_stop.innerText = "Start";
            reset_lap.innerText = "Reset";
        }
    }
});
