var elem = document.querySelectorAll(".elem")

// console.log(elem);

elem.forEach(function(val){
    // console.log(val)
    //  console.log(val.childNodes[3])


    val.addEventListener("mouseenter", function(){
        // console.log("Entered");
        // val.style.backgroundColor = "red"
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", function(){
        // console.log("leved");
        // val.style.backgroundColor = "transparent"
        val.childNodes[3].style.opacity = 0
    })


    val.addEventListener("mousemove", function(dets){
          val.childNodes[3].style.left = dets.x+"px"
        //   val.childNodes[3].style.top = dets.y+"px"
    })
})

// var elemImage = document.querySelector("#elem1 img")

// elem1.addEventListener("mousemove", function(dets){
//     // console.log(dets.x)
//     elemImage.style.left = dets.x+"px"
//     elemImage.style.top = dets.y+"px"

// })


// elem1.addEventListener("mouseenter", function(dets){

//    elemImage.style.opacity = 1

// })

// elem1.addEventListener("mouseleave", function(dets){

//    elemImage.style.opacity = 0

// })
