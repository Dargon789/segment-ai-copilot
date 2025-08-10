// api.tsx (Next.js API for fetching trading data)

import type { NextApiRequest, NextApiResponse } from 'next';

const ALPHA_MARKETS_API_KEY = 'YOUR_ALPHA_MARKETS_API_KEY';  // Replace with your actual API key
const BASE_URL = 'https://api.alphamarkets.com/v1/markets'; // Replace with the actual Alpha Markets base URL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { symbol } = req.query;  // Example: EURUSD, BTCUSD, XAUUSD
  if (!symbol) {
    res.status(400).json({ error: 'Symbol is required' });
    return;
  }

  try {
    // Fetch trading data from Alpha Markets API
    const response = await fetch(`${BASE_URL}/quotes?symbol=${symbol}&apikey=${ALPHA_MARKETS_API_KEY}`);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ data });
    } else {
      res.status(500).json({ error: data.message });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch trading data' });
  }
}
