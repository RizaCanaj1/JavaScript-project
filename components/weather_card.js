export function card(name,temp_c,temp_f,wind_kph,wind_mph,condition,humidity,icon){
    if(name!=undefined){
        return `
        <div id="forecast_${name}">
            <div class="card w_c mx-auto mt-4" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <div style="display:flex;justify-content:space-around">
                    <div>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${temp_c}°C / ${temp_f}°F</h6>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${wind_kph} kph / ${wind_mph} mph</h6>
                    </div>
                    <div>
                        <h6 class="card-subtitle text-body-secondary">Humidity:</h6>
                        <p class="card-text">${humidity}</p>
                    </div>
                        
                    </div>
                    
                    <div style="display:flex;justify-content:space-around;align-items:center">
                        <p class="card-text">${condition}</p>
                        <img title="${condition}" src="${icon}">
                    </div>
                    <i class="fa-solid fa-star" onclick"" id="${name}" ></i>
                    <a class="card-link" id="${name.toLowerCase()}">View More</a>
                </div>
            </div>
        </div>
        `
    }

    
    else{
        return ``
    }
}
export function forecast_card(name,mintemp_c,maxtemp_c,avgtemp_c,mintemp_f,maxtemp_f,avgtemp_f,chances_of_rain,wind_kph,wind_mph,condition,humidity,icon,date){
    if(name!=undefined)
    return `
    <div class="card w_c mx-auto mt-4" style="width: 18rem">
        <div class="card-body">
            <h6 class="card-title">${date}</h6>
            <div style="display:flex;justify-content:space-around">
            <div>
                <p class="card-subtitle mb-2 text-body-secondary">Min: ${mintemp_c}°C / ${mintemp_f}°F</p>
                <p class="card-subtitle mb-2 text-body-secondary">Max: ${maxtemp_c}°C / ${maxtemp_f}°F</p>
                <p class="card-subtitle mb-2 text-body-secondary">Avg: ${avgtemp_c}°C / ${avgtemp_f}°F</p>
                <p class="card-subtitle mb-2 text-body-secondary">${wind_kph} kph / ${wind_mph} mph</p>
                <p class="card-subtitle mb-2 text-body-secondary">${chances_of_rain} mph</p>
            </div>
            <div>
                <h6 class="card-subtitle text-body-secondary">Humidity:</h6>
                <p class="card-text">${humidity}</p>
            </div>
                
            </div>
            
            <div style="display:flex;justify-content:space-around;align-items:center">
                <p class="card-text">${condition}</p>
                <img title="${condition}" src="${icon}">
            </div>
        </div>
    </div>
    `
    else{
        return ``
    }
}