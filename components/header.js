export function head(){
    if(window.location.pathname!='/myweather.html'){
        localStorage.setItem('MyWeather','')
    }
    if(window.location.pathname!='/news.html' && window.location.pathname!='/saved.html'){
        localStorage.setItem('Load Income','Latest News')
    }
    window.addEventListener('scroll',()=>{
        if(window.scrollY>0){
            document.querySelector('.navbar').classList.toggle("sticky",window.scrollY>5)
        }
    })
    return `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html">WeatherViewer</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link ${window.location.pathname =='/index.html'? 'active' : ''}" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${window.location.pathname =='/myweather.html'? 'active' : ''}" href="myweather.html">MyWeather</a>
                <li class="nav-item">
                <a class="nav-link ${window.location.pathname =='/news.html'? 'active' : ''}" href="news.html">News</a>
                </li>
                </li>
                <li class="nav-item">
                <a class="nav-link ${window.location.pathname =='/favorites.html'? 'active' : ''}" href="favorites.html">Favorites</a>
                </li>
                <li class="nav-item">
                <a class="nav-link ${window.location.pathname =='/saved.html'? 'active' : ''}" href="saved.html">Saved</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    `
}