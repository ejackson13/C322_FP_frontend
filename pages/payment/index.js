import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [type, setType] = useState('customer');
    const [userId, setUserId] = useState('');
    const [orderId, setOrderId] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(type);
        //console.log(userId);

        if(orderId == "")
            router.push(`/payment/${type}/${userId}`);
        else
            router.push(`/payment/${type}/${userId}/${orderId}`);
    };

    return (
        <>
            <Head>
            <title>Enter Info</title>
            <meta name="View items available to rent" content="Demop" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <h1>Enter your information</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="drop">Are you a customer or a seller?</label> <br/>
                    <select id="drop"  value={type}  onChange={(e) => {setType(e.target.value); }}>
                        <option value="customer">Customer</option>
                        <option value="seller">Seller</option>
                    </select>
                    <br/> <br/>
                    <label htmlFor="uId">Enter your customer or user id</label> <br/>
                    <input type="number" id="uId" step="1" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="User ID" required />
                    <br/> <br/>
                    <label htmlFor="oId">Enter the order id you want to find. Leave blank to view all orders</label> <br/>
                    <input type="number" id="oId" step="1" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="0"/>
                    <br/> <br/>
                    <button type="submit">View Orders</button>
                </form>
            </Layout>
        </>
    )

}


/*
<Link href={{pathname: '/item', query: item.sellerItemId}}>
                      {item.name}
                    </Link>
*/