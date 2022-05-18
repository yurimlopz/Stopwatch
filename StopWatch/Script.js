var sec = 0
var min = 0
var hr = 0
var interval

function twoDigits(digit){
    if(digit<10){
        return("0"+ digit)

    }else{
        return (digit)
    }

}



function start(){
   interval = setInterval(watch,1)
    
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById("timer").innerText = "00:00:00"

}





function watch(){
    sec++
    /* Se a var sec chegar a 60 min vai acrecentar 1 e sec vai zerar */
    if(sec==60){
        min++
        sec=0
        /* se chegar a 60 min  zera min e a var hr acrecenta +1 */
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById("timer").innerText = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec)

    
    
}