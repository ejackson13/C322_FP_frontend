//has the user enter in their customer id



import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'

export default function EnterCustomerId() {
  const [customerId, setCustomerId] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/return/rentedItems/${customerId}`);
  };

  return (
    <Layout>
    <div className={styles.main}>
      <h1>Enter Customer ID</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
          placeholder="Customer ID"
          required
        />
        <button type="submit">View Rented Items</button>
      </form>
    </div>
    </Layout>
  );
}
