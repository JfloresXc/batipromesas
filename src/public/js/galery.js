// Colocar imagenes por componentes
const gridItems = document.querySelector('.grid')
const item = (nameCategory, labels, nameImage) => {
    const element = document.createElement('div')
    element.classList.add('item')
    element.setAttribute('data-category', `${nameCategory}`)
    element.setAttribute('data-labels', `${labels}`)
    element.innerHTML = `
        <div className="item-content">
            <img src="/img/galery/${nameImage}" alt=${nameImage} class="item__image"/>
        </div>
    `
    gridItems.appendChild(element)
}

item('segundo', 'segundo mes jose mary yaritza abel', 'month2-1.jpeg')
item('segundo', 'segundo mes jose mary yaritza abel', 'month2-3.jpg')
item('tercer', 'tercer mes jose mary parque camara', 'month3-3.jpg')
item('cuarto', 'cuarto mes jose mary parque', 'month4-2.jpg')
item('segundo', 'segundo mes jose mary yaritza abel', 'month2-2.jpeg')
item('tercer', 'tercer mes jose mary cielo azul', 'month3-5.jpg')
item('inicios', 'inicios jose mary colegio graduacion', 'friends-1.jpeg')
item('inicios', 'inicios jose mary fourloko', 'friends-3.jpeg')
item('segundo', 'segundo mes jose mary caperusita roja', 'month2-4.jpg')
item('inicios', 'inicios jose mary azul amarillo', 'friends-5.jpeg')
item('inicios', 'inicios jose mary', 'friends-6.jpeg')
item('cuarto', 'cuarto mes jose mary lengua collage', 'month4-1.jpg')
item('inicios', 'inicios jose mary casa valeria', 'friends-8.jpeg')
item('inicios', 'inicios jose mary casa valeria oso', 'friends-11.jpeg')
item('inicios', 'inicios jose mary casa valeria oso', 'friends-12.jpeg')
item('primer', 'primer mes jose mary azul', 'month1-1.jpeg')
item('primer', 'primer mes jose mary borracho', 'month1-2.jpeg')
item('segundo', 'segundo mes jose mary gorra halloween', 'month2-5.jpg')
item('segundo', 'segundo mes jose mary gorra halloween', 'month2-6.jpg')
item('quinto', 'quinto mes jose mary sentados felices pierna', 'month5-1.jpg')
item('segundo', 'segundo mes jose mary risas rien yaritza abel', 'month2-7.jpg')
item('inicios', 'inicios jose mary primer beso', 'friends-4.jpeg')
item('segundo', 'segundo mes jose mary halloween cama mañana', 'month2-8.jpg')
item('inicios', 'inicios jose mary', 'friends-2.jpeg')
item('segundo', 'segundo mes jose mary halloween cama mañana', 'month2-9.jpg')
item('tercer', 'tercer mes jose mary monica prima', 'month3-1.jpg')
item('inicios', 'inicios jose mary', 'friends-9.jpeg')
item('tercer', 'tercer mes jose mary parque', 'month3-2.jpg')
item('inicios', 'inicios jose mary', 'friends-10.jpeg')
item('cuarto', 'cuarto mes jose mary caras bocas grandes collage', 'month4-3.jpg')
item('inicios', 'inicios jose mary', 'friends-7.jpeg')

// Muuri
const grid = new Muuri('.grid', {
    layout: {
        rounding: false
    }
})

window.addEventListener('load', () => {
    grid.refreshItems().layout()
    gridItems.classList.add('grid-active')

    // Filtrar desde la navegacion de meses
    const headerItems = document.querySelectorAll('.header__item')
    headerItems.forEach((headerItem) => {
        headerItem.addEventListener('click', (e) => {
            e.preventDefault()
            headerItems.forEach(element => element.classList.remove('header__item-active'))
            headerItem.classList.add('header__item-active')

            e.target.id === 'todos' ? grid.filter('[data-category]') : grid.filter(`[data-category = ${e.target.id}]`)
        })
    })

    // Filtrar desde la barra de busqueda
    const input = document.querySelector('.header__group-input input')
    input.addEventListener('input', (e) => {
        const {value} = e.target
        grid.filter((item) => {
            return item.getElement().dataset.labels.includes(value)
        })
    })
})