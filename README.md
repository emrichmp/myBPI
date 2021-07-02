# CoinDesk BPI Tool!

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