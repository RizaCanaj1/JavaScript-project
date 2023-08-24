var weather_api = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
        q: location,
        days: '8'
    },
    headers: {
        'X-RapidAPI-Key': '9001241e1cmshb1871ccc9fb1f5ep1c3b52jsnb9431b8468b9',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
}
if(localStorage.getItem('Load Income')!='Saved News'){
  var news_api = {
    method: 'GET',
    url: 'https://weather338.p.rapidapi.com/news/list',
    params: {
      offset: '0',
      limit: '10'
    },
    headers: {
      'X-RapidAPI-Key': 'd2da10d6edmsh070633f4212f768p118215jsn10fc561060f9',
      'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
    }
}
}
