import React from 'react';
import { useState } from "react";
import './Loginform.css'

const Loginform = () => {
      const [formData, setFormData] = useState({
        email: '',
        password: ''
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
            <h1>Acesse o sistema</h1>
            <div className="input-field">
                <input type="email" name="mail" placeholder='E-mail' 
                onChange={(e) => setFormData({...formData, email: e.target.value})} />
                {///<FaUser className="icon" /> 
                }
            </div>

            <div className="input-field">
                <input type="password" name="pass" placeholder='Senha'
                onChange={(e) => setFormData({...formData, password: e.target.value})} />
                {///<FaLock className="icon" />
                }
            </div>

            <div className="recall-forget">
                {/*<label>
                    <input type="checkbox" />
                    Lembrar de mim
                </label>*/}
                <a href="#">Esqueceu a senha?</a>
                </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>
                    Não tem uma conta? <a href="#">Registrar-se</a>
                </p>
            </div>

        </form>
    </div>
    )
}

export default Loginform
