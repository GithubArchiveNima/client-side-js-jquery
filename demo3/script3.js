const catListUl = document.querySelector('#cat-list')

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
  const catLi = document.createElement('li')
  catLi.innerHTML = `
    <p>${cat.name}</p>
    <img src=https://placekitten.com/${cat.dimension} />
  `
  catListUl.append(catLi)
})