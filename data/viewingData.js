//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;
//need

let host = process.env.VIEWING_HOST;

let getAllAvailableItems = () => {
    
    return fetch(host)
    .then(response =>
        {
            if (response.status == 200 || response.status == 201) {
                 return response.json();
            }
            return null;
        })
            .then(id => id)
            .catch(error => {
                console.log(error);
                return null;
        }); 
};

let getItemsByName = (name) => {
    console.log(host+"/"+name);
    return fetch(host + "/" + name)
    .then(response =>
        {
            if (response.status == 200 || response.status == 201) {
                 return response.json();
            }
            return null;
        })
            .then(id => id)
            .catch(error => {
                console.log(error);
                return null;
        });
}

let getItemById = (id) => {
    console.log(host+"/item/"+id)
    return fetch(host + "/item/" + id)
        .then(response =>
        {
            if (response.status == 200 || response.status == 201) {
                 return response.json();
            }
            return null;
        })
            .then(id => id)
            .catch(error => {
                console.log(error);
                return null;
        });
}

let viewingdata = {
    allItems: getAllAvailableItems,
    itemsByName: getItemsByName,
    itemById: getItemById
};

export default viewingdata;