import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function OrderPage() {
  const router = useRouter();
  const { itemId } = router.query;
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    state: '',
    city: '',
    postalCode: '',
    street: '',
  });
  const [payment, setPayment] = useState({
    method: '',
    number: '',
    billingAddress: {
      state: '',
      city: '',
      postalCode: '',
      street: '',
    },
  });

  const [item, setItem] = useState(null);
  const [sellerId, setSellerId] = useState(null);

  

  useEffect(() => {
    console.log(itemId)
    if (itemId) {
      console.log(itemId)
      // Fetch the item and sellerId using the itemId
      const fetchItemAndSeller = async () => {
        try {
          const itemResponse = await fetch(`http://localhost:8080/orders/item/${itemId}`);
          const itemData = await itemResponse.json();
          console.log(itemData)
          console.log(itemData.sellerId)
          setItem(itemData);
          setSellerId(itemData.sellerId);
        } catch (error) {
          
          console.error('Error fetching item and seller:', error);
        }
      };
      fetchItemAndSeller();
    }
  }, [itemId]);

  const total = item ? item.price * quantity : 0;

  const formatDate = (date) => {
    const month = date.getMonth() + 1; // Months are zero-based, so we need to add 1
    const day = date.getDate();
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  };

  const calculateReturnByDate = () => {
    const currentDate = new Date();
    const returnByDate = new Date(currentDate);
    returnByDate.setDate(currentDate.getDate() + 14);
    return formatDate(returnByDate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!item || !sellerId) {
      alert('Item or seller information not available');
      return;
    }

    const orderData = {
      customer: {
        name: customerName,
        email: customerEmail,
      },
      sellerId,
      total,
      shippingAddress,
      sellerShippingAddress: shippingAddress,
      itemsRented: [
        {
          itemID: itemId,
          name: item.name,
          price: item.price,
          quantity,
          dateRented: formatDate(new Date()),
          returnByDate: calculateReturnByDate(),
        },
      ],
      payment: {
        ...payment,
      },
    };

    // Send the order data to your API for processing and storing in the database
    try {

      const response = await fetch('http://localhost:8080/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order submitted successfully');
        router.push('/');
      } else {
        alert('Error submitting the order');
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
      alert('Error submitting the order');
    }
  };

  return (
    <Layout>
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <h2>Customer Information</h2>
        <label htmlFor="customerName">Name:</label>
        <input
          id="customerName"
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <br />
        <label htmlFor="customerEmail">Email:</label>
        <input
          id="customerEmail" 
          type="email"
          value={customerEmail}
          onChange={(e) => setCustomerEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
        <br />
        <h2>Shipping Address</h2>
        <label htmlFor="state">State:</label>
        <input
          id="state"
          type="text"
          value={shippingAddress.state}
          onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
          required
        />
        <br />
        <label htmlFor="city">City:</label>
        <input
          id="city"
          type="text"
          value={shippingAddress.city}
          onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
          required
        />
        <br />
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          id="postalCode"
          type="text"
          value={shippingAddress.postalCode}
          onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
          required
        />
        <br />
        <label htmlFor="street">Street:</label>
        <input
          id="street"
          type="text"
          value={shippingAddress.street}
          onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
          required
        />
        <br />
        <h2>Payment Information</h2>
        <label htmlFor="method">Card Type:</label>
        <input
          id="method"
          type="text"
          value={payment.method}
          onChange={(e) => setPayment({ ...payment, method: e.target.value })}
          required
        />
        <br />
        <label htmlFor="number">Card Number:</label>
        <input
          id="number"
          type="text"
          value={payment.number}
          onChange={(e) => setPayment({ ...payment, number: e.target.value })}
          required
        />
        <br />
        <h2>Billing Address</h2>
        <label htmlFor="billingState">State:</label>
        <input
          id="billingState"
          type="text"
          value={payment.billingAddress.state}
          onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, state: e.target.value } })}
          required
        />
        <br />
        <label htmlFor="billingCity">City:</label>
        <input
          id="billingCity"
          type="text"
          value={payment.billingAddress.city}
          onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, city: e.target.value } })}
          required
        />
        <br />
        <label htmlFor="billingPostalCode">Postal Code:</label>
        <input
          id="billingPostalCode"
          type="text"
          value={payment.billingAddress.postalCode}
          onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, postalCode: e.target.value } })}
          required
        />
        <br />
        <label htmlFor="billingStreet">Street:</label>
        <input
          id="billingStreet"
          type="text"
          value={payment.billingAddress.street}
          onChange={(e) => setPayment({ ...payment, billingAddress: { ...payment.billingAddress, street: e.target.value } })}
          required
        />
        <br />
        <button type="submit">Submit Order</button>
      </form>
      <button onClick={() => router.push('/')}>Back to Home</button>
    </div>
    </Layout>
  );
}