const goods = [
    { title: 'Shirt',  price: 150, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ', },
    { title: 'Socks',  price: 50, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet iusto magni natus officiis provident reprehenderit saepe.', },
    { title: 'Jacket',  price: 350, text: 'Consectetur adipisicing elit. Eveniet iusto magni natus officiis provident reprehenderit saepe.', },
    { title: 'Shoes',  price: 250, text: 'Eveniet iusto magni natus officiis provident reprehenderit saepe.', },
];

const $goodsList = document.querySelector('.goods-list');

const renderGoodsItem = ({ title, text, price }) => {
    return `<div class="card" style="width: 18rem;">
              <!--<img src="..." class="card-img-top" alt="...">-->
              <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-text">${text}</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Add to cart</a>
                <h5>${price}&nbsp;€</h5>
              </div>
          </div>`
};

const renderGoodsList = (list = goods) => {
    let goodsList = list.map(
            (item) =>  {
                return renderGoodsItem(item)
            }
        ).join('');

    $goodsList.insertAdjacentHTML('beforeend', goodsList);
}

renderGoodsList();


