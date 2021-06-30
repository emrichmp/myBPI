# Requirements:
* Use https://www.coindesk.com/coindesk-api to
* Display data in both tabular and charts
* Allow user to input profile info, start / end dates and currencies
* Be creative in presentation
* Use Redux
* Organize in re-usable components

## To-Do
[X] - grab Vianai logo and add to public folder
[X] - Figure out specific Vianai Colors
[X] - Do header
[X] - build currencies object in currencies.js
[X] - Figure out what the "profile info" is going to be
[X] - Style inputs and space them
[X] - RESTRUCTURE STYLING
[X] - Solve bug of calendar collision not working
[X] - button for pulling current data
[X] - pull current data when component mounts and then display it -> used function component for this
[X] - handle fetch request for current
[] - finish CurrentDisplay component
[X] - handle fetch req for history
[] - Setup table to show json response
[] - figure how to handle bad req
[] - css style table
[] - figure out how to display data in a graph
[] - Figure out how to wire frame redux and thunk
[] - start profile component


## Project Broken Down

### Header
[X] - Vianai Logo on top left
[X] - Contact Us logo on top right - https://www.vian.ai/contact-us/
[X] - css styling for link and hover
[X] - css styling to have logo in the right spot

### Form
[] - Inputs
    [] - profile info?
        [] - 
    [] - start date
    [] - end date
    [] - currencies

### Data Display
    Tables
        * columns:

    Charts
        * line graph to show history of data
        * another graph for another thing lol

### Profile Component
[] - Show name, email, phone number
[] - Allow User to edit name, email phone number
[] - display name on main page

### Component Breakdown
* reusable function component for the rows in the table - takes in props
* container componenet that holds the table
* form class component that has inputs and handles fetches - might be able to refactor this into 2 comps

### Styling - https://www.vian.ai/ (website)
[X] - grab Vianai Logo and add it into app
[X] - Use dark purple, grey black and white for color scheme
    * purple - #463463 - rgb(70,52,99)
    * dark purple - #463463 - rgb(36,26,48)
    * grey - #2D2D2D - rgb(45,45,45)
    * white - #F9F5FF - rgb(249,245,255)
[X] - add "Powered by CoinDesk" and link to price page - "https://www.coindesk.com/price/bitcoin"

## Notes
* Single Page App
* No login
* Style Vianai
* Going to have to use redux so I'm going to have to use thunk

## Tools
* ColorPick Eyedropper chrome extension
* Vianai's website and chrome developer tools to grab Vianai Logo
* React
* Redux
* CSS
* pulled supported currencies from - https://api.coindesk.com/v1/bpi/supported-currencies.json