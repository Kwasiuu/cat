const img = document.querySelector('.cat-image')
const btn = document.querySelector('button')

const API_LINK = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'
const API_KEY = 'api_key=e43b5062-46d3-4cec-9d09-fdf12067cde5'

const getRandomCat = () => {
    const URL = API_LINK + API_KEY


    axios.get(URL).then(res => {
        const randomImg = res.data[0].url
        img.setAttribute('src', randomImg)
    })
}

getRandomCat()
btn.addEventListener('click', getRandomCat)