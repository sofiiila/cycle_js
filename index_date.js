function testDateTime(a, b) {
    var date1 = new Date(a);
    var date2 = new Date(b);
    if (date1 > date2) {
        return getWeekday(date1);
    } else {
        return getWeekday(date2);
    }    
 }
 function getWeekday(date) {
     var days = ["Воскресенье" , "Понедельник" , "Вторник" , "Среда" , "Четверг" , "Пятница" , "Суббота"]
     var dayOfWeek = date.getDay();
     return days[dayOfWeek];
 }

//Функция testDateTime сравнивает две даты и возвращает название дня недели для более поздней из них.
//Функция getWeekday используется для получения названия дня недели для заданной даты.