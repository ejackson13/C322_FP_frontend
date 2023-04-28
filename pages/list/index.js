import Layout from "../../components/Layout"
import styles from "../../styles/list.module.css"
import { useForm } from 'react-hook-form';
import postingData from '../../data/postingData'

export default function List() {

    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {

        console.log(values);
        const response = await postingData.saveSellerItem(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }

    return (
        <>
            <Layout>
                <div className={styles.container}>
                    <h1>Create a new listing</h1>
                    <form action="#" onSubmit={handleSubmit(save)}>
                        <div>
                            <div>
                                <label htmlFor="seller.sellerId">Seller ID</label>
                                <input type="number"
                                    id="seller.sellerId"
                                    name="seller.sellerId"
                                    {...register('seller.sellerId',
                                        {required: true,
                                                message: 'please your eller ID' })}
                                    placeholder="Enter your seller ID"/>

                            </div>

                            <div>
                                <label htmlFor="seller.venmoId">Venmo ID</label>
                                <input type="number"
                                    id="seller.venmoId"
                                    name="seller.venmoId"
                                    {...register('seller.venmoId',
                                        {required: true,
                                                message: 'please enter your Venmo ID' })}
                                    placeholder="Enter your Venmo ID"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerShipping.shippingId">Shipping ID</label>
                                <input type="number"
                                    id="seller.sellerShipping.shippingId"
                                    name="seller.sellerShipping.shippingId"
                                    {...register('seller.sellerShipping.shippingId',
                                        {required: true,
                                                message: 'please enter your shipping ID' })}
                                    placeholder="Enter your shipping ID"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerShipping.street">Street</label>
                                <input type="text"
                                    id="seller.sellerShipping.street"
                                    name="seller.sellerShipping.street"
                                    {...register('seller.sellerShipping.street',
                                        {required: true,
                                                message: 'please enter your street' })}
                                    placeholder="Enter your street"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerShipping.city">City</label>
                                <input type="text"
                                    id="seller.sellerShipping.city"
                                    name="seller.sellerShipping.city"
                                    {...register('seller.sellerShipping.city',
                                        {required: true,
                                                message: 'please enter your city' })}
                                    placeholder="Enter your city"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerShipping.postalCode">Postal Code</label>
                                <input type="number"
                                    id="seller.sellerShipping.postalCode"
                                    name="seller.sellerShipping.postalCode"
                                    {...register('seller.sellerShipping.postalCode',
                                        {required: true,
                                                message: 'please enter your postal code' })}
                                    placeholder="Enter your postal code"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerShipping.state">State</label>
                                <input type="text"
                                    id="seller.sellerShipping.state"
                                    name="seller.sellerShipping.state"
                                    {...register('seller.sellerShipping.state',
                                        {required: true,
                                                message: 'please enter your state' })}
                                    placeholder="Enter your state"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerName">Full Name</label>
                                <input type="text"
                                    id="seller.sellerName"
                                    name="seller.sellerName"
                                    {...register('seller.sellerName',
                                        {required: true,
                                                message: 'please enter your full name' })}
                                    placeholder="Enter your full name"/>

                            </div>

                            <div>
                                <label htmlFor="seller.sellerEmail">Email</label>
                                <input type="text"
                                    id="seller.sellerEmail"
                                    name="seller.sellerEmail"
                                    {...register('seller.sellerEmail',
                                        {required: true,
                                                message: 'please enter your email' })}
                                    placeholder="Enter your email"/>

                            </div>

                            <div>
                                <label htmlFor="name">Item Name</label>
                                <input type="text"
                                    id="name"
                                    name="name"
                                    {...register('name',
                                        {required: true,
                                                message: 'please enter the item name' })}
                                    placeholder="Enter the item name"/>

                            </div>

                            <div>
                                <label htmlFor="inventory">Inventory of Item</label>
                                <input type="number"
                                    id="inventory"
                                    name="inventory"
                                    {...register('inventory',
                                        {required: true,
                                                message: 'please enter the inventory' })}
                                    placeholder="Enter inventory of item"/>

                            </div>

                            <div>
                                <label htmlFor="price">Price</label>
                                <input type="number"
                                    id="price"
                                    name="price"
                                    step="0.1"
                                    {...register('price',
                                        {required: true,
                                                message: 'please enter the price per item' })}
                                    placeholder="Enter price per item"/>

                            </div>

                            <div>
                                <label htmlFor="description">Description</label>
                                <input type="text"
                                    id="description"
                                    name="description"
                                    {...register('description',
                                        {required: true,
                                                message: 'please enter the description' })}
                                    placeholder="Enter description of item"/>
                            </div>


                        </div>

                        <div>
                            <input type="submit" value="save" ></input>
                        </div>
                    </form>
                </div>
            </Layout>
        </>
    )

}