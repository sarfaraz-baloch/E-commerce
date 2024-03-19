  let galleryFilter = document.querySelector(".gallery-filter")
  let galleryItem = document.querySelectorAll(".gallery-item")

//   console.log( galleryItem)

galleryFilter.addEventListener("click" ,(event)=>{

        if(event.target.classList.contains("filter-item")){
         galleryFilter.querySelector(".active").classList.remove("active")
         let active =  event.target.classList.add("active")
            
            let filtersValue = event.target.getAttribute("data-filter")

            galleryItem.forEach((item)=>{

                if(item.classList.contains(filtersValue) || filtersValue === "all"){
                    item.classList.remove("hide")
                    item.classList.add("show")
                    
                }else{
                    item.classList.remove("show")
                    item.classList.add("hide")
                }
            })
        }
})