import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
//import { navItems } from "./NavItems";
import paymentdata from '@/data/paymentData'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    
    const router = useRouter();
    const type = router.query.type;
    const userId = router.query.userId;
    const [summaries, setSummaries] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(type)
    console.log(userId)
    console.log("localhost:8081/payment/"+type+"/"+userId);

    useEffect(() => {
        setLoading(true);
        paymentdata.allOrders(type, userId)
            .then((data) => {
            setSummaries(data);
            setLoading(false);
            console.log(data);
            })
            .catch((e) => console.log(e));
        }, []);


    if(loading)
        return(
            <>
                <Head>
                    <title>Order Summaries</title>
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
                <title>Order Summaries</title>
                <meta name="View items available to rent" content="Demop" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
            <div className={styles.main}>
                <h2>Order Summaries</h2>
                {summaries != null? 
                    <ul>
                        {summaries.map((summary, s) => (
                        <li key={s}> <b>Order {summary.orderId} summary </b>
                            <ul>
                                {summary.dateRented ? <li>Date rented: {summary.dateRented}</li> : null}
                                {summary.dateReturned ? <li>Date returned: {summary.dateReturned}</li> : null}
                                {summary.basePrice ? <li>Base Price: ${summary.basePrice.toFixed(2)}</li> : null}
                                {summary.lateFees ? <li>Late Fees: ${summary.lateFees.toFixed(2)}</li> : null}
                                {type=="customer" ? 
                                    summary.shippedTo ? <li>Shipped To: {summary.shippedTo.street}, {summary.shippedTo.city}, {summary.shippedTo.state}, {summary.shippedTo.postalCode}</li>
                                        : null
                                    :
                                    summary.shippedFrom ? <li>Shipped From: {summary.shippedFrom.street}, {summary.shippedFrom.city}, {summary.shippedFrom.state}, {summary.shippedFrom.postalCode}</li>
                                        : null
                                }
                                {type=="seller" ? 
                                    summary.siteFee ? <li>Site Fee: ${summary.siteFee.toFixed(2)}</li> : null
                                    : null
                                }
                                {type=="customer" ? 
                                    summary.totalCost ? <li>Total Cost: ${summary.totalCost.toFixed(2)}</li> : null
                                    :
                                    summary.profit ? <li>Profit: ${summary.profit.toFixed(2)}</li> : null
                                }   
                            </ul>
                        </li>))}
                    </ul>
                : <p>Error loading data</p>}
            </div>

        </Layout>
            
        </>
    )
}