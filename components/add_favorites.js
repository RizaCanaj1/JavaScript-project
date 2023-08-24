var favorite_location=[]
if(localStorage.getItem("Favorites")!=null){
    favorite_location=localStorage.getItem("Favorites").split(',')
}
function refresh_favorites(){
    setTimeout(()=>{
        var star_icons = document.querySelectorAll('.fa-star')
        for(let star_icon of star_icons){
            var star_color_fixer = favorite_location.every(fav=>fav!==star_icon.getAttribute('id'))
            if(star_color_fixer){
                
                document.querySelector(`#${star_icon.getAttribute('id')}`).style.color = 'rgba(0,0, 0, 0.75)'
            }
            else{
                document.querySelector(`#${star_icon.getAttribute('id')}`).style.color = 'rgba(194, 192, 67, 0.75)'
            }
            star_icon.addEventListener('click', function() {
                if(favorite_location.length==0||localStorage.getItem("Favorites").length==0){
                    add_to_favorites(star_icon)
                }
                else{
                    var favorite = favorite_location.every(fav=>fav!==star_icon.getAttribute('id'))
                    if(favorite){
                        add_to_favorites(star_icon)
                        
                    }
                    else{    
                        remove_from_favorites(star_icon)
                    }
                }
                
            })
        }
    }, 1000)
}
refresh_favorites()
function add_to_favorites(star){
    document.querySelector(`#${star.getAttribute('id')}`).style.color = 'rgba(194, 192, 67, 0.75)'
    favorite_location.push(star.getAttribute('id'))
    localStorage.setItem('Favorites',favorite_location)
    alert(`${star.getAttribute('id')} is now added in your Favorite list`)
}
function remove_from_favorites(star){
    document.querySelector(`#${star.getAttribute('id')}`).style.color = 'rgba(0,0, 0, 0.75)'
    favorite_location = favorite_location.filter(e => e !== star.getAttribute('id'))
    localStorage.setItem('Favorites',favorite_location)
    if(window.location.pathname=='/favorites.html'){
        alert(`${star.getAttribute('id')} is now removed in your Favorite list. You can add it only from main page!`)
        window.location.reload()
    }
    else{
        alert(`${star.getAttribute('id')} is now removed in your Favorite list`)
    }
    
}