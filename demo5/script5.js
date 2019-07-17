$(() => {

  const freeKitten = (event) => {
    console.log(event.target)
    const theCatLi = $(event.target).parent()
    theCatLi.remove()
  }
  
  const catListUl = $('#cat-list')

  const cats = [
    {
      name: 'Marbles',
      dimension: 200
    },
    {
      name: 'Peanut',
      dimension: 230
    },
    {
      name: 'Pita',
      dimension: 280
    },
    {
      name: 'Felix',
      dimension: 250
    },
  ]
  
  cats.forEach(cat => {
    const catLi = $('<li>')
    catLi.html(`
      <p>${cat.name}</p>
      <img src=https://placekitten.com/${cat.dimension} />
    `)

    const freeButton = $('<button>')
    freeButton.click(freeKitten)
    freeButton.html('Adopt!')

    catLi.append(freeButton)

    catListUl.append(catLi)
  })
  
  const form = document.querySelector('#new-cat-form')
  
  form.onsubmit = function (event) {
  
    let catName = document.querySelector('input[name=name]').value
    let catDim = document.querySelector('input[name=dimension]').value
  
    event.preventDefault()
  
    const catLi = $('<li>')

    catLi.html(`
      <p>${catName}</p>
      <img src=https://placekitten.com/${catDim} />
    `)

    const freeButton = $('<button>')
    freeButton.html('Adopt!')
    freeButton.click(freeKitten)
    catLi.append(freeButton)


    catListUl.prepend(catLi)
  }
  
  $('h1').click(() => {
    console.log('meow')
  })

  
})