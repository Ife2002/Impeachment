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

        const { hash } = req.body;

        let { data, error } = await supabase
        .from("session_tokens")
        .select('*')
        .eq('tokens', `${hash}`);


        if(data?.length == 1){
            res.status(200).json({ status: true });
        }
        
      
        
    
        res.status(200).json({ status: false });
      } catch (error) {
        res.status(500).json({ error: false });
      }
}