import Layout from "../../components/Layout"
import styles from "../../styles/feedback.[id].module.css"
import feedbackData from '../../data/feedbackData'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router';

export default function Id() {
    const router = useRouter()
    const { id } = router.query;
    const idInt = parseInt(id);

    const [feedbackById, setFeedbackById] = useState([null]);
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
                                    <tr>
                                    <th className={styles.th}>ID</th>
                                    <th className={styles.th}>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {feedbackById ? <td className={styles.td}>{feedbackById.feedbackSellerId}</td> : <td></td>}
                                        {feedbackById ? <td className={styles.td}>{feedbackById.rating}</td> : <td></td>}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
            </Layout>
        </>
    )

}