import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function Returned() {
  const router = useRouter();
  const { customerId, itemId } = router.query;
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    if (customerId && itemId) {
      fetch(`http://localhost:8082/return/returned/${customerId}/${itemId}`)
        .then((response) => response.json())
        .then((data) => setReceipt(data));
    }
  }, [customerId, itemId]);

  const getDescription = () => {
    if (!receipt) return "";

    const { orderId, dateReceived, latePenalty, customerTotal } = receipt;

    if (latePenalty === 0) {
      return `Item received on time, so no late penalty was applied. Your total remains unchanged at $${customerTotal}.`;
    } else {
      return `Order ${orderId} was received on ${dateReceived}, resulting in a late penalty of $${latePenalty}. Your total for the order comes out to be $${customerTotal}.`;
    }
  };

  if (!receipt) return <div>Loading...</div>;

  return (
    <Layout>
    <div className={styles.main}>
      <h1>Return Receipt</h1>
      <p>{getDescription()}</p>
      <p>Order ID: {receipt.orderId}</p>
      <p>Date Received: {receipt.dateReceived}</p>
      <p>Late Penalty: ${receipt.latePenalty}</p>
      <p>Customer Total: ${receipt.customerTotal}</p>
    </div>
    </Layout>
  );
}