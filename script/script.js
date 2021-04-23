if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
 
function ready(){
    var removeButton = document.getElementsByClassName('btnRemove')
 
    for(var i = 0; i < removeButton.length; i++){
        var button = removeButton[i]
        button.addEventListener('click', removeCartItem)
    }
}
 
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    
}