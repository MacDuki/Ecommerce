
// Show info about account and orders. 
const navE  = document.querySelector('.navbar-email');
const desktopM = document.querySelector('.desktop-menu');

navE.addEventListener('click', togglenavE);


function togglenavE () {
  const isProductListClosed = productList.classList.contains ('inactive');
  
  if (!isProductListClosed) {
    productList.classList.add('inactive');
  }
    desktopM.classList.toggle('inactive');
    
}

// Show specific info about orders. 

const productList = document.querySelector('.product-detail');
const car = document.querySelector('.navbar-shopping-cart');

car.addEventListener('click', toggleCarList);

function toggleCarList () {
  const isMobileMenuClosed = mobileMenu.classList.contains ('inactive');
  const isDesktopMClosed = desktopM.classList.contains('inactive');
  if (!isDesktopMClosed) {
    desktopM.classList.add('inactive');
  }

  if (!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  productList.classList.toggle('inactive');
}

// show mobile menu 

const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
  const isProductListClosed = productList.classList.contains ('inactive');

  if (!isProductListClosed) {
    productList.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');

}

// Maquetación autómatica de productos 

  const productsArr = [];

  productsArr.push ({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    data: 'Producto 1',

  });
  productsArr.push ({
    name: 'PC',
    price: 1200,
    image: 'https://sm.pcmag.com/t/pcmag_in/review/z/zotac-gefo/zotac-geforce-gtx-1660-super-twin-fan_e1te.1200.jpg',
    data: 'Producto 2',

  });

  productsArr.push ({
    name: 'Controller',
    price: 100,
    image: 'https://static.techgoing.com/2022/09/Xbox-Elite-Controller-2.2.png',
    data: 'Producto 3',

  });

  productsArr.push ({
    name: 'Cat',
    price: 99999999,
    image: 'https://static.nationalgeographic.es/files/styles/image_3200/public/75552.ngsversion.1422285553360.jpg?w=1600&h=1067',
    data: 'Producto 4',

  });
  const cardsContainer = document.querySelector('.cards-container');
  // product detail
  
  const specificDetail = document.querySelector('.product-detail-secondary');
 

  //styles


function plusOne () {
console.log("lO ESCUCHO")
}


// Obtener el contenedor de las tarjetas

// Función para renderizar los productos
function renderProducts(arr) {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];

    // Crear la tarjeta del producto
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // Crear la imagen del producto
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);

    // Agregar el evento click a la imagen del producto
    imgProduct.addEventListener('click', () => {

      specificDetail.classList.remove('inactive');
      // Crear el detalle del producto
      const productDetail = document.createElement('div');
      productDetail.classList.add('product-detail-close-secondary');
      // productDetail.addEventListener ('click', closeDetailF)

      // Crear la imagen del detalle del producto
      const imgDetail = document.createElement('img');
      imgDetail.setAttribute('src', '/archivos anteriores/icons/icon_close.png');
      imgDetail.setAttribute('alt', 'close');
      // imgDetail.addEventListener ('click', closeDetailF)
      // Crear el contenedor de la información del detalle del producto
      const imgDetailSecond = document.createElement('img');
      imgDetailSecond.setAttribute('src', product.image);
      imgDetailSecond.setAttribute('alt', product.name);

      // Crear el precio del detalle del producto
      const infoSpecific = document.createElement('div');
      infoSpecific.classList.add('product-info-secondary');

      // Crear el nombre del detalle del producto
      const infoSpecificPrice = document.createElement('p');
      infoSpecificPrice.innerText = ('$' + product.price);
      const infoSpecificName = document.createElement('p');
      infoSpecificName.innerText = product.name;
      const infoSpecificData = document.createElement('p');
      infoSpecificData.innerText = product.data;

      // Crear el botón "Agregar al carrito"
      const buttonAddSpecific = document.createElement('button');
      buttonAddSpecific.classList.add('primary-button', 'add-to-cart-button');
      buttonAddSpecific.innerText = 'Add to cart';

      // Agregar la información al contenedor del detalle del producto
      const imgDetailSpecific = document.createElement('img');
      imgDetailSpecific.setAttribute('src', '/archivos anteriores/icons/bt_add_to_cart.svg');
      imgDetailSpecific.setAttribute('alt', 'add to cart');

      // Agregar el evento click al botón "Agregar al carrito"
      buttonAddSpecific.addEventListener('click', () => {
        // Aquí puedes agregar la lógica para agregar el producto al carrito
        console.log(`Se ha agregado ${product.name} al carrito.`);
      });

      specificDetail.appendChild(productDetail);
      productDetail.appendChild(imgDetail);
      specificDetail.appendChild(imgDetailSecond);
      specificDetail.appendChild(infoSpecific);
      infoSpecific.appendChild(infoSpecificPrice);
      infoSpecific.appendChild(infoSpecificName);
      infoSpecific.appendChild(infoSpecificData);
      infoSpecific.appendChild(buttonAddSpecific);
      buttonAddSpecific.appendChild(imgDetailSpecific);
    });

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const infoDiv = document.createElement('div');
    
    const infoPrice = document.createElement('p');
    infoPrice.innerText = ('$' + product.price);
    const infoName = document.createElement('p');
    infoName.innerText = product.name;

    const figure = document.createElement('figure');
    
    const figureImg = document.createElement('img');
    figureImg.setAttribute('src', '/archivos anteriores/icons/bt_add_to_cart.svg')
    figureImg.addEventListener ('click', plusOne)
    figureImg.classList.add('plus-one')

    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);
    
    productInfo.appendChild(infoDiv);
    productInfo.appendChild(figure);
    
    infoDiv.appendChild(infoPrice)
    infoDiv.appendChild(infoName)
    
    figure.appendChild(figureImg);

    cardsContainer.appendChild(productCard)
  }
}

// Llamar a la función para renderizar los productos
renderProducts(productsArr);


  
  
  
 
  

  function openInfo () {
    const detailInfo = document.querySelector('.product-detail-secondary');
    const isProductListClosed = productList.classList.contains ('inactive');
    const isDesktopMClosed = desktopM.classList.contains ('inactive');
    
    if (!isProductListClosed || !isDesktopMClosed) {
      productList.classList.add('inactive');
      desktopM.classList.add('inactive');
      detailInfo.classList.remove('inactive');
      
    }
    else {
      detailInfo.classList.remove('inactive');
    }
  }