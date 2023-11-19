import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Session() {
  const [apiData, setApiData] = useState<Boolean | string | null>(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [loading, setLoading] = useState<string>("Yes")
  const [vote, setVote] = useState<string | null>(null)
  const [blocked, setBlocked] = useState<boolean>(false)
  const router = useRouter()


  const handleYesClick = () => {
    setLoading("Processing");
    console.log(vote);
  
    if (vote) {
      const sendVote = async () => {
        const payload = {
          vote: vote,
          hash: session,
        };
  
        try {
          const response = await fetch("/api/vote", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          if(response.ok){
            localStorage.setItem('vote', 'voted')
          }

          const data = await response.json();
          console.log(data)
          setPopupOpen(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      sendVote();
    }
  };

  const handleVoteForClick = () => {
    // Handle 'Yes' button click
    setVote("FOR")
    setPopupOpen(true); // Close the popup
  };

  const handleVoteAgainstClick = () => {
    // Handle 'Yes' button click
    setVote("AGAINST")
    setPopupOpen(true); // Close the popup
  };

  const handleNoClick = () => {
    // Handle 'No' button click
    console.log('No button clicked');
    setPopupOpen(false); // Close the popup
  };
  
  const { session } = router.query;

  useEffect(() => {
    // Check if session is defined before making the API request

    const voted = localStorage.getItem('vote')
    console.log(voted)
    if (voted == "voted") {
     setBlocked(true)
    }

    if (session) {
      // Define the API endpoint and payload
      const apiUrl = '/api/verify';

      const payload = {
        hash: session
      };

      // Make the API request
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }

          // Parse the JSON response
          const data = await response.json();
          console.log(data);
          // Set the data in the component state
          setApiData(data.status);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      // Call the fetchData function
      fetchData();
    }
  }, [session, blocked]);

  if (blocked) {
    return (
      <div className='bg-white text-black h-[100vh] flex items-center justify-center'>
        <h1 className='text-2xl text-center'>You have voted already</h1>
      </div>
    );
  }

  return (<div className='text-red-800 flex justify-center items-center bg-white h-[100vh]'>
    
     {
      apiData ? 
      <div className='text-center'>
       <h1>Your voting session is valid</h1>
       <h3>Please cast your vote</h3>
       <div>
       <button className="bg-green-500 text-white px-4 py-2 rounded mr-2" onClick={handleVoteForClick}>For</button>
       <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleVoteAgainstClick}>Against</button>
       </div>
       
      </div> : <div>false</div>
     }
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p className="mb-4">Are you sure that is the vote you want to make?</p>
            <button
              onClick={handleYesClick}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              {loading}
            </button>
            <button
              onClick={handleNoClick}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
  </div>
  )
}

export default Session 