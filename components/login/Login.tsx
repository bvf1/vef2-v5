import { Link } from 'react-router-dom';
import { Button } from '../button/Button';
import propTypes from 'prop-types';
import s from './Login.module.scss';

export function Login({setLoginState, isLoggedIn}) {

  if (!isLoggedIn) return (
    <div className={s.login}>
      <Link className={s.isLoggedIn} to="/login">Innskránining</Link>
      <Button 
        onClick={(e) => {setLoginState(true)}} 
        size="small"
      >
        Nýskráning
      </Button>
    </div>
  )
  return (
    <section className={s.login}>
      <p className={s.isLoggedIn}>Skráður inn sem <b>test</b></p>
      <Button 
        onClick={(e) => {setLoginState(false)}} 
        size="small"
      >
        Útskrá
      </Button>
    </section>
  )

}

Login.propTypes = {
  setLoginState: propTypes.func.isRequired,
  isLoggedIn: propTypes.bool.isRequired,

}