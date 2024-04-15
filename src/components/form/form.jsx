import React, { useState } from 'react';
import { TextField, MenuItem } from '@mui/material';
import './form.css';

const sexoOptions = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'feminino', label: 'Feminino' },
  { value: 'outro', label: 'Outro' }
];

const Formulario = () => {
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();


    if (!email.trim()) {
      setEmailError(true);
      return;
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value.trim();
    setEmail(emailValue);

    if (emailValue === '') {
      event.target.classList.add('empty-email');
    } else {
      event.target.classList.remove('empty-email');
    }
    setEmailError(false);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <TextField
        fullWidth
        id="nome"
        name="nome"
        label="Nome"
        margin="normal"
        variant="outlined"
        className="form-field"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        type="email"
        label="E-mail"
        margin="normal"
        variant="outlined"
        className="form-field"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailError ? "Campo obrigatório" : ""}
      />
      <TextField
        select
        fullWidth
        id="sexo"
        name="sexo"
        label="Sexo"
        margin="normal"
        variant="outlined"
        className="empty-email"
      >
        {sexoOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
};

export default Formulario;
