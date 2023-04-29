import Layout from "../../components/Layout"
import styles from "../../styles/feedback.create.module.css"
import { useForm } from 'react-hook-form'
import feedbackData from '../../data/feedbackData'

export default function CreateFeedback() {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await feedbackData.saveFeedback(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return (

        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Add new feedback</h1>
                        <form action="#" onSubmit={handleSubmit(save)}>
                            <div>
                                <div>
                                    <label htmlFor="name" className={styles.text}>ID</label>
                                    <input type="number"
                                        id="feedbackSellerId"
                                        name="feedbackSellerId"
                                        {...register('feedbackSellerId',
                                            {required: true,
                                                    message: 'please enter an ID' })}
                                        placeholder="Enter an ID" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="email" className={styles.text}>Rating</label>
                                    <input type="number"
                                        id="rating"
                                        name="rating"
                                        {...register('rating',
                                            {required: true,
                                                message: 'please enter a rating' })}
                                        placeholder="Enter a rating" className={styles.formText}/>
                                </div>


                            </div>

                            <div>
                                <input type="submit" value="save" className={styles.button}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>

    )

}