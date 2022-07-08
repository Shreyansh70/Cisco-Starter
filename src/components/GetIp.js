import React , {useState , useEffect} from 'react'
function GetIp({isipv4}) {
    let url = "https://api.ipify.org?format=json";
    const [add ,setAdd] = useState("");
    const fetchdata = async () => {
        try {
          const response = await fetch(url);
        //   console.log(response);
          const tours = await response.json();
          setAdd(tours.ip)
        } 
        catch (error) {
            
          console.log(`Why the heck is this happening`);
        }
    }
    useEffect(()=>{
        if (!isipv4) 
        url = "https://api64.ipify.org?format=json";
        fetchdata();
    } , []);
  return (
    <div>{add}</div>
  )
}

export default GetIp