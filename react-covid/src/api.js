const path = 'http://coronavirus-19-api.herokuapp.com/countries'

const headres = {
    method: 'get',
    mode: 'cors',
    cache: 'default'
}

function getCountry(country) {
    return fetch('${path}/${country}', headers)
    .then((response) => response.json())
}

export default {
    getCountry
}