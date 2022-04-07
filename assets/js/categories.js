// // get element all required
// const filterItem = document.querySelector(".causes__filter-list");
// const filterProduct = document.querySelectorAll(".product__card");

// window.onload = () => { // once window loaded
//     filterItem.onclick = (selectedItem) => { // when user clicked on filterItem div
//         if (selectedItem.target.classList.contains("causes__filter-item")) { // if user click element has .item class
//             filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in  first item
//             selectedItem.target.classList.add("active") // add that active class on the user selected element or item
//             let filterName = selectedItem.target.getAttribute("data-name"); // getting data-name value of the user selected item and store in a filterName variable
//             // console.log(filterName);
//             filterProduct.forEach((e) => {
//                 let filterProducts = e.getAttribute("data-name"); // getting image data-name value
//                 // console.log(filterImages);
//                 // if user selected item data-name value is equal to image data-name value or user selected item data-name value is equal to "all"
//                 if((filterName == filterProducts) || filterName == "all") {
//                     e.classList.add("show");
//                     e.classList.remove("hide");
//                 } else {
//                     e.classList.add("hide");
//                     e.classList.remove("show");
//                 }
//             })
//         } else {
//             console.log("false");
//         }
//     }
// }

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
    //Button class code
    let causesFilter = document.querySelectorAll(".causes__filter-item");
    causesFilter.forEach((causes) => {
      //check if value equals innerText
      if (value.toUpperCase() == causes.innerText.toUpperCase()) {
        causes.classList.add("active");
      } else {
        causes.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".causes__card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' causes click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
}

window.onload = () => {
    filterProduct("all");
};
  