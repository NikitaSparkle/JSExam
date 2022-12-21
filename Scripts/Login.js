const host = 'http://localhost:5000';

const auth = () => {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    fetch(`${host}/getAuth`, {
        method: 'POST',
        headers: {
            'accept': 'text/plain',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({'login': login, 'pass': password})
    }).then((response) => {
        console.log(response);
        if (response.status === 200) {
            window.sessionStorage.setItem('Auth', '+')
            window.location.href = '/Pages/Admin.html';
        }
    })
}