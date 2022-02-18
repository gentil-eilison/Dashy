import React from 'react'
import FloatingInput from '../components/Input/FloatingInput'

import rightGreenPiece from '../assets/images/rightPiece.svg'
import leftGreenPiece from '../assets/images/leftPiece.svg'
import greenLeaf from '../assets/images/leaf.png'

import '../styles/App.scss'

function App() {
  return (
    <main>
        <img 
          src={leftGreenPiece} 
          alt="Green left component ice-cream shaped" 
          className="float-left" 
          id="left-strip"/>

        <article id="loginForm">
          <form action="/login" method="POST">
            <header>
              <img src={greenLeaf} alt="A green vector leaf" />
              <h1>Olá! Faça seu login abaixo.</h1>
            </header>

            <FloatingInput type='text' required name="username">Usuário</FloatingInput>
            <FloatingInput type="password" required name="password">Senha</FloatingInput>

            <div id="checkbox-group">
              <input type="checkbox" name="rememberme" id="rememberme" />
              <label htmlFor="rememberme">Lembrar-me</label>
            </div>

            <footer className="form-footer">
              <a href="/forgotPassword">Esqueci minha senha</a><br />
              <input type="submit" value="Entrar" />
            </footer>
          </form>
        </article>

        <img 
          src={rightGreenPiece} 
          alt="Green component ice-cream shaped" 
          className="float-right"
          id="right-strip"/>
    </main>
  );
}

export default App;