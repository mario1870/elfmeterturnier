
// pages/api/proxy.js
import axios from 'axios';

export default async (req, res) => {
  try {
    const response = await axios.get('https://one1er-api.onrender.com/teams', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
};
