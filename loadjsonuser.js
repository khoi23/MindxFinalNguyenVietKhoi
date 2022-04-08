
const userList = document.getElementById('donnors');

eventListeners();

// all event listeners
function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSONuser();
    });
}

function loadJSONuser(){
    fetch('userdonnor.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(user => {
            html += `
            <div class="donnors__box">
                <div class="donnor__img">
                    <img src="${user.imgSrc}" alt="">
                </div>
                <div class="donnor__user">
                    <div class="donnor__name">${user.name}</div>
                    <div class="donnor__money">$${user.money}</div>
                    <div class="donnor__date">${user.date}</div>
                </div>
            </div>
            `;
        });
        userList.innerHTML = html;
    })
    .catch(error => {
        alert(`User live server or local server`);
        //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
    })
}
