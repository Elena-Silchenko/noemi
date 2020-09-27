document.querySelectorAll(".square-images img").forEach(function (img) {
  img.addEventListener("load", function () {
    if (img.clientWidth > img.clientHeight) {
      img.style.maxHeight = "100%"
    } else {
      img.style.maxWidth = "100%"
    }
  })
})

const gallery = document.querySelector(".bottom-photo-gallery-animated")
let images = gallery.querySelectorAll("div")

images.forEach(function (img) {
  img.style.width = img.clientWidth + "px"
  img.style.position = "absolute"
  img.style.top = 0
  img.style.bottom = 0
})
gallery.style.position = "relative" 

let shift = 0
setInterval(function () {
  requestAnimationFrame(function () { 
    let x = shift
    images.forEach(function (img) {
      img.style.left = x + "px"
      x += img.clientWidth + 10  
    })
    shift--
    
    let img = images [0]
    if (shift < -(img.clientWidth + 10)) { 
      img.remove()
      gallery.appendChild(img)
      images = gallery.querySelectorAll("div")
      shift += img.clientWidth + 10
    }
  })
}, 10)

document.querySelector(".on-top a").addEventListener("click", function (e) { 
  window.scrollTo(0, 0)
  e.preventDefault()
})