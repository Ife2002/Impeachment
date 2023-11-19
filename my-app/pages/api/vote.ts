// Import necessary modules
import { createClient } from '@supabase/supabase-js';
import type { NextApiRequest, NextApiResponse } from 'next';
import { sha256 } from 'crypto-hash';
import Template from '../components/Template';
import { Resend } from 'resend';

// Replace with your Supabase URL and API key
const supabaseUrl = '';
const supabaseKey = ''; // Replace with your Supabase API key

const supabase = createClient(supabaseUrl, supabaseKey);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {

        const { vote, hash } = req.body;

        console.log("vote: " + vote);
        console.log("hash: " + hash)

        const { data, error } = await supabase
        .from('session_tokens')
        .update({'vote': vote})
        .eq('tokens', hash)
        .select();

        if(error){
            console.log(error)
            res.status(500).json({ error: "Something went wrong while recording vote" });
        }

        res.status(200).json({ success: true });
      } catch (error) {
        res.status(500).json({ error });
      }
}