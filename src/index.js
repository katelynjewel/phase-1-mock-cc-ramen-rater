
function handleImageClick(ramen) {
    const detailImage = document.querySelector('.detail-image')
    detailImage.src = ramen.image

    const detailName = document.querySelector('.name')
    detailName.textContent = ramen.name

    const detailRestaurant = document.querySelector('.restaurant')
    detailRestaurant.textContent = ramen.restaurant

    const detailRating = document.getElementById('rating-display')
    detailRating.textContent = ramen.rating

    const detailComment = document.getElementById('comment-display')
    detailComment.textContent = ramen.comment
}

function showcaseRamen(ramen) {
    const image = document.createElement('img')
    image.src = ramen.image

    const imagesContainer = document.getElementById('ramen-menu')
    imagesContainer.append(image)

    image.addEventListener('click', (e) => handleImageClick(ramen))
}

function displayRamens(allRamens) {
    allRamens.forEach(showcaseRamen)
}

function getRamens() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(displayRamens)
}

function handleFormSubmit(event) {
    event.preventDefault()

    const name = event.target['new-name'].value
    const restaurant = event.target['new-restaurant'].value
    const newRating = event.target['new-rating'].value
    const newComment = event.target['new-comment'].value
    const newImage = event.target['new-image'].value

    const ramenObject = {
        name: name,
        restaurant: restaurant,
        image: newImage,
        comment: newComment,
        rating: newRating
    }

    showcaseRamen(ramenObject)

    event.target.reset()
}

function listenForNewRamen() {
    const form = document.getElementById('new-ramen')
    form.addEventListener('submit', handleFormSubmit)
}

getRamens()
listenForNewRamen()
