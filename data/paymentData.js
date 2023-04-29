//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "https://c322fppaymentservice-production.up.railway.app/payment";

let getAllOrders = (type, userId) => {
    return fetch(host + "/" + type + "/" +userId)
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

let getOrderById = (type, userId, orderId) => {
    return fetch(host + "/" + type + "/" + userId + "/" + orderId)
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


let paymentdata = {
    allOrders: getAllOrders,
    orderById: getOrderById
};

export default paymentdata;