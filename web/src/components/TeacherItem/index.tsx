import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://conteudo.imguol.com.br/c/esporte/64/2020/02/19/andrea-pirlo-ex-jogador-italiano-que-virou-comentarista-da-sky-sports-1582129806165_v2_900x506.jpg"
          alt="André"
        />
        <div>
          <strong>André Idalgo Matama</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Caros amigos, a infinita diversidade da realidade única nos obriga à
        análise das condições epistemológicas e cognitivas exigidas. Por outro
        lado, a complexidade dos estudos efetuados nos obriga a inferir a
        invalidez da fundamentação metafísica das representações.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <a href="">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;
