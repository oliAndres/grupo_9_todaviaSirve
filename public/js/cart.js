const $cart = (id) => document.getElementById(id);

const showMessageInfo = (msg) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  Toast.fire({
    icon: "success",
    title: msg
  });
};

const showCountProductCart = (products, hidden = false) => {
  sessionStorage.setItem('cart-count', products.map(product => product.quantity).reduce((a,b) => a + b, 0))
      $cart('show-count').innerHTML = sessionStorage.getItem('cart-count')
      $cart('show-count').hidden = hidden
}

const showProductInCart = (products, total) => {
  if($cart("cart-table")){
    $cart("cart-table").innerHTML = null;
    products.forEach(({ id, image, name, price, discount }) => {
      $cart("cart-table").innerHTML += `
      <tr>
        <th scope="row"><img src="/images/productos/${image}" alt="" width="80px"/></th>
        <td>${name}</td>
        <td>$${(price - price * discount /100).toLocaleString('es-ES')}</td>
        <td>
        <h3 style="cursor:pointer" onclick="deleteItemToCart(${id})" class="text-danger"><i class="fa-regular fa-trash-can"></i></h3>
        </td>
    </tr>
      `;
    });
    $cart('show-total').innerHTML = total.toLocaleString('es-ES');
  }
 
};

const addItemToCart = async (quantity, product) => {
  try {
    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        quantity,
        product : +product,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const {ok, data,msg} = await response.json();
    if (!ok) {
      throw new Error(msg);
    } else {
      const {products, total} = data
      showCountProductCart(products)
      showProductInCart(products, total);
      showMessageInfo(msg)
    }
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const removeItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart?product=${id}`, {
      method : 'DELETE'
    });

    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      showCountProductCart(products)
      showProductInCart(products, total)
      showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};

const deleteItemToCart = async (id) => {
  try {

    const response = await fetch(`/api/cart/item?product=${id}`, {
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      if(products.length){
        sessionStorage.setItem('cart-count', products.length)
        $cart('show-count').innerHTML = sessionStorage.getItem('cart-count')
        showProductInCart(products,total)
        showMessageInfo(msg)
      }else {
        showCountProductCart(products)
        $cart("cart-body").innerHTML =
        '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
      $cart("btn-clearCart").classList.add('disabled')
      }
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
};


const clearCart = async () => {
  try {

    const response = await fetch(`/api/cart/all`,{
      method : 'DELETE'
    });
    
    const {ok, data : {products, total},msg} = await response.json();

    if (!ok) {
      throw new Error(msg);
    } else {
      $cart("cart-body").innerHTML =
      '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
      showCountProductCart(products, true)

    $cart("btn-clearCart").classList.add('disabled')
    showMessageInfo(msg)
    }
    
  } catch (error) {
    Swal.fire({
      title: "Upss",
      text: error.message,
      icon: "error",
    });
  }
}



window.onload = function () {

  if(!sessionStorage.getItem('cart-count')) {
    sessionStorage.setItem('cart-count',0)
  } 

  if($cart('show-count')){
    $cart('show-count').innerHTML = sessionStorage.getItem('cart-count')
    $cart('show-count').hidden =  sessionStorage.getItem('cart-count') > 0 ? false : true; 
  } 
  


  $cart("btn-cart") &&
    $cart("btn-cart").addEventListener("click", async function (e) {
      try {
        const response = await fetch("/api/cart");
        const { ok, data: {products, total} } = await response.json();

        if (ok) {
          if (products.length) {
            $cart("cart-body").innerHTML = `
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Producto</th>
                    <th scope="col">Precio</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody id="cart-table">
                  
                </tbody>
                <caption>
                    <div class="d-flex justify-content-end">
                        <h5>Total: $<span id="show-total">${total}</span></h5> 
                    </div>
                 </caption>
            </table>`;
            showProductInCart(products, total)
            $cart("btn-clearCart").classList.remove('disabled')
          } else {
            $cart("cart-body").innerHTML =
              '<div class="alert alert-warning" role="alert">No hay productos agregados al carrito</div>';
            $cart("btn-clearCart").classList.add('disabled')
          }
        }
      } catch (error) {
        console.error;
        alert(error.message);
      }
    });
};
