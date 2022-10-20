import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import { getUser } from "../../services/authorize";
import './kmutnb_location.css'
const Kmutnblocation=()=>{
    const [kmutnblocations,setKmutnblocations] = useState([])
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/kmutnblocations`)
        .then(response=>{
            setKmutnblocations(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            <h1>หอพักใกล้พระนครเหนือ</h1>
            {!getUser() &&(
                <div className="interest">
                   <button>
                        <Link to ="/login" className="login">ลงประกาศได้ที่นี่!</Link>
                    </button>
                </div>) 
                    }
            {getUser() &&(
                <div className="interest">
                    <button>
                        <Link to ="/kmutnblocation/create" className="here">ลงประกาศประกาศฟรีได้ที่นี่!</Link>
                    </button>
                </div>) 
                    }
            <hr/>
            {kmutnblocations.map((kmutnblocation,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${kmutnblocation.Image}`} alt="..."/>
                    <div className="info">
                        <h1>{kmutnblocation.name}</h1>
                        <p className="text-muted">ราคา : {kmutnblocation.price} บาท/เดือน </p>
                        <p>รายละเอียด : {kmutnblocation.detail.substring(0,180)}</p>
                        <p className="text-muted">เบอร์โทรศัพท์: {kmutnblocation.telephone}</p>
                    </div>
                </div>
            </div>
                ))}
        </div>
)
}
export default Kmutnblocation;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
