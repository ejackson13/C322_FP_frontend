import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/Layout'
import viewingdata from '@/data/viewingData'
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  const [allItems, setAllItems] = useState([]);
  const [itemsByName, setItemsByName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();



  useEffect(() => {
    setLoading(true);
      viewingdata.allItems()
        .then((data) => {
          setAllItems(data);
          setLoading(false);
          console.log(data);
        })
        .catch((e) => console.log(e));
      
    }, []);

  const searchByName = (input) => {
    console.log("query");
    viewingdata.itemsByName(input)
    .then((data) => {
      setItemsByName(data);
      setLoading(false);
      console.log(data);
    })
    .catch((e) => console.log(e));
  }

  
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(type);
      //console.log(userId);

      console.log(name)
      setSearch(name)
      //console.log(search)
      searchByName(name);
    /*  
      setLoading(true);
          viewingdata.itemsByName(search)
            .then((data) => {
              setItemsByName(data);
              setLoading(false);
              console.log(data);
            })
            .catch((e) => console.log(e)); */

      //router.replace(router.asPath);
    };


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


/*
else if(search != '')
    return(
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

        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search"/>
            <button type="submit">Search</button>
        </form>

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
              {itemsByName.map((item, i) => (
                <tr key={i}>
                  <td data-label="Name">
                    <Link href={{pathname: '/item', query:{id:item.sellerItemId}}}>
                      {item.name}
                    </Link>
                  </td>
                  {item.price ? <td data-label="Price">${item.price.toFixed(2)}</td> : null}
                  <td data-label="Number in Stock">{item.inventory}</td>
                  {item.seller ? <td data-label="Seller">{item.seller.sellerName}</td> : null}
                </tr>
              ))}
            </tbody>
          </table>
      </div>

    </Layout>
        
    </>
    )
*/




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

        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Search"/>
            <button type="submit">Search</button>
        </form>

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
              {search == ''? 
              allItems.map((item, i) => (
                <tr key={i}>
                  <td data-label="Name">
                    <Link href={{pathname: '/item', query:{id:item.sellerItemId}}}>
                      {item.name}
                    </Link>
                  </td>
                  {item.price ? <td data-label="Price">${item.price.toFixed(2)}</td> : null}
                  <td data-label="Number in Stock">{item.inventory}</td>
                  {item.seller ? <td data-label="Seller">{item.seller.sellerName}</td> : null}
                </tr>
              ))
            : itemsByName.map((item, i) => (
              <tr key={i}>
                <td data-label="Name">
                  <Link href={{pathname: '/item', query:{id:item.sellerItemId}}}>
                    {item.name}
                  </Link>
                </td>
                {item.price ? <td data-label="Price">${item.price.toFixed(2)}</td> : null}
                <td data-label="Number in Stock">{item.inventory}</td>
                {item.seller ? <td data-label="Seller">{item.seller.sellerName}</td> : null}
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