import './contact.css'
import { useEffect, useRef, useState } from 'react';
import {toast} from "react-toastify"

function Contact(){
    // refrences
    const emailInputRef = useRef();
    const textAreaRef = useRef();
    const selectOptionRef = useRef();
    
    // states
    const [formData , setFormData] = useState({
                
                email:"",
                ticket:"",
                text :""
    })
    const [submitting,isSubmitting] = useState(false);
    const [styleState,isStyleState] = useState("null");

console.log("form",formData)
// actions style for submit btn
     let style = {
        faild:{
            color:"var(--white)",
            backgroundColor:"var(--red)"
        },
        success:{
            color:"var(--white)",
            backgroundColor:"var(--green)"
        }
     }

    const [btnState , setBtnState]=useState("Submit");

      function gettingValues(e){
        setFormData(
             {
                email:emailInputRef.current.value,
                ticket:selectOptionRef.current.value,
                text :textAreaRef.current.value
            }
        )

    }

    function selectStyle(){
        if(styleState === "null"){
            return null;
        }
        else if(styleState === "submitted"){
            return style.success;
        }

        else if(styleState === "failed"){
            return style.faild;
        }
    }

    

     function formHandler(e){
        e.preventDefault();
        isSubmitting(true);
        
    }

    useEffect(()=>{
        console.log("form inside use effect",formData)
    },[formData])
    useEffect(()=>{
        
        if(submitting){
            setBtnState("Loading");
            gettingValues();
        // fetching 
            fetch("/api/support",{
            method:"POST",
            body:JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
            mode:'cors'
        })
        .then((res)=> {return res.json()}) // cant call res.json more than once
        .then(data => 
            { 
                if(data.success){
                    setBtnState("Submitted");
                isStyleState("submitted");
                toast.success(data.message)
            }
                else{
                    toast.error(data.message)
                }
            
        }).catch(err => {
            setBtnState("Send Again");
            isStyleState("failed");
            toast.error(err.message)
            console.log("error",err);
        });
            isSubmitting(false);

        }
    },[submitting])


    
    return(
<section id='contact' className="contact" >
    
            
            <form onSubmit={formHandler} className="form">
            
                <input    ref={emailInputRef} type="email"  name="subj"  placeholder='Your Email' required />
                <select id="ticket" name="ticket"  ref={selectOptionRef} required>
                    <option value="" selected disabled>Select a Ticket</option>
                    <option value="Issue in ordering product">Issue in ordering product</option>
                    <option value="Order Paid but not recieved">Order Paid but not recieved</option>
                    <option value="Email or Profile Issue">Email or Profile Issue</option>
                    <option value="Other Issue">Other Issue</option>
                </select>
                <textarea   ref={textAreaRef} type="text"  name="text"   />
                <button style={selectStyle()} className='form-btn' disabled = {submitting}>{btnState}</button>
            </form>
            <div className="socials">
                    <a target="_blank" className='socials-a' rel='noreferrer' href='https://www.linkedin.com/in/baraa-mohamed-4b2034284/'><h4 className='socials-h4'>LinkedIn</h4></a>
                    <a target="_blank" className='socials-a' rel='noreferrer' href=''><h4 className='socials-h4'>Facebook</h4></a>
                    <a target="_blank" className='socials-a' rel='noreferrer' href=''><h4 className='socials-h4'>Instagram</h4></a>
            </div>
        </section>
        
    )
}


export default Contact;