
var count = 1
setTimeout(menubutton1, 500)
setTimeout(menubutton1, 700)
setTimeout(menubutton1, 900)
setTimeout(reset, 2000)

setTimeout(menubutton1, 2500)
setTimeout(menubutton1, 2750)
setTimeout(menubutton1, 3050)

var mousein = false
function menubutton1() {
   if(mousein) return
   document.getElementById('menubutton1' + count++)
      .classList.toggle('hover')
}

function menubutton2() {
   if(mousein) return
   document.getElementById('menubutton2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})