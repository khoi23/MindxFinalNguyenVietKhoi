// fetch('causes.json')
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
// })
// .catch(error => {
//     alert(`Faild`);
//     
// })

const causesList = document.querySelector('.causes__gallery');

eventListeners();

// all event listeners
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        filterCauses();
    });
}

function loadJSON(){
    fetch('causes.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(causes => {
            html += `
            <a class="causes__card ${causes.tag}" href="causes-details.html">
                <div class="product__content">
                    <div class="product__tag">${causes.tag}</div>
                    <div class="product__icon">
                        <i class='bx bxs-camera'></i>
                        <i class='bx bxs-video' ></i>
                    </div>
                    <div class="product__img"><img src="${causes.imgSrc}" alt=""></div>
                    <div class="product__main">
                        <h4 class="product__title">
                            ${causes.title}
                        </h4>
                        <span class="product__subtitle">${causes.subtitle} </span>
                    </div>
                    <div class="product__range">
                        <div class="product__prices">
                            <div class="product__progress">
                                <div class="progress__bar" style="width: ${causes.bar}%;">
                                    <div class="progress__count" style="left: ${causes.bar}%;">
                                        <div class="count-text" data-speed="2000" data-stop="${causes.bar}">${causes.bar}%</div>
                                    </div>
                                </div>
                            </div>

                            <div class="product__price">
                                <div class="product__price-raise">
                                    Raise <p class="product__price-raise-text">$${causes.priceRaise}</p>
                                </div>
                                <div class="product__price-goal">
                                    Goal <p class="product__price-goal-text">$${causes.priceGoal}</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </a>            
            `;
        });
        causesList.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}

