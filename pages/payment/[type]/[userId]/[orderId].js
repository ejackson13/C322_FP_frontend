import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import paymentdata from '@/data/paymentData'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    
    const router = useRouter();
    const type = router.query.type;
    const userId = router.query.userId;
    const orderId = router.query.orderId;
    const [summary, setSummary] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(type)
    console.log(userId)
    console.log(orderId)
    console.log("localhost:8081/payment/"+type+"/"+userId+"/"+orderId);

    useEffect(() => {
        setLoading(true);
        paymentdata.orderById(type, userId, orderId)
            .then((data) => {
            setSummary(data);
            setLoading(false);
            console.log(data);
            })
            .catch((e) => console.log(e));
        }, []);


    if(loading)
        return(
            <>
                <Head>
                    <title>Order Summary</title>
                    <meta name="View items available to rent" content="Demop" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout>
                </Layout>
                
            </>
        )
    
    else
        return (
            <>
            <Head>
                <title>Order Summary</title>
                <meta name="View items available to rent" content="Demop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
            <div className={styles.main}>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <h2>Order {orderId}</h2>
                {summary != null ?
                    <ul>
                        {summary.dateRented ? <li>Date rented: {summary.dateRented}</li> : null}
                        {summary.dateReturned ? <li>Date returned: {summary.dateReturned}</li> : null}
                        {summary.basePrice ? <li>Base Price: {summary.basePrice}</li> : null}
                        {summary.lateFees ? <li>Late Fees: {summary.lateFees}</li> : null}
                        {type=="customer" ? 
                            summary.shippedTo ? <li>Shipped To: {summary.shippedTo.street}, {summary.shippedTo.city}, {summary.shippedTo.state}, {summary.shippedTo.postalCode}</li>
                                : null
                            :
                            summary.shippedFrom ? <li>Shipped From: {summary.shippedFrom.street}, {summary.shippedFrom.city}, {summary.shippedFrom.state}, {summary.shippedFrom.postalCode}</li>
                                : null
                        }
                        {type=="seller" ? 
                            summary.siteFee ? <li>Site Fee: {summary.siteFee}</li> : null
                            : null
                        }
                        {type=="customer" ? 
                            summary.totalCost ? <li>Total Cost: {summary.totalCost}</li> : null
                            :
                            summary.profit ? <li>Profit: {summary.profit}</li> : null
                        }   
                    </ul>
                    : <p>Error loading data</p>
                }
            </div>

        </Layout>
            
        </>
    )
}


/**
 * "orderId": 1,
        "dateRented": "4/20/2023",
        "dateReturned": "4/25/2023",
        "basePrice": 14.0,
        "lateFees": 5.0,
        "shippedTo": {
            "id": 1,
            "state": "Indiana",
            "city": "Bloomington",
            "postalCode": 47408,
            "street": "17814 arbor greene dr"
        },
        "totalCost": 19.0

    "orderId": 1,
        "dateRented": "4/20/2023",
        "dateReturned": "4/28/2023",
        "basePrice": 14.0,
        "lateFees": 0.0,
        "shippedFrom": {
            "id": 1,
            "state": "Indiana",
            "city": "fishers",
            "postalCode": 47408,
            "street": "17814 arbor greene dr"
        },
        "siteFee": 2.0,
        "profit": 12.0
 */