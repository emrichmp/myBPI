# CoinDesk BPI Tool!

## Gallery

## The Task
Create a frontend for the CoinDesk API following these requirements...
1. Use https://www.coindesk.com/coindesk-api to Display data in both tabular and charts
2. Allow user to input profile info, start / end dates and currencies
3. Be creative in presentation
4. Use Redux
5. Organize in re-usable components

## How I met the Requirments
1. fetch() to the endpoint and displayed data using...
    * Inputs.js - pulled data and passed it into other components
    * Table.js - Displayed prop data in table form
    * LineGraphData.js - Displayed data in linegraph
    * PointValue.js - Showed data from hovered points
2. Inputs were handled by...
    * EditForm.js - User inputs profile info here
    * Input.js - Let's user choose start and end dates for history data, additionally user can select currency, however custom currency data isn't available from CoinDesk for historical data, only USD
3. I chose to be creative through my use of CSS styling. I used fonts and color schemes from the Vianai website to make it look like it was a part of Vianai. I got creative with presentation with the table and graphs, As well as the website layout.
4. Refer to Index.js and the src/Profile folder and its components for use of Redux. I used handling the profile data with redux.
5. Re-usable components include...
    * Table.js
    * PointValue.js
    * LineGraphData.js
    * CurrentDisplay.js
    ... All these components are function components and can be referred to as presentational components. They take data passed in as props and can be re-used for different data passed into it.

## Process
I will try my best to explain how I went about the process of breaking this down and addressed the problems I faced.
### Breakdown
I broke down this project into these parts...
* Header
    * I wanted this to be a Navbar that had the Vianai logo, home, profile, contact us and powered by coindesk disclaimer
    * I chose these things as a first step to make it seem like it was incorperated in the Vianai website. The 'contact us' links directly to the Vianai contact page and the links were styled like Vianai's web page.
* Form
    * I knew I was required to have inputs that influenced data pulled. I needed these inputs to take in that user data and have it dictate the AJAX request to the API. I decided to go about this with a date selector input and a html form selection input. This would lead to less potential errors because instead of the user having to put in the correct date or currency format, the user can just choose what they want.
    * I also decided to style these in a way that made it look less vanilla and more minimalistic and eye catching. Vianai's website is very aesthetic and I wanted my frontend to take that same minimal User friendly UI approach.
* Data Display
    * This I ended up breaking up into three parts...
        1. Current Data
        2. Tabular
        3. Graph
    * Current Data - I chose to create this Current Data component because I wanted the user to be greeted with data upfront. Thinking about this from a user story pov, a theoretical user is already navigating to this website for BPI data. It would be nice for some of that data to already load even before putting in a custom request. This is were Current BPI Data comes in. It shows the current value of BPI from CoinDesks current endpoint and shows it in 3 currencies that CoinDesk provides. Even though it wasn't required I thought it would be a good decision to greet a user with data.
    * Tabular - The table was part of the specs for the take home. I decided to style the table this way to follow Vianais purple and white color scheme. In the future I would probably change the design of the table to be a little more eye pleasing.
    * Graph - Lastly the Graph I chose was based on a react compatible line graph. I like the way it came out and I think the hover feature is pretty neat for finding data in the graph. With that being said, next time around I would most likely go with another library for visual data. There were a couple futures I wanted to add later on that I found react-line-graph did not support. If I had more time for the take home I would most likely use ChartJS or D3JS to handle this.
* Profile Component
    * I used this profile component to hint at features I would add if this were to be deployed. I would most likely have a login feature and a profile that goes with that. Additionally, the profile components would most likely AJAX call to a backend that held profile data. I also used the profile component as an oppurtunity to impliment redux. I think within the other components Redux would have required more code to be written and overcomplicate things. Profile was a nice way to handle state without having to use setState multiple times in the component.

## Tools/Packages Used
* ColorPick Eyedropper chrome extension
* Vianai's website and chrome developer tools to grab Vianai Logo and font
* Google fonts
* React
* Redux
* CSS
* pulled supported currencies from - https://api.coindesk.com/v1/bpi/supported-currencies.json
* React-router
* he
* React-Line-Graph

## What I would change and do differently

## Installation

## License