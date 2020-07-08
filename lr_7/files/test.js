function test() {
    for (let i = 1; i <= 3; i++) {
        alert("Из шляпы достали " + i + " кролика!");
    }
}

function json_test() {
    fetch('http://localhost:5000/test.json', {
        method: 'GET', mode: 'no-cors',
        headers: {'Content-Type':'application/json', 'Accept':'application/json'}
    })
        .then(response => response.json())
        .then(pdata => {
            res.innerHTML = JSON.stringify(pdata);
        });
}

function xml_test() {
    fetch('http://localhost:5000/test.xml', {
        method: 'GET', mode: 'no-cors',
        headers: {'Content-Type':'application/xml', 'Accept':'application/xml'}
    })
        .then(response => response.text())
        .then(str => new DOMParser().parseFromString(str, 'text/xml'))
        .then(pdata => {
            res.innerHTML = pdata;
        });
}