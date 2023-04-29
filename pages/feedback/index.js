import Layout from "../../components/Layout"
import styles from "../../styles/feedback.module.css"
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Feedback() {

    const [id, setId] = useState('');
    const router = useRouter();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      router.push(`http://localhost:3000/feedback/${id}`);
    };
  
    const handleChange = (event) => {
      setId(event.target.value);
    };
  
    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.content}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="id" className={styles.labelText}>Enter an ID:</label>
                        <input
                        type="text"
                        id="id"
                        name="id"
                        value={id}
                        onChange={handleChange}
                        />
                        <button type="submit" className={styles.button}>Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    );

}