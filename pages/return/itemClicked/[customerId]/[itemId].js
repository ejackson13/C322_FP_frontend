// shows the item clicked by the customer, so it return the info for the customer id and item id
// gives the customer two buttons one for feedback oen for return


import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function ItemClicked() {
  const [rentedItem, setRentedItem] = useState(null);
  const router = useRouter();
  const { customerId, itemId } = router.query;

  useEffect(() => {
    if (customerId && itemId) {
      fetch(`https://c322fpreturnservice-production.up.railway.app/return/itemClicked/${customerId}/${itemId}`)
        .then((response) => response.json())
        .then((data) => setRentedItem(data));
    }
  }, [customerId, itemId]);

  if (!rentedItem) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
    <div className={styles.main}>
      <h1>{rentedItem.name}</h1>
      <p>Quantity: {rentedItem.quantity}</p>
      <p>Return By: {rentedItem.returnByDate}</p>
      <button onClick={() => router.push(`/feedback/create`)}>Give Feedback</button>
      <button onClick={() => router.push(`/return/returned?customerId=${customerId}&itemId=${itemId}`)}>Return Item</button>
    </div>
    </Layout>
  );
  
}