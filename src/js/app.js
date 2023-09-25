const hamburger = document.querySelector('.hamburger');
const scrollButton = document.querySelector('.scroll');
const sidenav = document.querySelector('.sidenav');
const navbar = document.querySelector('.navbar');
const searchDialog = document.querySelector('.search-dialog');
const navSearch = document.querySelector('#nav-search');
const content = document.getElementById('content')
const card =document.querySelector('.card')

document.addEventListener('DOMContentLoaded', () => {

  hamburger.addEventListener('click', responsiveDesign);


  scrollToTop();
  contentCategory();
});


function responsiveDesign() {
  const width = window.innerWidth;
  const active = 'active';

  if (width > 920) {
    hamburger.classList.toggle(active);
    sidenav.classList.toggle(active);
    hamburger.classList.toggle('toggle');
  } else if (width <= 920) {
    sidenav.style.display = "none";
    hamburger.classList.toggle(active);
    navbar.classList.toggle(active);
    hamburger.classList.toggle('toggle');
  }
}

function scrollToTop() {
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || window.scrollTop;

    if (scrollTop > 20) {
      scrollButton.classList.add('activeScroll');
    } else {
      scrollButton.classList.remove('activeScroll');
    }
  });

  scrollButton.addEventListener('click', () => {
    const scrollToTopDuration = 500;
    const scrollStep = -window.scrollY / (scrollToTopDuration / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  });
}

function searchDialogs() {
  if (searchDialog.style.display === 'none') {
    searchDialog.style.display = "grid"
  } else {
    searchDialog.style.display = "none"
  }
}



class Content {
  constructor(id, ad, link) {
    this.id = id;
    this.ad = ad;
    this.link = link;
  }
}

function contentCategory() {
 function contentCategory() {
  const contents = [
    new Content({ id: 1, ad: "Twitch", link: "https://www.twitch.tv/" }),
    new Content({ id: 2, ad: "Youtube", link: "https://www.youtube.com/watch?v=0uvSVszUfoU" }),
    new Content({ id: 3, ad: "Facebook", link: "https://www.facebook.com/gaming/video/" })
  ];

  // Log the contents to the console
  console.log(contents.forEach(content=>console.log(`content.ad`)));
}

// Call the contentCategory function
contentCategory();

card.innerHTML=`
<h1 class="card-title></h1>

`;
 

}
