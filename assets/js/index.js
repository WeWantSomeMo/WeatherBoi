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
  
        $('form').on('submit', function(e){
        e.preventDefault();
        fetch(
            'https://api.openweathermap.org/data/2.5/forecast?appid=' + APIkey + '&q=' + location.value + '&units=imperial'
        ) .then(response => response.json())
            .then(data =>{
                    
                $('#day1min').append("Min: ", data.list[0].main.temp_min)
                $('#day1max').append("Max: ", data.list[0].main.temp_max)
                $('#wind1').append("Wind Speed: ", data.list[0].wind.speed)
                $('#humidity1').append("Humidity: ", data.list[0].main.humidity)

                let pngUrl  = 'http://openweathermap.org/img/wn/'
                $('#img1').attr('src', `${pngUrl}${data.list[0].weather[0].icon}.png`);


                var iconcode = data.list[0].weather[0].icon;
                var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                $('#img1').attr('src', iconurl);

                $('#day2min').append("Min: ", data.list[1].main.temp_min)
                $('#day2max').append("Max: ", data.list[1].main.temp_max)
                $('#wind2').append("Wind Speed: ", data.list[1].wind.speed)
                $('#humidity2').append("Humidity: ", data.list[1].main.humidity)

                $('#img2').attr('src', `${pngUrl}${data.list[1].weather[0].icon}.png`);

                console.log('This is Day 2', data.list[2].main.temp_min)
                console.log(data.list[2].main.temp_max)
                $('#day3min').append("Min: ", data.list[2].main.temp_min)
                $('#day3max').append("Max: ", data.list[2].main.temp_max)
                $('#wind3').append("Wind Speed: ", data.list[2].wind.speed)
                $('#humidity3').append("Humidity: ", data.list[2].main.humidity)

                $('#img3').attr('src', `${pngUrl}${data.list[2].weather[0].icon}.png`);


                $('#day4min').append("Min: ", data.list[3].main.temp_min)
                $('#day4max').append("Max: ", data.list[3].main.temp_max)
                $('#wind4').append("Wind Speed: ", data.list[3].wind.speed)
                $('#humidity4').append("Humidity: ", data.list[3].main.humidity)

                $('#img4').attr('src', `${pngUrl}${data.list[3].weather[0].icon}.png`);

                $('#day5min').append("Min: ", data.list[4].main.temp_min)
                $('#day5max').append("Max: ", data.list[4].main.temp_max)
                $('#humidity5').append("Humidity: ", data.list[4].main.humidity)
                $('#wind5').append("Wind Speed: ", data.list[4].wind.speed)
                $('#img5').attr('src', `${pngUrl}${data.list[4].weather[0].icon}.png`);

                console.log('this is data ln 38',data)

            })
            .catch(err => console.log(err));
        });


})
