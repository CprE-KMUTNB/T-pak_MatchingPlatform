import axios from "axios";
import { useState,useEffect} from "react";
import {Link} from 'react-router-dom';


const Kmutnbroomate=(props)=>{
    
    function genderCheck() {
        if (Roomates.already=='YES') {
            document.getElementById("ifYes").style.display = "block";
            
        } 
        else {
            document.getElementById("ifYes").style.display = "none";
            
        }
    }
    const place = props.location.state.userChoice2.toUpperCase()
    const [Roomates,setRoomates] = useState([])
    
    const fetchData=()=>{
        axios
        .get(`${process.env.REACT_APP_API}/roomate/${place}`)
        .then(response=>{
            setRoomates(response.data)
        })
        .catch(err=>alert(err));
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="post-container">
            <h1>รูมเมท {place}</h1>
            <hr/>
            {Roomates.map((Roomate,index)=>(
            <div className="row" key={index} style={{border:'3px solid grey'}}>
                <div className="column" key={index} >
                    <img src={`./uploads/${Roomate.Image}`} alt="..."/>
                    <div className="info">
                        <p>ชื่อ : {Roomate.name}</p>
                        <p>มหาวิทยาลัย : {Roomate.UNI}</p>
                        <p>เพศ : {Roomate.gender}</p>
                        <p>ชั้นปี : {Roomate.year}</p>
                        <p className="text-muted">ราคาต่อคน : {Roomate.price} บาท/คน </p>
                        <p>รายละเอียด : {Roomate.detail.substring(0,180)}</p>
                        <p className="text-muted3">เบอร์โทรศัพท์: {Roomate.telephone}</p>
                    </div>
                    <button className="select"> 
                        <Link to={`/roomate/${Roomate.slug}`}>
                            select
                        </Link>
                    </button>
                </div>
            </div>
                ))}
        </div>
)
}
export default Kmutnbroomate;
/*
<Link to={'/'}>
                                <h2>{kmutnblocation.Name}</h2>
                            </Link>
                            */




    

            
            
