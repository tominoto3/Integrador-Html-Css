const $body = document.querySelector(`body`);
const $header = document.querySelector(`header`);
const $main = document.querySelector(`main`);
const $footer = document.querySelector(`footer`);
const $espacioBoton = document.querySelector(`.cuadro-tecla`);
const $boton = document.querySelector(`.fa-burger`);

const $cajaProd = document.querySelector(`.Productos`);

const handleColor =()=>{
    if($espacioBoton.classList.contains(`cuadro-tecla`)){
        $espacioBoton.classList.remove(`cuadro-tecla`);
        $espacioBoton.classList.add(`dark-cuadro`);
        $body.classList.add(`dark-body`);
        $header.classList.add(`dark-header`);
        $main.classList.add(`dark-caja`);
        $footer.classList.add(`dark-footer`);
    }
    else{
        if($espacioBoton.classList.contains(`dark-cuadro`)){
        $espacioBoton.classList.remove(`dark-cuadro`);
        $espacioBoton.classList.add(`cuadro-tecla`);
        $body.classList.remove(`dark-body`);
        $header.classList.remove(`dark-header`);
        $main.classList.remove(`dark-caja`);
        $footer.classList.remove(`dark-footer`);
        }
    }   
}

$boton.addEventListener(`click`, handleColor);

const arrProductos =[
    {
        name: `Cheesburger`,
        img:`"./assets/Doblecheddar.jpeg"`,
        price:`6000`,
        description: `Pan de papa,Medallón de 100g. y Doble Cheddar.`,
        id:`1`,
    },
    {
        name: `Sweet Onion`,
        img:`"./assets/sweetOnion.jpg"`,
        price:`6500`,
        description:`Pan de papa,Medallón de 100g, Cebolla Caaramelizada, Bacon y Doble Cheddar.`,
        id:`2`,
    },
    {
        name: `Tradicional`,
        img:`"./assets/Tradicional.jpg"`,
        price:`6500`,
        description:`Pan de Papa,Medallón de 100g, Doble Cheddar, Lechuga, Tomate, Cebolla y Salsa Criolla.`,
        id:`3`,
    },
    {
        name: `Barbacoa`,
        img:`"./assets/Barbacoa.jpg"`,
        price:`6500`,
        description:`Pan de Papa,Medallón de 100g, y Doble Cheddar, Bacon y Barbacoa.`,
        id:`4`,
    }
]

const crearCartas=(arr)=>{
    return arr.map(prod=> {
        return `
        <div class="caja-prod">
                <div class="info">
                    <b>${prod.name}</b>
                    <p>${prod.description}</p>
                    <p>$${prod.price}</p>
                </div>
                <img src=${prod.img} alt=${prod.name}>
            </div>
        `
    })
}

const renderCartas =()=>{
    $cajaProd.innerHTML=(crearCartas(arrProductos)).join(``);
}

const init=()=>{
    renderCartas();
}

init();