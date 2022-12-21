const host = 'http://localhost:5000';


fetch(`${host}/getJokes`).then((response)=>{
    response.json().then((data)=>{
        data.map((item)=>{
            let element = '    <div class="massage_container">\n' +
                '        <h1 class="massage_author">'+item.joke_author+'</h1>\n' +
                '        <h2 class="massage_text">'+item.joke_text+'</h2>\n' +
                '    </div>\n';
            document.getElementById('jokes').innerHTML+=element;
        })
    })
})