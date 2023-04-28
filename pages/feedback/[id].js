import Layout from "../../components/Layout"
import styles from "../../styles/feedback.[id].module.css"
import feedbackData from '../../data/feedbackData'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Id() {
    const router = useRouter()
    const { id } = router.query;
    const idInt = parseInt(id);

    if (typeof id === "undefined" || isNaN(idInt)) {
        return <div>Loading...</div>;
    }

    const [feedbackById, setFeedbackById] = useState([]);
    console.log(id)

    useEffect(() => {
        feedbackData.feedbackById(idInt)
            .then((data) => {
                setFeedbackById(data)
                console.log(data)
            })
            .catch((e) => console.log(e));
    }, [])

    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <table className={styles.table}>
                            <thead>
                                <th className={styles.th}>ID</th>
                                <th className={styles.th}>Rating</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className={styles.td}>{feedbackById.feedbackSellerId}</td>
                                    <td className={styles.td}>{feedbackById.rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        </>
    )

}