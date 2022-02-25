/**
 * Homepage componenet
 */

import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../provider/Auth'

import rightGreenPiece from '../assets/images/rightPiece.svg'
import leftGreenPiece from '../assets/images/leftPiece.svg'
import greenLeaf from '../assets/images/leaf.png'

import '../styles/App.scss'

function App() {
  const { register, handleSubmit } = useForm()
  const { signIn } = useContext(AuthContext)

  async function handleSignIn(data: any) {
      try {
        await signIn(data)
      } catch(error) {
        throw error
      }
  } 

  return (
      <main id="loginScreen">
          <img 
            src={leftGreenPiece} 
            alt="Green strip positioned at the top-left corner of the screen" 
            className="float-left" 
            id="left-strip"/>

          <article id="loginForm">
            <form onSubmit={handleSubmit(handleSignIn)} action="/dashboard">
              <header>
                <img src={greenLeaf} alt="A green vector leaf" />
                <h1>Olá! Faça seu login abaixo.</h1>
              </header>

              <div className="floatingGroup">
                <input type="text" id="username" {...register("username")} className="floatingInput" placeholder=' '/>
                <label htmlFor="username" className='floatingLabel'>Usuário</label>
              </div>

              <div className="floatingGroup">
                <input type="password" id="password" {...register("password")} className="floatingInput" placeholder=' '/>
                <label htmlFor="password" className='floatingLabel'>Senha</label>
              </div>

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
            alt="Green strip component positioned at the bottom right corner of the screen" 
            className="float-right"
            id="right-strip"/>
      </main>
  );
}

export default App;