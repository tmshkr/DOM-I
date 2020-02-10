const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Show Clock",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

document.querySelectorAll("nav a").forEach((el, i) => {
  el.innerText = siteContent.nav[`nav-item-${i + 1}`];
  el.style.color = "green";
});

const cta = document.querySelector(".cta");
cta.querySelector("h1").innerText = siteContent.cta.h1;
cta.querySelector("button").innerText = siteContent.cta.button;
cta.querySelector("img").src = siteContent.cta["img-src"];

const tc = document.querySelectorAll(".top-content .text-content");
tc[0].children[0].innerText = siteContent["main-content"]["features-h4"];
tc[0].children[1].innerText = siteContent["main-content"]["features-content"];
tc[1].children[0].innerText = siteContent["main-content"]["about-h4"];
tc[1].children[1].innerText = siteContent["main-content"]["about-content"];

document.getElementById("middle-img").src =
  siteContent["main-content"]["middle-img-src"];

const bc = document.querySelectorAll(".bottom-content .text-content");
bc[0].children[0].innerText = siteContent["main-content"]["services-h4"];
bc[0].children[1].innerText = siteContent["main-content"]["services-content"];
bc[1].children[0].innerText = siteContent["main-content"]["product-h4"];
bc[1].children[1].innerText = siteContent["main-content"]["product-content"];
bc[2].children[0].innerText = siteContent["main-content"]["vision-h4"];
bc[2].children[1].innerText = siteContent["main-content"]["vision-content"];

const c = document.querySelectorAll(".contact > *");
c[0].innerText = siteContent["contact"]["contact-h4"];
c[1].innerText = siteContent["contact"]["address"];
c[2].innerText = siteContent["contact"]["phone"];
c[3].innerText = siteContent["contact"]["email"];

document.querySelector("footer p").innerText = siteContent.footer.copyright;

const h1 = cta.querySelector("h1");
const button = cta.querySelector("button");
let interval;

button.onclick = startInterval;

function startInterval() {
  h1.innerText = getTime();
  button.innerText = "Stop Clock";
  button.onclick = stopInterval;
  interval = setInterval(() => {
    h1.innerText = getTime();
  }, 1000);
}

function stopInterval() {
  clearInterval(interval);
  button.innerText = "Start Clock";
  button.onclick = startInterval;
}

function getTime() {
  return new Date().toLocaleTimeString();
}

const nav = document.querySelector("nav");
const link1 = document.createElement("a");
const link2 = document.createElement("a");
link1.innerText = "hello";
link1.style.color = "chartreuse";
link2.innerText = "world";
link2.style.color = "skyblue";
nav.prepend(link1);
nav.appendChild(link2);
