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

const resend = new Resend("");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {

        const { email, id } = req.body;

        console.log(await sha256(`${email}${id}`));

        const hash = await sha256(`${email}${id}`)

        const emailhash = await sha256(email)

        
        const { data: session, error } = await supabase
        .from('session_tokens')
        .insert([
        { tokens: `${hash}` },
        { emailhash: emailhash}
         ])
        .select()

        if(error){
            res.status(500).json({ "d": error });
        }
        
        if(session) {
          
            const data = await resend.emails.send({
                from: 'GorrilaX@quantum-xch.com',
                to: email,
                subject: 'Vote of no cofindence poll',
                react: Template({ username: 'Student', session: hash }),
              });
              res.status(200).json({ data });
        }

        
    
        res.status(200).json({ error: "Error sending mail" });
      } catch (error) {
        res.status(500).json({ error });
      }
}