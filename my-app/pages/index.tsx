import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ data, setData] = useState()
  const [matNumber, setMatNumber] = useState<string>('');
    
  
    async function handleMatNumberSearch() {
      let payload = {
        matriculationNumber: matNumber
       };
      try {
        const response = await fetch('/api/hello', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
  
        if (!response.ok) {
          console.log(response)
        }
  
        const data = await response.json();

        if(data){

          if (data.data.length == 1){

           console.log(data.data[0].email);

           let payload = {
            email: data.data[0].email,
            id: data.data[0].id
           };

           const response = await fetch('/api/otp', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
    
          if (!response.ok) {
            console.log(response)
          }
    
          const email = await response.json();
          console.log(email)
          }

        }

      } catch (error) {
        console.error('Error:', error);
      }
     }


  // Handler function to update the state when input changes
  const handleMatNumberChange = (e: any) => {
    setMatNumber(e.target.value);
  };

  return (
    <div className={`bg-white max-w-full h-[100vh] p-5 w-[100vw] flex flex-col justify-center items-center text-black ${inter.className}`}>
  
      <h1 className="text-2xl px-[10%] font-semibold text-center">Vote of no confidence signatures</h1>
      <div className="h-[70%] mt-4 flex flex-col justify-center items-center border-[3px] border-[#00000010] rounded-3xl px-5 w-[100%]">
      <input placeholder="Enter Matric number" onChange={handleMatNumberChange} value={matNumber} className="bg-black text-white p-4 rounded-2xl justify-center w-[100%]" />
      <button onClick={handleMatNumberSearch} className="bg-white border-[1px] p-3 px-5 rounded-2xl border-[#00000040] mt-4">Get Vote session code</button>

    </div>
      
    </div>
  )
}
