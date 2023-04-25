const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')
//header 
var header = document.querySelector('header');
//console.log(header);

//nav
var nav = document.querySelector('nav');
console.log(nav);
var headerNavLinks = document.querySelectorAll('header nav a');
console.log(headerNavLinks)
headerNavLinks.forEach(link => {
  link.classList.add('italic')
});

//header links
var servicesLink = document.querySelector('header nav a:nth-of-type(1)');
servicesLink.textContent = siteContent["nav"]["nav-item-1"];

var productLink = document.querySelector('header nav a:nth-of-type(2)');
productLink.textContent = siteContent["nav"]["nav-item-2"];

var visionLink = document.querySelector('header nav a:nth-of-type(3)');
visionLink.textContent = siteContent["nav"]["nav-item-3"];

var featuresLink = document.querySelector('header nav a:nth-of-type(4)');
featuresLink.textContent = siteContent["nav"]["nav-item-4"];

var aboutLink = document.querySelector('header nav a:nth-of-type(5)');
aboutLink.textContent = siteContent["nav"]["nav-item-5"];

var contactLink = document.querySelector('header nav a:nth-of-type(6)');
contactLink.textContent = siteContent["nav"]["nav-item-6"];

// logo image
var logoImg = document.querySelector('.logo');
// const logoImgAlt = document.querySelector('.logo');
// logoImgAlt.alt = "Great Idea! Company logo";
logoImg.src = siteContent["images"]["logo-img"];

// cta section
var ctaDiv = document.querySelector('.cta-text');
//console.log(ctaDiv.firstElementChild);
var ctaHeading = ctaDiv.firstElementChild; 
ctaHeading.textContent = siteContent["cta"]["h1"];
//console.log(ctaHeading);
var ctaParagraph = ctaDiv.lastElementChild
ctaParagraph.textContent = siteContent["cta"]["button"];
console.log(ctaParagraph)

// cta image
var ctaImg = document.querySelector('#cta-img')
// const ctaImgAlt = document.querySelector('#cta-img')
// ctaImgAlt = "Image of a code snippet";
ctaImg.src = siteContent["images"]["cta-img"];

// main content
 var topContentDiv = document.querySelector('.top-content')
 //console.log(topContentDiv)
 var textContentDiv1 = topContentDiv.firstElementChild;
 
 //features section
 var featuresTitle = textContentDiv1.firstElementChild;
 featuresTitle.textContent = siteContent["main-content"]["features-h4"]
 var featuresParagraph = featuresTitle.nextElementSibling;
 featuresParagraph.textContent = siteContent["main-content"]["features-content"];
//about section
var textContentDiv2 = topContentDiv.lastElementChild;
var aboutTitle = textContentDiv2.firstElementChild;
aboutTitle.textContent = siteContent["main-content"]["about-h4"];
var aboutParagraph = aboutTitle.nextElementSibling;
aboutParagraph.textContent = siteContent["main-content"]["about-content"];




// middle image
var middleImg = document.querySelector('.middle-img');
middleImg.src = siteContent["images"]["accent-img"];

//contact
var contactSection = document.querySelector(".contact")
console.log(contactSection)
var contactTitle = contactSection.firstElementChild;
contactTitle.textContent = siteContent["contact"]["contact-h4"];
var contactAddress = contactTitle.nextElementSibling;
contactAddress.textContent = siteContent["contact"]["address"];
var contactPhone = contactAddress.nextElementSibling;
contactPhone.textContent = siteContent["contact"]["phone"];
var contactEmail = contactPhone.nextElementSibling;
contactEmail.textContent = siteContent["contact"]["email"];


//footer
var footerNavLink = document.querySelector('footer a');
console.log(footerNavLink);
footerNavLink.textContent = siteContent["footer"]["copyright"];