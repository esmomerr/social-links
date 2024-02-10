let socialLinksData = {
    "img": "../img/omer-esin-avatar.jpg",
    "fullname": "Ömer Esin",
    "location": "Kocaeli/Çayırova",
    "about": "Front-end Developer",
    "links": [
        {
            "github": "https://github.com/esmomerr",
            "frontend-mentor": "https://www.frontendmentor.io/profile/esmomerr",
            "linkedin": "https://www.linkedin.com/in/%C3%B6mer-esim-68921a248/",
            "twitter": "https://twitter.com/omerEsim4",
            "instagram": "https://www.instagram.com/_esnomerr/"
        }
    ]
};

function createSocialLinks(){
    const {img, fullname, location, about, links} = socialLinksData;

    return `
    <div class="container">
        <div class="img">
            <img src="${img}" alt="omer-esin-avatar" class="avatar">
        </div>
        <div class="text">
            <p class="name">${fullname}</p>
        </div>
        <div class="text">
            <p class="text-location">${location}</p>
        </div>
        <div class="text">
            <p class="text-about">${about}</p>
        </div>
        <div class="links">
            <a href="${links[0].github}" class="btns">Github</a>
            <a href="${links[0]['frontend-mentor']}" class="btns">Frontend Mentor</a>
            <a href="${links[0].linkedin}" class="btns">Linkedin</a>
            <a href="${links[0].twitter}" class="btns">Twitter</a>
            <a href="${links[0].instagram}" class="btns">Instagram</a>
        </div>
    </div>`;
}

const socialLinksContainer = document.querySelector('#socialLinksContainer');

socialLinksContainer.innerHTML = createSocialLinks();
