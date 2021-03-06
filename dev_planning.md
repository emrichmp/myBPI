# Requirements:
* Use https://www.coindesk.com/coindesk-api to
* Display data in both tabular and charts
* Allow user to input profile info, start / end dates and currencies
* Be creative in presentation
* Use Redux
* Organize in re-usable components

## Version 2.0 - To Do's (the tuneup)
[] - Need to clean up file organization (css files and what not)
[] - Perhaps make it less react-y and have less files
[] - Need to just clean it up in general
[] - FIX CSS STYLING (USE FLEXBOX)
[] - Create backend for logins and stuff
[] - Fix the table thing

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
[X] - handle fetch req for history
[X] - Setup table to show json response
[X] - finish CurrentDisplay component
[X] - Blurb comp
[X] - style blurb
[X] - Create table to show data
[X] - css style table
[X] - fix showing data portion
[X] - add white space at the bottom of the page to make it look nice
[X] - start profile component
[X] - figure out how to display data in a graph
[X] - style and place graph correctly
[X] - Write in axis
[X] - get onHover to work
[X] - style hover val
[X] - figure out profile component issue
[X] - setup redux
[X] - set default values of name, email, pn
[X] - edit form for profile
[X] - do profile component and use redux to update the states
[X] - Do README
[X] - Add pictures to README
[X] - Finishing touches to code
[X] - Create Demo
[X] - Link Demo to README

## Reach Goals
[] - figure how to handle bad req
[X] - fix up y and x values


## Project Broken Down

### Header
[X] - Vianai Logo on top left
[X] - Contact Us logo on top right - https://www.vian.ai/contact-us/
[X] - css styling for link and hover
[X] - css styling to have logo in the right spot

### Form
[X] - Inputs
    [X] - profile info?
        [X] - name, email, number
    [X] - start date
    [X] - end date
    [X] - currencies

### Data Display
    [X] - Table
        * columns:

    Charts
        * line graph to show history of data
        * another graph for another thing lol

### Profile Component
[X] - Show name, email, phone number
[X] - Allow User to edit name, email phone number

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
* React-router
* he