// variables
const smartiaTitle = "smartIA";
const smartiaSubtitle = "Office Solution";
title.innerHTML = smartiaTitle;
subtitle.innerHTML = smartiaSubtitle;

document.title = smartiaTitle;

const menuItems = {
    'menu': [
        {name: 'Upload access cam', link: '/upload', sub: null},
        {name: 'Upload exit cam', link: '/exit', sub: null},
        {name: 'view Registries', link: '/viewRegistries', sub: null},
        {name: 'view Today', link: '/viewToday', sub: null}
    ]
};

const workers = ['Ashton Kutcher', 'Adam Sandler', 'Adele', 'bella thorne'];


// check remote api
//const remoteApi = "https://q-starternodeapp.mybluemix.net/api/v1/classify/image";
const remoteApi = "http://localhost:8080/predict";

function requestName() {
    
    let formData = new FormData();

    let fileField = document.querySelector('#inputImage');
    let sourceField = document.querySelector('#sourceField');
    let divRespuesta = document.querySelector('#response');

    formData.append('imagen', fileField.files[0]);
    console.log('send image to api')
    fetch(remoteApi, {
    //fetch('/api/v1/inputData', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(async response => {
            console.log('Respuesta reconocer():', response);
            //mostrarImagen(fileField);
            
            console.log(response.images[0].classifiers[0].classes.length);
            var i;
            var max_score = 0;

            for (i = 0; i < response.images[0].classifiers[0].classes.length; i++) {
                console.log('loop');
                if (response.images[0].classifiers[0].classes[i].score > response.images[0].classifiers[0].classes[max_score].score){
                    max_score = i;
                }
            }

            console.log('Respuesta max_score:', max_score);
            console.log(response.images[0].classifiers[0].classes[max_score].class);
            console.log(response.images[0].classifiers[0].classes[max_score].score);
            let persona_name = response.images[0].classifiers[0].classes[max_score].class;
            let persona_score = response.images[0].classifiers[0].classes[max_score].score;

            //let datos = await buscarDiscovery(persona);

            divRespuesta.innerHTML = `
                <div class="alert alert-info">Imagen subida con éxito, se reconoció a ${persona_name} (${persona_score*100}%)</div>
            `;

            //fetch('/api/v1/db')
            let registry = {
                source: sourceField.value,
                name: persona_name,
                score: persona_score
            };
            console.log('registry: ', registry);
            fetch('/api/v1/db/addEntry', {
                method: 'post',
                body: JSON.stringify(registry),
                headers: { 'Content-type': 'application/json' }
            })
            .then(response => response.json())
            .then(async response => {
                console.log('Registry added to database:', response);
                console.log(response._id);
                divRespuesta.innerHTML+= `
                <div class="alert alert-success">Registro creado con éxito</div>
                `;
            })


        })
        .catch(error => console.error('Error:', error));


}

function listAllRegistries() {

    let divlistAllRegistries = document.querySelector('#listAllRegistries');

    console.log('listing all registries');
    fetch('/api/v1/db/listAllEntries', {
        method: 'get'
    })
    .then(response => response.json())
    .then(async response => {
        console.log('listed registries:', response);
        divlistAllRegistries.innerHTML = `
            <div class="alert alert-success">Se recuperaron ${response.length} registros</div>
            `;
        var i;

            for (i = 0; i < response.length; i++) {
                let registriDate = new Date(response[i].createdAt);
                divlistAllRegistries.innerHTML += `
            <div class="">${response[i].name} || ${registriDate} || ${response[i].source} ||</div>
            `;
            }
    })
    .catch(error => console.error('Error:', error));

}

function listActiveUsers() {
    let divlistActiveUsers = document.querySelector('#listActiveUsers');
    let date = curday();
    //date = date.getFullYear()+'-'+date.getMonth() + 1).padStart(2, '0')+'-'+date.getDate();
    console.log(date);
    console.log('listing active users');
    fetch('/api/v1/db/findByDate/'+date, {
        method: 'get'
    })
    .then(response => response.json())
    .then(async response => {
        divlistActiveUsers.innerHTML += `
            <div class="alert alert-success">Se recuperaron ${response.length} registros</div>
            `;
        divlistActiveUsers.innerHTML += `
            <div class="alert alert-info">Archivos correspondientes al ${date}</div>
        `;

        
            let usersArrived = [];
            let usersLeft = [];

        for (var i = 0; i < response.length; i++) {
            for (var j=0; j < workers.length; j++){
                if (response[i].name == workers[j]){
                    if(response[i].source=='exitCam'){
                        usersLeft[j] = true;
                    } else {
                        usersArrived[j] = true;
                    }
                }
                //console.log(activeUsers[j])
            }
            //let registryDate = new Date(response[i].createdAt);   
            
        }

        for (var k=0; k < workers.length; k++){
            if (usersArrived[k] == true){
                if(usersLeft[k] == true){
                    hasExit = 'has gone';
                } else {
                    hasExit = 'still working';
                }
                divlistActiveUsers.innerHTML += `
                    <div class="">${workers[k]} ${hasExit}</div>
                `;
            } else {
                divlistActiveUsers.innerHTML += `
                    <div class="">${workers[k]} didn't come to the office</div>
                `;
            }
        }
        //console.log(activeUsers)
    })
    .catch(error => console.error('Error:', error));

}


function findLastExit(user) {
    fetch('/api/v1/db/exit/'+user, {
        method: 'get'
    })
    .then(response => response.json())
    .then(async response => {
        console.log(response);
    })
    .catch(error => console.error('Error:', error));

}


function curday(sp = '-'){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (yyyy+sp+mm+sp+dd);
    };

function renderMenu(menuItems){

    let divMenu = document.getElementById('menu');

    var nav = document.createElement('nav');
    nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light');

    var brand = document.createElement('a');
    brand.setAttribute('class', 'navbar-brand');
    brand.appendChild(document.createTextNode('smartIA'));
    nav.appendChild(brand);

    
    var divNavMenu = document.createElement('div');
    divNavMenu.setAttribute('class', 'navbar-nav');

    for (var i=0;i<menuItems.menu.length;i++) {

        var a = document.createElement('a');
        a.setAttribute('class', 'nav-item nav-link ');
        a.setAttribute('href', menuItems.menu[i].link);
        a.appendChild(document.createTextNode(menuItems.menu[i].name));
        
        divNavMenu.appendChild(a);
    }

    nav.appendChild(divNavMenu);
    divMenu.appendChild(nav);

}
renderMenu(menuItems);

