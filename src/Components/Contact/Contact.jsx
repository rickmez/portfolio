import './Contact.css'
import '../Tooltip/Tooltip.css'
import Tooltip from '../Tooltip/Tooltip';
import { useCallback ,useRef, useState } from 'react';
import { Checkbox, Alert} from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

import axios from 'axios';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from '@emailjs/browser';

const url = import.meta.env.VITE_POST_URL;

const api = axios.create({
    baseURL: url
})

function Contact() {

   // variables para Whatsapp
   const Input_email = useRef(null);
   const Input_message = useRef(null);
   const Input_name = useRef(null);
   const Input_company = useRef(null);

   const [number, setNumber] = useState("");
   let [show, setShow] = useState(false);
   let [success, SetSuccess] = useState(false);
   let [error_, setError] = useState(false);
   let [check, setCheck] = useState(false);


   // Variables para
   const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    if(form.current.user_name.value === "" || form.current.user_email.value === "" || form.current.message.value === ""){
        setShow(true);
    }
    else{
        emailjs
        .sendForm(import.meta.env.VITE_SERVICEID, import.meta.env.VITE_TEMPLATEID, form.current, {
            publicKey: import.meta.env.VITE_EMAILPUBLICID,
        })
        .then(
            () => {
                SetSuccess(true);
                console.log('SUCCESS!');
            },
            (error) => {
                setError(true);
                console.log('FAILED...', error.text);
                },
            );
    }
  };


   const templateMessage = useCallback( async(name, email, company, phoneNumber, message) => {
    let response = await api.post('/messages',{
        messaging_product: "whatsapp", 
        to: phoneNumber, 
        type: "template", 
        template: { 
            name: import.meta.env.VITE_TEMPLATE_NAME,
             language: { 
                 code: import.meta.env.VITE_LAN_CODE
                 } ,
            components:[
                {
                    type:"body",
                    parameters:[
                        {
                            "type":"text",
                            "text": name + " " + email
                        },
                        {
                            "type":"text",
                            "text": company
                        },
                        {
                            "type":"text",
                            "text":phoneNumber
                        },
                        {
                            "type":"text",
                            "text":message
                        }
                    ]
                }
            ]
        }
    },
    {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': import.meta.env.VITE_AUTH_TOKEN
        }
    })

    return response;
   },[])

   const CCMessage = useCallback( async ()=>{  
    setCheck(!check);
   },[check]);

   const SendMesage = useCallback( async () =>{

    let name = Input_name.current.value;
    let rawNumber = number.split("+");
    let email = Input_email.current.value;
    let phoneNumber = rawNumber[1];
    let message = Input_message.current.value;
    let company = Input_company.current.value;
        
    if(Input_email.current.value === "" || Input_message.current.value === "" || number === ""){
        setShow(true);
    }
    else{
        
        try{
            let cc = false;
        
            let res_ = await templateMessage(name, email, company, import.meta.env.VITE_PERSONAL_PHONE, message);
            
            if(check){
                cc = await templateMessage(name, email, company, phoneNumber, message);
            }
            console.log(res_);
            console.log(cc);
            if((res_.status === 200)){
                SetSuccess(true);
            }
            else{
                setError(true);
            }
        }
        catch(e){
            console.log(e)
            setError(true);
        }

    }

   },[number, templateMessage, check]);

    return (
        <>
            <div className="contentWrap">
                { error_ && <Alert className="alert" severity="error" onClose={() => {setError(false)}}> Disculpe hubo un error, lo estoy revisando </Alert>}
                { show && <Alert className="alert" severity="warning" onClose={() => {setShow(false)}}> Existen campos vacios </Alert>}
                { success && <Alert className="alert" severity="success" onClose={() => {SetSuccess(false)}}> Se envió el mensaje exitosamente </Alert>}                
                
                <h2> ¡Hablemos! </h2>

                <div className='cardHolder'>

                    <div className='contactcard'>
                        <div className='contactcardTitle'>
                            <img src="whatsapp.png" alt="" />
                            <h3>Whatsapp</h3>
                        </div>

                        <div className='contactcardContent'>
                            <div className='whatsappContact'>
                                <p>Puedes contactarme por whatsapp</p>
                                <img src="wpqr.png" alt="" />
                            </div>
                            
                            <div className='whatsappBot'>
                                <p>También Puedes usar mi Whatsapp bot para dejar un mensaje</p>
                                
                                <div className='form_'>
                                    <div className='field'>
                                        <label >Nombres: </label>
                                        <input className="name_" ref={Input_name} type="text" placeholder='Nombre completo o apodo' />
                                    </div>

                                    <div className='field' >
                                        <label >Empresa: </label>
                                        <input className="empresa_" ref={Input_company} type="text" placeholder='Nombre de la empresa' />
                                    </div>

                                    <div className='field' >
                                        <label >Email: </label>
                                        <input className="email_input" ref={Input_email} type="text" placeholder='example@email.com'/>
                                    </div>

                                    <div className='field_1' >
                                        <label>Número: </label>
                                        <PhoneInput
                                            placeholder="número de contacto"
                                            value={number}
                                            onChange={setNumber}/>

                                    </div>

                                    <div className='field' >
                                        <label >Mensaje: </label>
                                        <textarea ref={Input_message} name="message" id="msg" cols="30" rows= "9" placeholder='Déjame un mensaje y lo veré en cuanto pueda.'></textarea>
                                    </div>
                                    
                                    <div className='field_check'>
                                        <Checkbox onChange={CCMessage} checked={check} {...label} color="default"/> 
                                        <label> Enviame una copia de mis respuestas</label>
                                    </div>

                                    <button onClick={SendMesage}>Enviar</button>

                                </div>
                                
                            </div>
                        </div>
                    
                    </div>

                    <div className='contactcard'>
                        <div className='contactcardTitle'>
                            <img src="new.png" alt="" /><h3>Co</h3><h3>rr</h3><h3>e</h3><h3>o</h3>
                        </div>

                        <div className='contactcardContent'>
                            <p> Puedes dejarme un correo también a través de mi correo universitario <b> ricardo.carbajal@utec.edu.pe </b> 
                            o a mi correo personal <b>mezarina.carbajal@gmail.com</b>
                            </p>
                            <br />
                                También puedes enviar tu correo desde aquí
                            <br />

                            <form ref={form} onSubmit={sendEmail}>
                                
                                <div className='formField'>
                                    <label>Name</label>
                                    <input className="formName" type="text" name="user_name" />
                                </div>

                                <div className='formField'>
                                    <label>Email</label>
                                    <input className="formEmail" type="email" name="user_email" />
                                </div>

                                <div className='formField'>
                                    <label>Message</label>
                                    <textarea className="formMsg" name="message" />
                                </div>
                                
                                
                                <input className="submit_" type="submit" value="Enviar" />
                            </form>

                        </div>
                        

                    </div>
                    
               
                </div>

            </div>
        </>
      );
}

export default Contact;