import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const { title, image, address, description} = data;

        const client = await MongoClient.connect('mongodb+srv://Jackson:test123@cluster0.fgkr5.mongodb.net/Meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        try {
            const result = await meetupsCollection.insertOne(data);
            // console.log(result);
            res.status(201).json({ message: 'Meetup inserted' });
        } catch (error) {
            console.error('Error inserting meetup:', error);
            res.status(500).json({ message: 'Inserting meetup failed' });
        } finally {
            client.close();
        }
    }
}

export default handler;
