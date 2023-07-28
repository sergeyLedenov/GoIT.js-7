//1
const select = document.querySelector("#select");
const res1 = document.querySelector(".res1");

select.addEventListener("change", ()=> {
    res1.textContent = select.value;
});

//2
const week2 = document.querySelector("#week2");
const Bres22 = document.querySelector(".Bres22");
const res22 = document.querySelector(".res22");

const DotW2 = [
    "sunday", "monday", "teusday", "wednesday", "thursday", "friday", "saturday"
];

const massage2 = [
    "sunday - day of the relaxing", "monday - day, when you go in work", "teusday - day, when you put up with work", "wednesday - day, when you understand, what soon will be relax again", "thursday - day, when you begin work not powerfull", "friday - day when you after work relax", "saturday - begin of relaxing"
];

Bres22.addEventListener("click", ()=> {
    switch (week2.value) {
        case DotW2[0]: res22.textContent = massage2[0];
            break; 
        case DotW2[1]: res22.textContent = massage2[1];
            break;
        case DotW2[2]: res22.textContent = massage2[2];
            break;
        case DotW2[3]: res22.textContent = massage2[3];
            break;
        case DotW2[4]: res22.textContent = massage2[4];
            break;
        case DotW2[5]: res22.textContent = massage2[5];
            break;
        case DotW2[6]: res22.textContent = massage2[6];
            break;
        default: res22.textContent = "error";
    }
});

//2.5
const week = document.querySelector("#week");
const Bres2 = document.querySelector(".Bres2");
const res2 = document.querySelector(".res2");

const DotW = {
    eng: ["sunday", "monday", "teusday", "wednesday", "thursday", "friday", "saturday"],
    ua: ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"],
    ru: ["понедельник", "вторник", "среда", "четверг", "пятница", "субота", "воскресенье"]
};

const massage = {
    eng: ["sunday - day of the relaxing", "monday - day, when you go in work", "teusday - day, when you put up with work", "wednesday - day, when you understand, what soon will be relax again", "thursday - day, when you begin work not powerfull", "friday - day when you after work relax", "saturday - begin of relaxing"],
    ua: ["понеділок - день початку роботи", "вівторок - день, коли ти змиряєшься з роботу", "середа - день, коли ти розумієшь, що залишилось не так багато до відпочинку", "четвер - день коли ти працюєшь на повну", "п'ятниця - день, коли ти після роботи відпочиваєшь", "субота - початок відпочинку", "неділя - відпочинок"],
    ru: ["понедельник - день начала работы", "вторник - день, когда ты смиряешься с работой", "среда - день, когда ты понимаешь, что осталось не так много временни до отдыха", "четверг - день, когда ты работаешь на всю", "пятница - день, когда ты после работы отдыхаешь", "субота - начало отдыха", "воскресенье - отдых"]
};

Bres2.addEventListener("click", ()=> {
    for (let i = 0; i < DotW.eng.length; i++) {
        if (week.value === DotW.eng[i]) {
            res2.textContent = massage.eng[i];
        }
    }
    for (let i = 0; i < DotW.ua.length; i++) {
        if (week.value === DotW.ua[i]) {
            res2.textContent = massage.ua[i];
        }
    }
    for (let i = 0; i < DotW.ru.length; i++) {
        if (week.value === DotW.ru[i]) {
            res2.textContent = massage.ru[i];
        }
    }
});

//3
const year = document.querySelector("#year");
const Bres3 = document.querySelector(".Bres3");
const res3 = document.querySelector(".res3");

const MotY = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

Bres3.addEventListener("click", ()=> {
    for (let i = 0; i < MotY.length; i++) {
        if (year.value == MotY[i]) {
            res3.textContent = MotY[i];
        }
    }
});