import { Register } from './Register';
import propTypes from 'prop-types';

import s from './Registration.module.scss'
import { GetServerSidePropsContext } from 'next';

type Props = {
  data: Array<Object>;
  isLoggedIn: boolean;
  slugId: string;
}


function Registration({data: registrations, isLoggedIn, slugId}: Props) {
console.log(typeof registrations);
/*

    if (registrations === []) return (
      <p className={s.event__empty}>Engin hefur skráð sig á þettan viðburð</p>
    )
    return (
      <div className={s.event__registered}>
        <ul className={s.event__registeredList}>
          {registrations.length > 0 && registrations.map((registration) => {
            const {
              id, username, comment,
            } = registration;

            return (
              <li 
                className={s.event__registeredItem}
                key={id}>
                <span className={s.event__registeredName}> {username}</span>
                <span className={s.event__registeredComment}>{comment}</span>
              </li>
            )
          })}
        </ul>
        <section className={s.event__register}>
          <Register isLoggedIn={isLoggedIn} eventId={slugId}/>
        </section>
      </div>
    )*/
}


export default Registration