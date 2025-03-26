import React from 'react'
import './Registrationform.css'
import { useState } from "react";

const Registrationform = () => {
      const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',

    })


    /* função para fazer o envio do form */

    const handleSubmit = (event) => {
        event.preventDefault();

        
        let validationErros = {}
        if(formData.email === "" || formData.email === null) {

            validationErros.email = "E-mail is required"
            document.getElementsByName('mail')[0].placeholder=validationErros.email;

        } 
        if(formData.password === "" || formData.password === null) {
            
            validationErros.password = "Password is required"
            document.getElementsByName('pass')[0].placeholder=validationErros.password;
        } 
        //console.log(validationErros.password)
        console.log(formData)
        
            
    
    }

  
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Crie sua conta XCloud</h1>

            <div className="input-field">
                <input type="name" name="name" placeholder='Nome Completo' 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
                
            </div>

            <div className="input-field">
                <input type="email" name="mail" placeholder='E-mail' 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
                
            </div>

            <div className="input-field">
                <input type="password" name="pass" placeholder='Senha'
                //onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                
            </div>

            <div className="input-field">
                <input type="password" name="pass" placeholder='Confirmar senha'
                onChange={(e) => setFormData({...formData, password: e.target.value})} />
                
            </div>

          

            <button>Cadastrar</button>

            

        </form>
    </div>
  )
}

export default Registrationform
