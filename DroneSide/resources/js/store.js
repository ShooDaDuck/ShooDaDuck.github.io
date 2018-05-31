let database = firebase.database();
let itemsGrid = $("#itemsGrid");

let placeHolderImage = 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';

let ref = firebase.database().ref('items').orderByKey();
ref.on('child_added', function(data) {
    var item = data.val();
    
    let itemTemplate = `
        <div class="item">
            <h3>${item.name}</h3>
            <p>Varenummer: ${data.key}</p>
            <img src="${item.imageURL || placeHolderImage }" alt="">
            <div>
                <p>${item.price} kr</p>
                <button>Kjøp</button>
            </div>                
        </div>
    `;

    console.log(itemTemplate);
    itemsGrid.append(itemTemplate);
});