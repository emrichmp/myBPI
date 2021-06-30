import { useEffect } from 'react';

function Current() {
    useEffect( () => {
            fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => response.json())
            .then(json => console.log(json))
    })
    return null
}

export default Current;