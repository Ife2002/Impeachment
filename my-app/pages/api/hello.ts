// Import necessary modules
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';

// Replace with your Supabase URL and API key
const supabaseUrl = '';
const supabaseKey = ''; // Replace with your Supabase API key

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Replace 'spendingLimitPda' with the actual field you want to query
    const { matriculationNumber } = req.body;

    // Check if the spendingLimitPda is provided
    if (!matriculationNumber) {
      return res.status(400).json({ error: 'spendingLimitPda is required' });
    }

    // Fetch data from Supabase
    const { data, error } = await supabase
      .from('mte_students')
      .select('*')
      .eq('mat_number', matriculationNumber)

    // Check for errors
    if (error) {
      console.error('Supabase error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // Check if data is not found
    if (!data) {
      return res.status(404).json({ error: 'Data not found' });
    }

    // If everything is successful, return the data
    res.status(200).json({ data });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

