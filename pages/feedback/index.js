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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="id">Enter an ID:</label>
                    <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </Layout>
    );

}