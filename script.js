/* eslint-disable no-console */
/* eslint-disable no-plusplus */
const hamburgerButton = document.getElementById('menu-btn');

hamburgerButton.addEventListener('click', () => {
  document.getElementById('main').className += ' display-menu';
  document.getElementById('logo').className += ' display-menu';
  document.getElementById('hamburguer').className += ' display-menu';
  document.getElementsByClassName('nav-content')[0].classList.add('display-menu');
  document.getElementsByClassName('nav-items')[0].classList.add('display-menu');
  document.getElementsByClassName('equis')[0].classList.add('display-menu');

  for (let i = 0; i < document.getElementsByClassName('nav-item').length; i++) {
    document.getElementsByClassName('nav-item')[i].classList.add('display-menu');
  }
});

const closeButton = document.getElementsByClassName('equis')[0];

function closeMenu() {
  document.getElementById('main').classList.remove('display-menu');
  document.getElementById('logo').classList.remove('display-menu');
  document.getElementById('hamburguer').classList.remove('display-menu');
  document.getElementsByClassName('nav-content')[0].classList.remove('display-menu');
  document.getElementsByClassName('nav-items')[0].classList.remove('display-menu');
  document.getElementsByClassName('equis')[0].classList.remove('display-menu');

  for (let i = 0; i < document.getElementsByClassName('nav-item').length; i++) {
    document.getElementsByClassName('nav-item')[i].classList.remove('display-menu');
  }
}

closeButton.addEventListener('click', () => {
  closeMenu();
});

const closeMenuElements = document.getElementsByClassName('nav-item');

for (let i = 0; i < closeMenuElements.length; i++) {
  closeMenuElements[i].addEventListener('click', () => {
    closeMenu();
  });
}

/* POP UP WINDOWS */

const projectsData = [
  {
    project_name: 'Tonic',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/desktop-card-1.png',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project1',
    source_link: 'https://www.github.com/rominana/tonic',
  },

  {
    project_name: 'Multi Post Stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/picture4.PNG',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project2',
    source_link: 'https://www.github.com/rominana/multi-post-stories',
  },

  {
    project_name: 'Facebook 360',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/picture1.PNG',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project3',
    source_link: 'https://www.github.com/rominana/facebook360',
  },

  {
    project_name: 'Uber Navigation',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    short_description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    featured_image: 'images/picture2.PNG',
    technologies: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    live_version: 'https://www.portfolio.com/project4',
    source_link: 'https://www.github.com/rominana/uber-navigation',
  },
];

let cardTemplate = '';

for (let i = 0; i < projectsData.length; i++) {
  cardTemplate = `
  <div class="card">
    <img class="card-picture" src="${projectsData[i].featured_image}" alt="work-example"/>
        <div class="card-content">
            <h2 class="card-title">${projectsData[i].project_name}</h2>
                <div class="card-info">
                  <span>CANOPY</span>
                  <span class="punto"></span>
                  <span>Back End Dev</span>
                  <span class="punto"></span>
                  <span>2015</span>
                </div>
                  <p class="card-description">${projectsData[i].short_description}</p>
                <div class="pr-languages">
                      <div class="pr-lang"><span>html</span></div>
                      <div class="pr-lang"><span>css</span></div>
                      <div class="pr-lang"><span>javaScript</span></div>
                </div>    
                <div class="project-button">
                    <button class="btn" type="button" onClick='showPopUp(${i})'> See project</button>
              </div>
        </div>
    </div>
  </div>`;

  document.getElementsByClassName('work-content')[0].innerHTML += cardTemplate;
}

function closePopUp() {
  document.getElementsByTagName('body')[0].classList.remove('pop-up');
  document.getElementsByClassName('work-content')[0].classList.remove('pop-up');
  document.getElementById('pop-up').classList.remove('pop-up');
}

function popUpTechnologies(projectNumber) {
  let codingSkills = '';
  for (let i = 0; i < projectsData[projectNumber].technologies.length; i++) {
    codingSkills += `<div class="pr-lang"><span>${projectsData[projectNumber].technologies[i]}</span></div>`;
  }
  return codingSkills;
}

// eslint-disable-next-line no-unused-vars
function showPopUp(cardNumber) {
  let paragraphDescription = '';

  if (window.screen.width >= 768) {
    paragraphDescription = projectsData[cardNumber].description;
  } else {
    paragraphDescription = projectsData[cardNumber].short_description;
  }

  const codingSkills = popUpTechnologies(cardNumber);

  const popUpHtml = `
<div id="pop-up">
  <div class="pop-bckg">
      <div class="card">
            <div class="card-content">
                <h2 class="card-title">${projectsData[cardNumber].project_name}<i class="fa-solid fa-xmark close-pop-up" ></i></h2>
                    <div class="card-info">
                      <span>CANOPY</span>
                      <span class="punto"></span>
                      <span>Back End Dev</span>
                      <span class="punto"></span>
                      <span>2015</span>
                    </div>
                    <img class="card-picture" src="${projectsData[cardNumber].featured_image}"/>
                    <div id="pop-up-columns">
                        <div id="pop-up-left-column">
                        <p class="card-description">${paragraphDescription}</p>
                        </div>
                        <div id="pop-up-right-column">
                          <div class="pr-languages">
                                ${codingSkills}
                        </div>   
                        <div class="pop-up-buttons">
                        <div class="project-button">
                            <button class="btn" type="button">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                      </div>
                      <div class="project-button">
                        <button class="btn" type="button">See Source <i class="fa-brands fa-github"></i></button>
                      </div>
                    </div>
                </div>
            </div> 
            </div>
        </div>
      </div> 
  </div>`;

  document.getElementById('pop-up-content').innerHTML = popUpHtml;
  document.getElementsByTagName('body')[0].classList.add('pop-up');
  document.getElementsByClassName('work-content')[0].classList.add('pop-up');
  document.getElementById('pop-up').classList.add('pop-up');
  document.getElementsByClassName('close-pop-up')[0].addEventListener('click', () => {
    closePopUp();
  });
}

/* FORM VALIDATION */

document.getElementById('form-submit-button').addEventListener('click', (event) => {
  const email = document.getElementById('mail');
  if (email.checkValidity(/[A-Z]/.test(email))) {
    event.preventDefault();
    email.setCustomValidity('Email must be on lowercase.');
  }
}); 