# Landing Page
In this project, the main aim was to turn the static HTML and CSS skeleton into a dynamic and responsive multi-section page using javascript. 

## JavaScript Implementation

 - First I stored all the current static HTML sections into a variable called sections. This was done using the querySelectorAll, with main then section as the query, which returned a nodeList with these sections. 
 - Then I called the addSection() function, which was the main function to populate the page with as much sections as needed.
 - The addSection() function fetches the Sections from the document using the same querySelectorAll used previously, and fetches the main body from the document
 - It creates a temp section, adds to it an id and data-nav attributes in a similar convention as in the static HTML sections (section number). Then adds a div, h2 and p, which are all appended in a way that results to a similar HTML structure as the statically present ones. Once this is finished, it is finally appended to the main body.
 - I called the addSection() 6 times, and the static sections were already 3, which results to 9 sections in the landing page. However, these are just test values, the document will include any number of section using the addSection() function.
 - After populating the sections, I start populating the navigation bar, which will dynamically include all the sections added to the page.
 - This is done using a loop with the sections.length, which creates a list element for each section, which then will be used to populate the unordered navbar__list. The 'li' element will have the previously set 'data-nav' as its textContent.
 - Also in this forloop, an addEventListener will be added to each element in the list, which will listen for a click in order to scroll for the desired section using the scrollIntoView function.
 - Finally, the active state will be handled using a 'scroll' EventListener which will be added to the window itself. Inside it, a forloop will be done each time a scroll occurs. First, the position of the section gets saved in the variable position using the .getBoundingClientRect(). Then the bottom is checked that it is bigger than 0 (with adjusted -100 to make for the added navbar), this makes sure that the section bottom not above the view screen. Also the position.top+innerHeight should be smaller than the minTop, which is a variable that holds the current smallest top (with the innerHeight adjustment) in order to make sure that the most top section is the one which is highlighted. 
 - Once both those conditions are met, the minTop value is set to the current position.top + innerHeight. Then if this is not the first time, the previous active class (stored in oldActive and oldNav variables) are removed, and the active class is added to the current section with its navElement. 
 - After the forloop is finished, the minTop is reseted (by setting it to a high value of 10000
 
## Other changes
 - Some styling changes were changed, such as the background color was changed to blue and purple. The ".navbar__menu . active" also changed to match the background changes.
 - The navbar__menu ul had display: flex and overflow-x: scroll in order to make it as dynamic as possible for unknown number of sections. 
 - The cursor was made into pointer when hoverred over the ".menu__link".

## How to use

 - Download all the files (either zip or GitHub) and unzip it.
 - Open the html file using a browser. 

 
