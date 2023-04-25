import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Item.module.css'
import Layout from '@/components/Layout'
import viewingdata from '@/data/viewingData'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    
    const router = useRouter();
    const id = router.query;
    const [itemById, setItemById] = useState([]);

    useEffect((id) => {
    viewingdata.itemById(id)
        .then((data) => {
        setItemById(data);
        console.log(data);
        })
        .catch((e) => console.log(e));
    }, []);


    return (
        <>
        <Head>
            <title>itemById.name</title>
            <meta name="View items available to rent" content="Demop" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
        <div className={styles.main}>
            <h1>{itemById.name}</h1>
            <h2>Price: ${itemById.price}</h2>
            <h3>Seller: {itemById.seller.sellerName}</h3>
            <h3>Rating: {item.seller.sellerFeedback.sumOfSellerScores / item.seller.sellerFeedback.numOfSellerScores} </h3>

            <br />
            <p>{itemById.description}</p>

            <br />

            <Link href = {{pathname: "/order", query: itemById}}>
                <button>Place Order</button>
            </Link>
        </div>

    </Layout>
        
    </>
  )
}