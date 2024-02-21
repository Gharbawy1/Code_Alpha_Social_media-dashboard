
const toggleBtn = document.querySelector('.toggler-btn');
const root = document.querySelector('html');
const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');

/* my modification start here */
const UsernameOnFacebook = document.getElementById("UserNameFacebook");
const UsernameOnTwitter = document.getElementById("UsernameTwitter");
const UsernameOnInsta = document.getElementById("UsernameInsta");
const UsernameOnYoutube = document.getElementById("UsernameYoutube");
const cardContainerface = document.getElementById('cardContainerface');
const cardContainertw = document.getElementById('cardContainertw');
const cardContainerinsta = document.getElementById('cardContainerinsta');
const cardContaineryoutb = document.getElementById('cardContaineryoutb');


let Jsonfile = "data\\Users.json";

let Users = [];


document.addEventListener("DOMContentLoaded", () => {
    GetUserDataFromJson()
        .then(data => {
            Users = data;
            UpdatUserData(Users);
        });

    

})

async function GetUserDataFromJson() {
    const response = await fetch(Jsonfile);
    return await response.json();
}
// update followers and overveiw data 
function UpdateUserFacebookData(Index) {
    UsernameOnFacebook.innerHTML = `<img src="imgs/icon-facebook.svg"
    alt="facebook-icon"> ${Users[Index].FacebookUserName}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    cardBody.innerHTML = `${Users[Index].Facebook.Followers}<span>Followers</span>`;
    cardContainerface.appendChild(cardBody);

    const pagevewis = document.getElementById("face-ovr-vw-p");
    pagevewis.innerHTML = Users[Index].Facebook.PageViews;

    const likes = document.getElementById("face-ovr-vw-l");
    likes.innerHTML = Users[Index].Facebook.Likes;

    const increment = document.createElement('div');
    increment.className = 'card__increment inc';
    increment.innerHTML = `<img src="imgs/icon-up.svg" alt="icon-up">${Users[Index].Facebook.upRate} today`;
    cardContainerface.appendChild(increment);

}

function UpdateUserTwitterData(Index) {
    UsernameOnTwitter.innerHTML = `<img src="imgs/icon-twitter.svg"
    alt="twitter-icon"> ${Users[Index].TwitterUserName}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    cardBody.innerHTML = `${Users[Index].Twitter.Followers}<span>Followers</span>`;
    cardContainertw.appendChild(cardBody);

    const retweets = document.getElementById("twitter-ovr-vw-ret");
    retweets.innerHTML = Users[Index].Twitter.Retweets;

    const likes = document.getElementById("twitter-ovr-vw-l");
    likes.innerHTML = Users[Index].Twitter.Likes;


    const increment = document.createElement('div');
    increment.className = 'card__increment inc';
    increment.innerHTML = `<img src="imgs/icon-up.svg" alt="icon-up">${Users[Index].Twitter.upRate} today`;
    cardContainertw.appendChild(increment);
}

function UpdateUserInstgramData(Index) {
    UsernameOnInsta.innerHTML = `<img src="imgs/icon-instagram.svg"
    alt="instagram-icon"> ${Users[Index].InstaUserName}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    cardBody.innerHTML = `${Users[Index].Instagram.Followers}<span>Followers</span>`;
    cardContainerinsta.appendChild(cardBody);

    const retweets = document.getElementById("insta-ovr-vw");
    retweets.innerHTML = Users[Index].Instagram.ProfileViews;

    const likes = document.getElementById("twitter-ovr-vw-l");
    likes.innerHTML = Users[Index].Instagram.Likes;

    const increment = document.createElement('div');
    increment.className = 'card__increment inc';
    increment.innerHTML = `<img src="imgs/icon-up.svg" alt="icon-up">${Users[Index].Instagram.upRate} today`;
    cardContainerinsta.appendChild(increment);
}

function UpdateUserYoutubeData(Index) {
    UsernameOnYoutube.innerHTML = `<img src="imgs/icon-youtube.svg"
    alt="youtube-icon"> ${Users[Index].YoutubeUserName}`;
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card__body';
    cardBody.innerHTML = `${Users[Index].Youtube.Subscribers}<span>Followers</span>`;
    cardContaineryoutb.appendChild(cardBody);

    const likes = document.getElementById("youtb-ovr-vw-l");
    likes.innerHTML = Users[Index].Youtube.Likes;

    const tv = document.getElementById("youtb-ovr-vw-tot-v");
    tv.innerHTML = Users[Index].Youtube.TotalViews;

    const increment = document.createElement('div');
    increment.className = 'card__increment inc';
    increment.innerHTML = `<img src="imgs/icon-up.svg" alt="icon-up">${Users[Index].Youtube.upRate} today`;
    cardContaineryoutb.appendChild(increment);

}

function UpdatUserData(Users) {
    var Index = Math.floor(Math.random() * 5); // return random number from 0 5 
    
    UpdateUserFacebookData(Index);
    UpdateUserTwitterData(Index);
    UpdateUserInstgramData(Index);
    UpdateUserYoutubeData(Index);



    

   

}
















let active = true;

let addActive = function () {
    toggleBtn.classList.add('active');
    root.classList.remove('dark-theme');
    root.classList.add('light-theme');
    active = false;
}

let removeActive = function () {
    toggleBtn.classList.remove('active');
    root.classList.remove('light-theme');
    root.classList.add('dark-theme');
    active = true;
}

toggleBtn.addEventListener("click", function () {
    if (active) {
        addActive();
        window.matchMedia('(prefers-color-scheme: light)');
    } else {
        removeActive();
        window.matchMedia('(prefers-color-scheme: dark)');
    }
});

if (prefersLightScheme.matches) {
    addActive();
} else {
    removeActive();
}

