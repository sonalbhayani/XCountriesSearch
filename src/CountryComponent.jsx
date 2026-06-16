import {useState,useEffect} from 'react'
import axios from 'axios'

export default function CountryComponent() {
    const [data,setData]=useState([]);
    const [displayData,setDisplayData]=useState([]);
    const [input,setInput]=useState("");
    useEffect(()=>{
        axios.get(" https://countries-search-data-prod-812920491762.asia-south1.run.app/countries")
        .then((res)=>{setData(res.data)
            setDisplayData(res.data)
        })
        .catch((error)=>console.log(error))
    },[])
    useEffect(()=>{
        if(!input){
            setDisplayData(data);
           
        }else{
             
               setDisplayData(data.filter((ele)=>  ele.common.toLowerCase().startsWith(input.toLowerCase())));
             
        }
       
    },[input,data])
   
  return (
    <div className='container m-5'>
        <input type="text" name="input" className='form-control' id="input" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div className='row mt-5'>
            {displayData.map((ele)=>( 
                <div className='col-1 div-data m-5 countryCard' key={ele.common} >
                    <div className="card">
                    <img src={ele.png} className="card-img-top img" alt={ele.common}/>
                    <div className="card-body">
                        <h5 className="card-title">{ele.common}</h5>
                        
                    </div>
                    </div>
                </div>))}
           
        </div>
    </div>
  )
}
