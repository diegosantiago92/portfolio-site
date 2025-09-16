"use client";

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import estilos from './FormularioContato.module.css';

export default function FormularioContato() {
  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    assunto: '',
    email: '',
    mensagem: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_lz61vxr',
      'template_5vz3mtc',
      form,
      'c9WY81NsLkWB4GxmB'
    )
    .then(() => {
      setStatus('Mensagem enviada com sucesso!');
      setForm({
        nome: '',
        telefone: '',
        assunto: '',
        email: '',
        mensagem: '',
      });
    })
    .catch(() => {
      setStatus('Erro ao enviar a mensagem. Tente novamente.');
    });
  };

  return (
    <div className={estilos.container}>
    <div className={estilos.formulario_container}>
      <h2 className={estilos.titulo}>Entre em contato comigo</h2>
      
      <form onSubmit={handleSubmit} className={estilos.formulario}>
        
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          value={form.nome}
          onChange={handleChange}
          required
          className={estilos.input}
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={form.telefone}
          onChange={handleChange}
          required
          className={estilos.input}
        />

        <input
          type="text"
          name="assunto"
          placeholder="Assunto"
          value={form.assunto}
          onChange={handleChange}
          required
          className={estilos.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          value={form.email}
          onChange={handleChange}
          required
          className={estilos.input}
        />

        <textarea
          name="mensagem"
          placeholder="Escreva sua mensagem"
          rows="4"
          value={form.mensagem}
          onChange={handleChange}
          required
          className={estilos.textarea}
        />

        <button type="submit" className={estilos.botao}>
          Enviar
        </button>
      </form>

      {status && <p className={estilos.status}>{status}</p>}
    </div>
    </div>
  );
}
