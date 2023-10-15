AOS.init();

const bday = new Date("Dec 27, 2023, 21:00:00");
const bdayStamp = bday.getTime();

const countdown = setInterval(function() {
    const actualTime = new Date();
    const actualTimeStamp = actualTime.getTime();

    const bdayTimeLeft = bdayStamp - actualTimeStamp;

    const msDay = 1000 * 60 * 60 * 24;
    const msHour = 1000 * 60 * 60;
    const msMin = 1000 * 60;

    const daysTillbday = Math.floor(bdayTimeLeft / msDay);
    const hrsTillbday = Math.floor((bdayTimeLeft % msDay) / msHour);
    const mntTillbday = Math.floor((bdayTimeLeft % msHour) / msMin);
    const secTillbday = Math.floor((bdayTimeLeft % msMin) / 1000);

    console.log(secTillbday);
    document.getElementById('clock').innerHTML = `${daysTillbday} dias e ${hrsTillbday}:${mntTillbday}:${secTillbday}`
}, 1000);