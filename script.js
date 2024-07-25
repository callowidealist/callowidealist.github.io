// Utility function to get DOM elements safely
const getDOM = selector => document.querySelector(selector);

// Function to assign values to DOM elements
function assignDOM(dom, value, options = {}) {
  if (!dom) return;

  if (options.isImg) {
    dom.src = value;
  } else if (options.isAdjacent) {
    dom.insertAdjacentHTML('afterbegin', value);
  } else {
    dom.innerHTML = value;
  }
}

// Selecting DOM elements
const dom = {
  main: {
    name: getDOM('#name'),
    mail: getDOM('#mail'),
    role: getDOM('#role'),
    about: getDOM('#about'), // New About Section
    connects: getDOM('#connects'),
    links: getDOM('#links')
  }
};

// Assigning values to the main section
assignDOM(dom.main.name, main.name);
assignDOM(dom.main.mail, main.mail);
assignDOM(dom.main.role, main.role);
assignDOM(dom.main.about, main.about); // About Section
dom.main.mail.href = `mailto:${main.mail}?Subject=Hello%20again`;

// External Links (ICONS)
const connectsDOM = main.connects.map(
    ({ name, iconName, link }) =>
        `<a href="${link}" target="_blank" aria-label="${name}"><ion-icon name="${iconName}" title="${name}"></ion-icon></a>`
).join('\n');
assignDOM(dom.main.connects, connectsDOM);

// Internal Links
const getLinks = links => links.map(({ name, link }) => `<a href="${link}" class="text-pink-500">${name}</a>`).join(' - ');
assignDOM(dom.main.links, getLinks(main.links));

// Updating the document title
document.title = `${main.name} | ${main.role}`;
