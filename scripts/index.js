function getDegrees(){
    let seconds = (new Date()).getSeconds()
    let minutes = (new Date()).getMinutes()
    let hours = (new Date()).getHours()
    let sd = seconds*6 + 90
    let md = minutes*6 + 90
    let hd = hours*30 + minutes*0.5 + 90
    return [sd, md, hd]
}

window.onload = ()=>{
    let secondHand = document.getElementsByClassName('second-hand')[0]
    let minuteHand = document.getElementsByClassName('minute-hand')[0]
    let hourHand = document.getElementsByClassName('hour-hand')[0]

    let [sd, md, hd] = getDegrees()
    secondHand.style.transform = `rotate(${sd}deg)`
    minuteHand.style.transform = `rotate(${md}deg)`
    hourHand.style.transform = `rotate(${hd}deg)`

    setInterval(()=>{
        let [sd, md, hd] = getDegrees()
        secondHand.style.transform = `rotate(${sd}deg)`
        minuteHand.style.transform = `rotate(${md}deg)`
        hourHand.style.transform = `rotate(${hd}deg)`    
    }, 1000)
}