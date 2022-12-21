const host = 'http://localhost:5000';


fetch(`${host}/getProducts`).then((response)=>{
    response.json().then((data)=>{
        data.map((item)=>{
            let element = '  <div class="product_container">\n' +
                '    <img class="product_image" src="'+item.img+'">\n' +
                '    <h1 class="product_title">'+item.product_title+'</h1>\n' +
                '    <h2 class="product_price">'+item.product_price+'</h2>\n' +
                '  </div>\n';
            document.getElementById('product').innerHTML+=element;
        })
    })
})