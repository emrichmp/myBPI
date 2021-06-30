import { useEffect } from 'react';
//import CurrentDisplay from './CurrentDisplay';

function Current() {
    useEffect( () => {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => console.log(json))
    })
    // return <CurrentDisplay data={json} />
    return null
}

export default Current;