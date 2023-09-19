//Set Copyright year
const date = new Date()
document.getElementById("copyrightYear").innerHTML = date.getFullYear()

//check Scrollbar
let stt = document.getElementById("scrollToTop")
document.addEventListener("scroll", () => {
    let atTop = document.documentElement.scrollTop === 0
    if(!atTop){
        //Show scroll to top icon
        stt.style.display = "flex"
        stt.addEventListener("click", () => {
            document.documentElement.scrollTop = 0
        })
    } else {
        stt.style.display = "none"
    }
})

//check burger menu click
let burgerMenu = document.getElementById("burger")
let mobileNav = document.getElementById("mobileNav")

burgerMenu.addEventListener("click", () => {
    if(mobileNav.style.display != 'block'){
        mobileNav.style.display = 'block'
    }
})

mobileNav.addEventListener("click", (e) => {
    console.log(e.target)
    let t = e.target
    if(t.id == "mobileNav"){
        mobileNav.style.display = 'none'
    }
})

//slideshow
let galleryItems = document.getElementById("gContent")
let galleryPrev = document.getElementById("gPrev")
let galleryNext = document.getElementById("gNext")
let testimonialItems = document.getElementById("tContent")
let testimonialPrev = document.getElementById("tPrev")
let testimonialNext = document.getElementById("tNext")

function CreateSlideshow(prev, next, content){
    if(content){
        let itemsList = []
        let index = 0
        for(let i = 0; i < content.children.length; i++){
            let item = content.children[i]
            itemsList.push(item.outerHTML)
        }
        content.innerHTML = itemsList[index] ?? ''
        prev.addEventListener("click", () => {
            if(index == 0){
                index = itemsList.length - 1
            } else {
                index--
            }
            content.innerHTML = itemsList[index] ?? ''
        })
        next.addEventListener("click", () => {
            if(index == itemsList.length - 1){
                index = 0
            } else {
                index++
            }
            content.innerHTML = itemsList[index] ?? ''
        })
    }
}

CreateSlideshow(galleryPrev, galleryNext, galleryItems)
CreateSlideshow(testimonialPrev, testimonialNext, testimonialItems)