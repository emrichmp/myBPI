# Requirements:
* Use https://www.coindesk.com/coindesk-api to
* Display data in both tabular and charts
* Allow user to input profile info, start / end dates and currencies
* Be creative in presentation
* Use Redux
* Organize in re-usable components

## To-Do
[] - Figure out what the "profile info" is going to be
[] - grab Vianai logo and add to public folder
[] - Figure out specific Vianai Colors


## Project Broken Down

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

### Component Breakdown
* reusable function component for the rows in the table - takes in props
* container componenet that holds the table
* form class component that has inputs and handles fetches - might be able to refactor this into 2 comps

### Styling - https://www.vian.ai/ (website)
[] - grab Vianai Logo and add it into app
[] - Use dark purple, grey black and white for color scheme
    * purple - #463463 - rgb(70,52,99)
    * dark purple - #463463 - rgb(36,26,48)
    * grey - #2D2D2D - rgb(45,45,45)
    * white - #F9F5FF - rgb(249,245,255)
[] - add "Powered by CoinDesk" and link to price page - "https://www.coindesk.com/price/bitcoin"

## Notes
* Single Page App
* No login
* Style Vianai
* Going to have to use redux so I'm going to have to use thunk

## Tools
* ColorPick Eyedropper chrome extension
* Vianai's website and chrome developer tools to grab Vianai Logo