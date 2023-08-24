var saved = {
    title:``,
    description:``,
    img:``,
    body:``,
    last_update:``
}
var saved_array=[]
var removed_article=[]
export function save_news(response,selected){
    if(localStorage.getItem('Saved News'))
    saved_array=JSON.parse(localStorage.getItem('Saved News'))
    if(localStorage.getItem('Load Income')=='Latest News'){
        saved.title=response.data[selected].title
        saved.description=response.data[selected].description
        saved.img=response.data[selected].variants[0]
        saved.body=response.data[selected].body
        saved.last_update=response.data[selected].lastmodifieddate
        saved_array.push(saved)
        localStorage.setItem('Saved News',JSON.stringify(saved_array))
    }
    else{
        alert('You can\'t resave this article again since it\'s removed from the saved storage. Check latest news if that article is still there.')
    }
    
}
export function check_if_already_saved(response,selected){

    if(localStorage.getItem('Saved News')){
        saved_array = JSON.parse(localStorage.getItem('Saved News'))
        if(localStorage.getItem('Load Income')=='Latest News'){
            var search = saved_array.every(s=>s.description!=response.data[selected].description)
            if(!search){
                return true
            }
            else{
                return false
            }
        }
        else{
            return true
        }
        
    }
}
export function unsave_news(response,selected){
    if(localStorage.getItem('Load Income')=='Latest News'){
        saved_array = JSON.parse(localStorage.getItem('Saved News')).filter(s=>s.description!=response.data[selected].description)  
    }
    else{
        saved_array = JSON.parse(localStorage.getItem('Saved News')).filter(s=>s.description!=saved_array[selected].description) 
    }
    localStorage.setItem('Saved News',JSON.stringify(saved_array))
}
export function trash_icon(){
    document.querySelectorAll('i.fa-trash').forEach(
        trash_icons=>trash_icons.addEventListener('click',()=>{
            alert(`This article is now removed`)
            var just_id = trash_icons.getAttribute('id').slice(8)
            saved_array = JSON.parse(localStorage.getItem('Saved News'))
            removed_article=saved_array.splice(just_id,1)
            localStorage.setItem('Saved News',JSON.stringify(saved_array.filter(e=>e!=removed_article)))
            document.querySelector(`.saved_list #${trash_icons.getAttribute('id')}`).remove()
        })
    )
}