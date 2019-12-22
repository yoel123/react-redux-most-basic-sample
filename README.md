this is the most basic example of how to use redux with react.

it's basically a button that can be clicked with a state saved in the
global redux store.

it shows how to use the redux framework in all its stages.

from initialization to production-ready.

this code assumes you are familiar with react and understand the concepts of redux.
it's a simple example perfect for beginners.

-----------------------------
## how to use:

1)clone this repo (or download it)

2)in the project folder run :
```
npm install
```
to install all the dependencies

3)run the server using:
```
npm start
```
----------------------

code structure:

*src/index.js

holds the reducer ( a function named reducer).
creates the store and wraps the app with Provider.

the reducer handles the BUTTON_CLICK action, if the button is clicked it
alternates between clicked and not clicked (basic programming).

*src/App.js

inside yapp you have the ybtm component.

*src/ybtn.js

-first you have the action object

-the onclick that dispatches the action (inside render)

-mapStateToProps maps the global state to the Ybtn props

-```connect(mapStateToProps)(Ybtn); ```is used to bind everything and export it
(via the redux framework).


-------------------
if anything is unclear please contact me:

contact form:

https://programingstuff.wordpress.com/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8/

or(contact form at the bottom):

https://ytutor.wordpress.com/