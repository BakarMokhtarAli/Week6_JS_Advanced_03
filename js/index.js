const siteContent = {
    "nav": {
      "nav-item-1": "Services",
      "nav-item-2": "Product",
      "nav-item-3": "Vision",
      "nav-item-4": "Features",
      "nav-item-5": "About",
      "nav-item-6": "Contact",
      "img-src": "img/logo.png"
    },
    "cta": {
      "h1": "DOM Is Awesome",
      "button": "Get Started",
      "img-src": "img/header-img.png"
    },
    "main-content": {
      "features-h4":"Features",
      "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "about-h4":"About",
      "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "middle-img-src": "img/mid-page-accent.jpg",
      "services-h4":"Services",
      "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "product-h4":"Product",
      "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
      "vision-h4":"Vision",
      "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
      "contact-h4" : "Contact",
      "address" : "123 Way 456 Street Somewhere, USA",
      "phone" : "1 (888) 888-8888",
      "email" : "sales@greatidea.io",
    },
    "footer": {
      "copyright" : "Copyright Great Idea! 2018"
    },
  };
  
  // Example: Update the img src for the logo
  let logo = document.getElementById("logo-img");
  logo.setAttribute('src', siteContent["nav"]["img-src"])


  const header = document.querySelector('header')
header.style.display = 'flex'

const links = document.querySelectorAll('a')
links[0].textContent = siteContent['nav']['nav-item-1']
links[1].textContent = siteContent['nav']['nav-item-2']
links[2].textContent = siteContent['nav']['nav-item-3']
links[3].textContent = siteContent['nav']['nav-item-4']
links[4].textContent = siteContent['nav']['nav-item-5']
links[5].textContent = siteContent['nav']['nav-item-6']

links.forEach(function(item){
  item.addEventListener('click', (event) =>{
    event.target.style.color = 'red'
  })
})
links.forEach(function(item){
  item.addEventListener('mouseleave', (event) =>{
    event.target.style.color = 'black'
  })
})

const section = document.querySelector('section h1')

const btnSection = document.querySelector('section button')

const sectionImage = document.querySelector('#cta-img')

section.textContent = siteContent['cta']['h1']
btnSection.textContent = siteContent['cta']['button']

btnSection.addEventListener('click',()=>{
  btnSection.style.transform="scale(1.5)"
})
btnSection.addEventListener('dblclick',()=>{
  btnSection.style.transform="scale(1)"
})


sectionImage.src = siteContent['cta']['img-src']
sectionImage.addEventListener('mouseover',()=>{
  sectionImage.style.transform = 'scale(1.2)'
  sectionImage.style.transition = 'all 0.3s'
})
sectionImage.addEventListener('mouseleave',()=>{
  sectionImage.style.transform = 'scale(1)'
})

const h4contents = document.querySelectorAll(".text-content h4")
const pcontents = document.querySelectorAll(".text-content p")
h4contents[0].textContent = siteContent['main-content']['features-h4']
pcontents[0].textContent = siteContent['main-content']['features-content']

h4contents[1].textContent = siteContent['main-content']['about-h4']
pcontents[1].textContent = siteContent['main-content']['about-content']

const middleImg = document.querySelector('#middle-img')
middleImg.src = siteContent['main-content']['middle-img-src']

h4contents[2].textContent = siteContent['main-content']['services-h4']
pcontents[2].textContent = siteContent['main-content']['services-content']

h4contents[3].textContent = siteContent['main-content']['product-h4']
pcontents[3].textContent = siteContent['main-content']['product-content']

h4contents[4].textContent = siteContent['main-content']['vission-h4']
pcontents[4].textContent = siteContent['main-content']['vision-content']

const H4contact = document.querySelector('.contact h4')
const pContact = document.querySelectorAll('.contact p')

H4contact.textContent = siteContent['contact']['contact-h4']

pContact[0].textContent = siteContent['contact']['address']
pContact[1].textContent = siteContent['contact']['phone']
pContact[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']

footer.addEventListener('keydown',function(e){
  e.target.style.backgroundColor ='red'
})

window.addEventListener('resize',()=>{
  document.body.style.backgroundColor = '#eee'
})

window.addEventListener('keydown',(e)=>{
  if(e.altKey){
    document.body.style.color='red'
  }
})



