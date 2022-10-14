$( document ).ready(function() {
    const weekDays =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    (function checkDay(){
        let todayIndex = new Date().getDay()
        let nextFiveDays;

        $('#day1').append(weekDays[todayIndex])

        if (todayIndex < 3) {
            nextFiveDays = weekDays.slice(todayIndex + 1, todayIndex + 5)
        } else {
            let remainingDaysOfWeek = (weekDays.length -1) - todayIndex
            let newWeek = 4 - remainingDaysOfWeek
            nextFiveDays = weekDays.slice(-remainingDaysOfWeek).concat(weekDays.slice(0, newWeek));
        }
        console.log(nextFiveDays)
        console.log(nextFiveDays[1])

        nextFiveDays.forEach((day, dayIndex) => {
            $(`#day${dayIndex + 2}`).append(day)
        });

    })()

    let location = document.getElementById('searchLocation');
    var APIkey = '6099d9d82937627bc3f02e7188390132'
    // let dataMin = data.list[X].main.temp_min 
    // let dataMax = data.list[X].main.temp_max
    // let dataIcon = data.list[X].weather[0].icon 


        $('form').on('submit', function(e){
        e.preventDefault();
        fetch(
            'https://api.openweathermap.org/data/2.5/forecast?appid=' + APIkey + '&q=' + location.value + '&units=imperial'
        ) .then(response => response.json())
            .then(data =>{
                console.log('This is Day 0', data.list[0].main.temp_min)
                console.log(data.list[0].main.temp_max)
                console.log(data.list[0].weather[0].icon)
                    
                $('#day1min').append("Min: ", data.list[0].main.temp_min)
                $('#day1max').append("Max: ", data.list[0].main.temp_max)
                $('#img1').append("Conditions: ", data.list[X].weather[0].icon)

                console.log('This is Day 1', data.list[1].main.temp_min)
                console.log(data.list[1].main.temp_max)
                console.log(data.list[1].weather[0].icon)
                    // $('#day1').append(weekDays[todayIndex])

                console.log('This is Day 2', data.list[2].main.temp_min)
                console.log(data.list[2].main.temp_max)
                console.log(data.list[2].weather[0].icon)
                    // $('#day1').append(weekDays[todayIndex])

                console.log(' This is day 3', data.list[3].main.temp_min)
                console.log(data.list[3].main.temp_max)
                console.log(data.list[3].weather[0].icon)
                    // $('#day1').append(weekDays[todayIndex])

                console.log('This is day 4', data.list[4].main.temp_min)
                console.log(data.list[4].main.temp_max)
                console.log(data.list[4].weather[0].icon)
                    // $('#day1').append(weekDays[todayIndex])
                // console.log(data.main.list.)
                console.log('this is data ln 38',data)

            })
            .catch(err => console.log(err));
        });

       

// Steps:

// 2: Retrieve temp and attch min value to min value.
// 3: then Max Value
// 4: 

// $(`#day${X}min`)
// $(`#day2min`).append
    





})
