import Layout from "../../components/Layout"
import styles from "../../styles/list.module.css"
import { useForm } from 'react-hook-form';
import postingData from '../../data/postingData'
import { useRouter } from 'next/router'

export default function List() {

    const { register, handleSubmit, errors, reset } = useForm();
    const router = useRouter();

    let save = async (values) => {

        console.log(values);
        const response = await postingData.saveSellerItem(values);
        console.log(response);
        if (response.ok) {
            alert('Order submitted successfully');
            router.push('/');
          } else {
            alert('Error submitting the order');
          }

    }

    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.h1}>Create a new listing</h1>
                        <form action="#" onSubmit={handleSubmit(save)} className={styles.form}>
                            <div className={styles.form}>
                                <div>
                                    <label htmlFor="seller.sellerId" className={styles.text}>Seller ID</label>
                                    <input type="number"
                                        id="seller.sellerId"
                                        name="seller.sellerId"
                                        {...register('seller.sellerId',
                                            {required: true,
                                                    message: 'please your eller ID' })}
                                        placeholder="Enter your seller ID" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.venmoId" className={styles.text}>Venmo ID</label>
                                    <input type="number"
                                        id="seller.venmoId"
                                        name="seller.venmoId"
                                        {...register('seller.venmoId',
                                            {required: true,
                                                    message: 'please enter your Venmo ID' })}
                                        placeholder="Enter your Venmo ID" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerShipping.street" className={styles.text}>Street</label>
                                    <input type="text"
                                        id="seller.sellerShipping.street"
                                        name="seller.sellerShipping.street"
                                        {...register('seller.sellerShipping.street',
                                            {required: true,
                                                    message: 'please enter your street' })}
                                        placeholder="Enter your street" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerShipping.city" className={styles.text}>City</label>
                                    <input type="text"
                                        id="seller.sellerShipping.city"
                                        name="seller.sellerShipping.city"
                                        {...register('seller.sellerShipping.city',
                                            {required: true,
                                                    message: 'please enter your city' })}
                                        placeholder="Enter your city" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerShipping.postalCode" className={styles.text}>Postal Code</label>
                                    <input type="number"
                                        id="seller.sellerShipping.postalCode"
                                        name="seller.sellerShipping.postalCode"
                                        {...register('seller.sellerShipping.postalCode',
                                            {required: true,
                                                    message: 'please enter your postal code' })}
                                        placeholder="Enter your postal code" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerShipping.state" className={styles.text}>State</label>
                                    <input type="text"
                                        id="seller.sellerShipping.state"
                                        name="seller.sellerShipping.state"
                                        {...register('seller.sellerShipping.state',
                                            {required: true,
                                                    message: 'please enter your state' })}
                                        placeholder="Enter your state" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerName" className={styles.text}>Full Name</label>
                                    <input type="text"
                                        id="seller.sellerName"
                                        name="seller.sellerName"
                                        {...register('seller.sellerName',
                                            {required: true,
                                                    message: 'please enter your full name' })}
                                        placeholder="Enter your full name" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="seller.sellerEmail" className={styles.text}>Email</label>
                                    <input type="text"
                                        id="seller.sellerEmail"
                                        name="seller.sellerEmail"
                                        {...register('seller.sellerEmail',
                                            {required: true,
                                                    message: 'please enter your email' })}
                                        placeholder="Enter your email" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="name" className={styles.text}>Item Name</label>
                                    <input type="text"
                                        id="name"
                                        name="name"
                                        {...register('name',
                                            {required: true,
                                                    message: 'please enter the item name' })}
                                        placeholder="Enter the item name" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="inventory" className={styles.text}>Inventory of Item</label>
                                    <input type="number"
                                        id="inventory"
                                        name="inventory"
                                        {...register('inventory',
                                            {required: true,
                                                    message: 'please enter the inventory' })}
                                        placeholder="Enter inventory of item" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="price" className={styles.text}>Price</label>
                                    <input type="number"
                                        id="price"
                                        name="price"
                                        step="0.1"
                                        {...register('price',
                                            {required: true,
                                                    message: 'please enter the price per item' })}
                                        placeholder="Enter price per item" className={styles.formText}/>

                                </div>

                                <div>
                                    <label htmlFor="description" className={styles.text}>Description</label>
                                    <input type="text"
                                        id="description"
                                        name="description"
                                        {...register('description',
                                            {required: true,
                                                    message: 'please enter the description' })}
                                        placeholder="Enter description of item" className={styles.formText}/>
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