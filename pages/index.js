import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import viewingdata from '@/data/viewingData'
import { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [allItems, setAllItems] = useState([]);
  const [itemsByName, setItemsByName] = useState([]);
  const [loading, setLoading] = useState(false);

  let search = "NONE"
  let param = new URLSearchParams();

  useEffect(() => {
    setLoading(true);

    if(search == "NONE") {
      viewingdata.allItems()
        .then((data) => {
          setAllItems(data);
          setLoading(false);
          console.log(data);
        })
        .catch((e) => console.log(e));
      }
    else {
      viewingdata.itemsByName(search)
        .then((data) => {
          setItemsByName(data);
          setLoading(false);
          console.log(data);
        })
        .catch((e) => console.log(e));
      }
    }, []);

  


  if(loading)
    return(
      <>
        <Head>
          <title>View Rentals</title>
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
        <title>View Rentals</title>
        <meta name="View items available to rent" content="Demop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Layout>
      <div className={styles.main}>
        <h1>Available Rentals</h1>
        <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Number in Stock</th>
                <th>Seller Rating</th>
              </tr>
            </thead>
            <tbody>
              {allItems.map((item, i) => (
                <tr key={i}>
                  <td data-label="Name">
                    <Link href={{pathname: '/item', query:{id:item.sellerItemId}}}>
                      {item.name}
                    </Link>
                  </td>
                  <td data-label="Price">${item.price.toFixed(2)}</td>
                  <td data-label="Number in Stock">{item.inventory}</td>
                  <td data-label="Seller">{item.seller.sellerName}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

    </Layout>
        
    </>
  )
}


/*
<Link href={{pathname: '/item', query: item.sellerItemId}}>
                      {item.name}
                    </Link>
*/