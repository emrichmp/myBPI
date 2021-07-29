# myBPI

Link to deployed product: https://my-bpi.herokuapp.com/#/

## DEMO
** disclaimer **
- Loom records with a poor framerate, app does not perform slow. It is just looms framerate that does that.
- Additionally, this was a take home I had to complete for a companies interview process. I really liked how it came out so I wanted to use it as a FrontEnd Project on my portfolio.

I created a quick demo that runs through this project and gives a brief explanation. Click 
[here](https://www.loom.com/share/c486119e977f4d60830dabe66748ce14) for demo video.

## Gallery
Here are some screenshots of the app:
![pic](https://i.ibb.co/st7LFRs/Screen-Shot-2021-07-01-at-11-38-33-PM.png)

![2](https://i.ibb.co/L66bPT1/Screen-Shot-2021-07-01-at-11-39-17-PM.png)

![3](https://i.ibb.co/prHCMmc/Screen-Shot-2021-07-01-at-11-39-36-PM.png)

![4](https://i.ibb.co/qWvM08Y/Screen-Shot-2021-07-01-at-11-39-53-PM.png)

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
    * PointValue.js - Showed data for hovered points
2. Inputs were handled by...
    * EditForm.js - User inputs profile info here
    * Input.js - Let's user choose start and end dates for history data, additionally user can select currency, however custom currency data isn't available from CoinDesk for historical data, only USD.
3. I chose to be creative through my use of CSS styling. I used fonts and color schemes from the "Company" website to make it look like it was a part of "Company". I got creative with the presentation with the table and graphs, As well as the website layout.
4. Refer to Index.js and the src/Profile folder and its components for use of Redux. I used handling the profile data with redux.
5. Re-usable components include...
    * Table.js
    * PointValue.js
    * LineGraphData.js
    * CurrentDisplay.js
    ... All these components are function components and can be referred to as presentational components. They take data passed in as props and can be re-used for different data passed into it.

## Process
Here I'll explain how I broke down the project into parts, the problems I faced and what I would do differently. You can also refer to the file "dev_planning.md" to see how I planned the project and all the tasks I set for myself.
### Breakdown
I broke down this project into these parts...
* Header
    * I wanted this to be a Navbar that had the "Company" logo, home, profile, contact us and powered by coindesk disclaimer.
    * I chose these things as a first step to make it seem like it was incorporated in the "Company" website. The 'contact us' links directly to the "Company" contact page and the links were styled like "Company"'s web page.
* Form
    * I knew I was required to have inputs that influenced the data pulled. I needed these inputs to take in that user data and have it dictate the AJAX request to the API. I decided to go about this with a date selector input and a html form selection input. This would lead to less potential errors because instead of the user having to put in the correct date or currency format, the user can just choose what they want.
    * I also decided to style these in a way that made it look less vanilla and more minimalistic and eye catching. "Company"'s website is very aesthetic and I wanted my frontend to take that same minimal User friendly UI approach.
* Data Display
    * This I ended up breaking up into three parts...
        1. Current Data
        2. Tabular
        3. Graph
    * Current Data - I chose to create this Current Data component because I wanted the user to be greeted with data upfront. Thinking about this from a user story pov, a theoretical user is already navigating to this website for BPI data. It would be nice for some of that data to already load even before putting in a custom request. This is where CurrentDisplay.js comes in. It shows the current value of BPI from CoinDesks current endpoint and shows it in 3 currencies that CoinDesk provides. Even though it wasn't required I thought it would be a good decision to greet a user with data.
    * Tabular - The table was part of the specs for the take home. I decided to style the table this way to follow Vianais purple and white color scheme. In the future I would probably change the design of the table to be a little more eye pleasing. I would like to fix the fact that the table can run down the page with nothing next to it after the graph.
    * Graph - Lastly the Graph I chose was based on a react compatible line graph. I like the way it came out and I think the hover feature is pretty neat for finding data in the graph. With that being said, next time around I would most likely go with another library for visual data. There were a couple futures I wanted to add later on that I found react-line-graph did not support. If I had more time for the take home I would most likely use ChartJS or D3JS to handle this.
* Profile Component
    * I used this profile component to hint at features I would add if this were to be deployed. I would most likely have a login feature and a profile that goes with that. Additionally, the profile components would most likely AJAX call to a backend that held profile data. I also used the profile component as an oppurtunity to impliment redux. I think within the other components Redux would have required more code to be written and overcomplicate things, which is why I elected to use redux here. Profile.js was a nice way to handle state without having to use setState multiple times in the component.

### What I would change and do differently
I am a perfectionist and there are a couple things I would fix.
* Bad requests/inputs - If a user decides to input a future date or chooses a start date that's later than the end date than the fetch() promise returns an error. To handle this I would add an if statement that would handle this case and display an error message for the user to see. However, I do have some bad input handling. If a user clicks the "PULL HISTORY" button without selecting a date, there are defaults set so a bad request isn't sent.
* Styling - I am pretty proud of my styling, however I think next time around I would most likely use a library such as materialUI to make the layout a bit more structured and aesthetic. Additionally for styling, I think I could have done a better job placing items and used flex-box css styling rather than margins to cause less css problems. Lastly I would probably make the table styling more eye appealing given more time.
* Graph - I would like to use a chart library that included more features. More information on the margins would be nice such as date and value markings. To go about this I would most likely use chartJS or D3JS. Additionally I would like to improve the labels for the graph. I think I would spend a lot of time making the graph show more data to make it more useful, however I used the tools I had in the given time.
* Login - If I was given more time I would add a login feature using JWT or sessions for security. However, in order for this to work I'd probably make a rails backend that handled user accounts and sessions. That would take some time to build, but it would make the project deployable with the profile feature.
* Currencies - CoinDesk does not support custom currencies for historical data so if that were to change I would make it so the currency selection was apart of the API query. Also instead of copying the supported currencies object and saving it in Currencies.js, I would most likely pull the supported currencies with a fetch() call and iterate through that object for the selection input. That would be better because if the supported currencies were to change, I would not have to update the object, the component would fetch() that data when mounting instead.

## Tools/Packages Used
* ColorPick Eyedropper chrome extension
* "Company"'s website and chrome developer tools to grab "Company" Logo and font
* Google fonts
* React
* Redux
* CSS
* Pulled supported currencies from - https://api.coindesk.com/v1/bpi/supported-currencies.json
* React-router
* he - library used to convert HTML entity into symbol (for currency symbols)
* React-Line-Graph

## Installation
if you want to experiment with this app or run it locally fork and clone this repo.
1. Run ```npm install``` to install all dependencies.
2. Run ```npm start``` to start server.
3. Navigate to "http://localhost:3000"

## Contact Me!
If this portfolio project interested you and you wanted to reach out to me for anything, you may send me a message on [LinkedIn](https://www.linkedin.com/in/emrich-michael-perrier/). You can also check out my [Medium](https://emrichmp.medium.com/) Blog and [GitHub](https://github.com/emrichmp).

## License
Copyright 2021 Emrich-Michael Perrier

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Link to License: https://opensource.org/licenses/MIT