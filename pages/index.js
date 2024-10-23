import React from 'react';
import Head from 'next/head';
import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function Home(props) {

  return(
    <>
      <Head>
        <title>Friends Meetups</title>
        <meta name='description' content='Browse a list of active friends meetups!'/>
      </Head>
      <MeetupList meetups={props.meetups}/>
    </>
  )
}


export async function getStaticProps() {

  const client = await MongoClient.connect('mongodb+srv://Jackson:test123@cluster0.fgkr5.mongodb.net/Meetups?retryWrites=true&w=majority');
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  console.log(meetups)
  
  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default Home