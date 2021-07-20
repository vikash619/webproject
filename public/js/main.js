const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event) =>{
    event.preventDefault();
    let city_val = cityName.value;
    

    if(city_val === ""){
        city_name.innerHTML  = "plz write the name before search ";
    }else{

        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=81f601a6bd5e00fea449727dafaed115`;

            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country} `;
            temp.innerHTML = arrData[0].main.temp;
            
            const tempMood = arrData[0].weather[0].main;
            if(tempMood == "Clear")
            {
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>"
            }
            else if(tempMood == "Clouds")
            {
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color: #f1f2f6;'></i>"
            }
            else if(tempMood == "Rain")
            {
                temp_status.innerHTML = "<i class = 'fas fa-rain' style = 'color: #a4b0be;'></i>"
            }
            else {
                "<i class = 'fas fa-sun' style = 'color: #eccc68;'></i>";
            }



        }catch{
            city_name.style.color = "white";
            city_name.innerHTML  = "plz write the name before search properly ";
        }
    }
}


submitBtn.addEventListener('click', getInfo);