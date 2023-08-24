var news_id = 0
var last_viewed_news = []
var go_to_news =''
export async function index_news(){
    
    try {
        const response = await axios.request(news_api)
        for (let element of response.data){
            if(news_id<4){
                if(news_id==1){
                    document.querySelector('.carousel-inner').innerHTML += `
                    <div class="carousel-item active" id="news_id_${news_id}">
                        <img src="${element.variants[0]}" class="pickgradient d-block w-100" alt="${element.title}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${element.title}</h5>
                        </div>
                    </div>`
                }
                else{
                    document.querySelector('.carousel-inner').innerHTML += `
                    <div class="carousel-item" id="news_id_${news_id}">
                        <img src="${element.variants[0]}" class="d-block w-100" alt="${element.title}">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${element.title}</h5>
                        </div>
                    </div>`
                }
            }
            else{
                document.querySelector('.news_cards').innerHTML += `
                <div class="card news_desc" id="news_id_${news_id}"/>
                    <div class="card-body">
                        <h5>${element.title}</h5>
                        <img src="${element.variants[0]}" style="width:100%; margin-top:15px; border-radius: 15px;">
                    </div>
                </div>
                `
            }
            setTimeout(()=>{let hover_carousel = document.querySelector(".carousel-inner .active")
            hover_carousel.addEventListener('mouseover',e=>{
                
            })},1000)
            title_click()
            news_id++
        }
    } catch (error) {
        console.log(error)
    }
    show_last_viewed()
    
}
export async function news_news(){
    if(localStorage.getItem("selected")===null){
        localStorage.setItem("selected", 0)
    }
    if(localStorage.getItem("saved_selected")===null){
        localStorage.setItem("saved_selected", 0)
    }
}
function title_click(){
    var x
    if(window.location.pathname=='/saved.html'){
        x=document.querySelectorAll(`div[id^="savedId_"]`)
        localStorage.setItem('Load Income','Saved News')
    }
    else{
        x=document.querySelectorAll(`div[id^="news_id_"]`)
        
    }
    for(let y of x){
       
        y.querySelector('img').addEventListener('click',e=>{
            var just_id = parseInt(y.getAttribute("id").slice(8))
            if(window.location.pathname=='/saved.html'){localStorage.setItem("saved_selected", just_id)}
            else{localStorage.setItem("selected", just_id) }
            go_to_news = y.getAttribute("id")
            save_to_last_viewed(just_id)
            window.location ='news.html'
        })
        y.querySelector('h5').addEventListener('click',e=>{
            var just_id = parseInt(y.getAttribute("id").slice(8))
            if(window.location.pathname=='/saved.html'){localStorage.setItem("saved_selected", just_id)}
            else{localStorage.setItem("selected", just_id) } 
            go_to_news = y.getAttribute("id")
            save_to_last_viewed(just_id)
            window.location ='news.html'
        })
    }
    
}
function save_to_last_viewed(id){
    if(localStorage.getItem('Last_Viewed')===null){
        last_viewed_news.push(`${id}`)
        localStorage.setItem(`Last_Viewed`,last_viewed_news)
    }
    else{        
        last_viewed_news=localStorage.getItem('Last_Viewed')
        if (last_viewed_news) {
            last_viewed_news = last_viewed_news.split(',')
        } else {
            last_viewed_news = []
        }
        if(last_viewed_news.length<3){
            let checker = last_viewed_news.every(e=>e!=id)
            if(checker){
                last_viewed_news.push(`${id}`)
                localStorage.setItem(`Last_Viewed`,last_viewed_news)
            }
            
        }
        else{
            let checker = last_viewed_news.every(e=>e!=id)
            if(checker){
                last_viewed_news.pop()
                last_viewed_news.unshift(`${id}`)
                localStorage.setItem(`Last_Viewed`,last_viewed_news)
            }
            
        }
    }
}
function show_last_viewed(){
    last_viewed_news=localStorage.getItem('Last_Viewed')
    if (last_viewed_news) {
        last_viewed_news = last_viewed_news.split(',')
    } else {
        last_viewed_news = []
    }
    
    for(let news of last_viewed_news){
        //news==id...
        var get_news=document.querySelector(`#news_id_${news}`)
        document.querySelector('.last_viewed_grid').innerHTML+=`
        <div class="card news_desc" id="news_id_${news}"/>
            <div class="card-body">
                <h5>${get_news.querySelector('h5').innerHTML}</h5>
                <img src="${get_news.querySelector('img').getAttribute('src')}" style="width:100%; margin-top:15px; border-radius: 15px;">
            </div>
        </div>
        `
        title_click()
    }
}
export function saved_news(){
    if(window.location.pathname =='/saved.html'){
        var id_s=0
        const get_saved = JSON.parse(localStorage.getItem('Saved News'))
        get_saved.forEach(news => {
            document.querySelector('.saved_list').innerHTML+=`
            <div class="card news_desc " id="savedId_${id_s}">
                <div class="card-body d-flex flex-column">
                    <h5>${news.title}</h5>
                    <img alt="Image Source" src="${news.img}" style="width:100%; margin-top:15px; border-radius: 15px;">
                    <i class="fa-solid fa-trash mt-4 align-self-center" id="savedId_${id_s}"></i>
                </div>
            </div>
            `
            title_click()
            id_s++
        })
        if(get_saved.length==0){
            document.querySelector('.saved_list').innerHTML=`
            <h4>Your Saved list is empty</h4>`
        }
    }
}
