/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
*/


//populates the main body with another section, which is identical to the current static HTML sections 
function addSection() {
    
    let Sections = document.querySelectorAll('main > section');
    let temp = document.createElement('section');

    const mainBody = document.querySelector('main');
    
    temp.id="section"+(Sections.length+1);//id convention similar to the one in HTML
    temp.setAttribute("data-nav", "Section "+(Sections.length+1)); //setting the data-nav which will be the text content of the navigation
    
    let tempDiv = document.createElement('div');
    tempDiv.setAttribute("class", "landing__container");
    temp.appendChild(tempDiv);
    
    let tempH2 = document.createElement('h2');
    tempH2.textContent = "Section "+(Sections.length+1);
    tempDiv.appendChild(tempH2);
    
    
    let tempP = document.createElement('p');
    tempP.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra
    dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus
    imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget
    bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet
    elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo
    nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie
    semper in tellus. Sed congue et odio sed euismod.`;
    tempDiv.appendChild(tempP);
    
    let tempP2 = document.createElement('p');
    tempP2.textContent = `Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel
    luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur
    porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
    
    tempDiv.appendChild(tempP2);    
    mainBody.appendChild(temp);
}




//selects all the section (will return a node list of current statically present sections in HTML)
let sections = document.querySelectorAll('main > section');
console.log(sections);
addSection();
addSection();
addSection();
addSection();
addSection();
addSection();
sections = document.querySelectorAll('main > section'); //updates the values

let navElement = new Array();
let nav = document.querySelector('#navbar__list'); 
let doc = document.createDocumentFragment();

// Build menu 
for (let i = 0; i < sections.length; i++) {
  
    navElement[i] = document.createElement('li'); //creates a list element for each setion
    navElement[i].textContent= sections.item(i).getAttribute("data-nav");
    navElement[i].setAttribute("class", "menu__link");
    
    doc.appendChild(navElement[i]);
    
    // Scroll to section on click
    navElement[i].addEventListener('click', ()=>{
        sections.item(i).scrollIntoView({
            behavior: 'smooth', //smoothly scrolls to the start of section
            block: 'start' 
        })
    });
}
nav.appendChild(doc);//populates the nav bar ul


let oldActive = document.getElementsByClassName('your-active-class');
let oldNav = document.getElementsByClassName('active');
let minTop = 10000;

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', ()=>{

    for (let j = 0; j < sections.length; j++) {
        let position = sections.item(j).getBoundingClientRect();

        //checks if the bottom is not above the viewed screen (with adjusted 100) 
        //and that it is the most upper section using the minTop variable for comparison
        if(position.bottom - 100>= 0  && position.top+innerHeight <= minTop) {
    
            minTop=position.top+window.innerHeight;
            if (oldActive.length !=0)
                oldActive[0].removeAttribute("class"); //removes the previous active (if not the first time)
            

            if (oldNav.length !=0) 
            oldNav[0].setAttribute("class", "menu__link"); //removes the previous active (if not the first time)
            
            // Set sections as active in both the section and navigation bar
            sections.item(j).setAttribute("class", "your-active-class");
            navElement[j].setAttribute("class", "active menu__link");
        }
    }
    minTop = 10000;//reseted after the forloop
});










