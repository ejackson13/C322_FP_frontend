
let host = "https://c322fppostingservice-production.up.railway.app/list"

let saveSellerItem = (sellerItem) => {
    return fetch(host, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            seller: sellerItem.seller,
            name: sellerItem.name,
            inventory: sellerItem.inventory,
            price: sellerItem.price,
            description: sellerItem.description
        })
    }).then(response =>
        {
            return response;
        });
    /*    
    {
        if (response.status == 200 || response.status == 201) return response;
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return error;
        });
        */
}

let postingData = {
    saveSellerItem: saveSellerItem
}

export default postingData;