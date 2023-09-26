

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


function renderProducts(arr) {
  for (let i = 0; i < arr.length; i++) {
    const product = arr[i];
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.addEventListener('click', openInfo);
    imgProduct.setAttribute('src', product.image);
    imgProduct.setAttribute('data-index', i); // Agregar atributo data-index

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
    figureImg.addEventListener('click', plusOne)
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

function openInfo(event) {
  const index = event.target.dataset.index; // Obtener el índice del elemento en el array
  const product = products[index]; // Obtener el producto seleccionado
  
  // Resto del código para mostrar los detalles del producto
}
