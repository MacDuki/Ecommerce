
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
    data: 'Holaaaa wachooo 1',

  });

  const cardsContainer = document.querySelector('.cards-container');
  // product detail
  
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
  


  function closeInfo () {
    const detailInfo = document.querySelector('.product-detail-secondary');
    detailInfo.classList.add('inactive');
  } 
 

  //styles


function plusOne () {
console.log("lO ESCUCHO")
}


  function renderProducts (arr) {
    for (product of arr ) {

    //   <section class="main-container">
    // < class="cards-container">

    //   <div class="product-card">
    //     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    //     <div class="product-info">
    //       <div>
    //         <p>$120,00</p>
    //         <p>Bike</p>
    //       </div>
    //       <figure>
    //         <img src="./icons/bt_add_to_cart.svg" alt="">
    //       </figure>
    //     </div>
    //   </div>
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
     
      const imgProduct = document.createElement('img');
      imgProduct.addEventListener ('click', openInfo)
      imgProduct.setAttribute('src', product.image);
  
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

  renderProducts (productsArr);

  function closeDetailF () {
  if (closeDetail) {
    closeDetail.addEventListener('click', closeInfo);
  } else {
    console.error('El elemento no existe en el DOM');
  }
}

  function renderSpecificData(arr) {
    const specificDetail = document.querySelector('.product-detail-secondary');
    for (product of arr) {
      const productDetail = document.createElement('div');
      productDetail.classList.add('product-detail-close-secondary');
      productDetail.addEventListener ('click', closeDetailF)
  
      const imgDetail = document.createElement('img');
      imgDetail.setAttribute('src', '/archivos anteriores/icons/icon_close.png');
      imgDetail.setAttribute('alt', 'close');
      imgDetail.addEventListener ('click', closeDetailF)
  
      const imgDetailSecond = document.createElement('img');
      imgDetailSecond.setAttribute('src', product.image);
      imgDetailSecond.setAttribute('alt', product.name);
  
      const infoSpecific = document.createElement('div');
      infoSpecific.classList.add('product-info-secondary');
  
      const infoSpecificPrice = document.createElement('p');
      infoSpecificPrice.innerText = ('$' + product.price);
  
      const infoSpecificName = document.createElement('p');
      infoSpecificName.innerText = product.name;
  
      const infoSpecificData = document.createElement('p');
      infoSpecificData.innerText = product.data;
  
      const buttonAddSpecific = document.createElement('button');
      buttonAddSpecific.classList.add('primary-button');
      buttonAddSpecific.classList.add('add-to-cart-button');
  
      const imgDetailSpecific = document.createElement('img');
      imgDetailSpecific.setAttribute('src', '/archivos anteriores/icons/bt_add_to_cart.svg');
      imgDetailSpecific.setAttribute('alt', 'add to cart');
  
      const buttonText = document.createTextNode('Add to cart');
  
      specificDetail.appendChild(productDetail);
      productDetail.appendChild(imgDetail);
      specificDetail.appendChild(imgDetailSecond);
      specificDetail.appendChild(infoSpecific);
      infoSpecific.appendChild(infoSpecificPrice);
      infoSpecific.appendChild(infoSpecificName);
      infoSpecific.appendChild(infoSpecificData);
      infoSpecific.appendChild(buttonAddSpecific);
      buttonAddSpecific.appendChild(imgDetailSpecific);
      buttonAddSpecific.appendChild(buttonText);
    }
  }
  
  renderSpecificData (productsArr); 

  const closeDetail = document.querySelector('.product-detail-close-secondary');
 