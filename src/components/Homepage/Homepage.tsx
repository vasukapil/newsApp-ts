import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React,{useState,useEffect,} from 'react'
import './Homepage.css'



const Homepage:React.FC = () => {

    let navigate = useNavigate();

    let[data,setData]=useState<any[]>([]);
    const [pageSize,setPageSize]=useState(5);
    // let [dummy,setDummy]=useState<any[]>(data.slice(0,21));
    const [page, setPage] = useState(1)



    useEffect(()=>{


        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=710a8d822eb14b20b65ac4f821e9fa80&page=${page}&pageSize=${pageSize}`)
        .then(res=>setData(res.data.articles)
        
        )
        
        

    },[page,pageSize])

    useEffect(() => {
        const onScroll = function () {
           if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
             console.log("you're at the bottom of the page")
             setPage(page+1);
             setPageSize(pageSize+5);
           }
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
     },[])

   

    // english = data.filter((arr)=>{

    //     return arr.country==='us'


    // })

   

   
      console.log(data)
      console.log(page,pageSize)
    //   console.log(page)
    //   console.log(pageSize)
    

  return (
    <div>
      
        {


            data && 
            
          
            data.map((news,idx)=>(


                <div key={idx}>
                    <div className="news__component">
                        <span>{idx+1}</span>
                         <h2 style={{display:'inline-block'}}>{news.title}</h2>
                         <p onClick={()=>{navigate('/category')}}>Read More...</p>
                    </div>
                </div>
                
            )
                

            )


           
            
        }
       
    </div>
  )
}

export default Homepage