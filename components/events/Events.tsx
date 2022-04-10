
import Link from 'next/link';
import s from './Events.module.scss';

type Props = {
  title:string;
  events:Array<Event>;
}
type Event = {
  id: 'number';
  name: 'string';
  slug: 'string';
  description: 'string';
}


function Events({ title, events }: Props) {

  console.log("here");
  console.log(events);

  return (
    <section className={s.events}>
      <h2 className={s.events__title}>{title}</h2>
      <ul className={s.events__list}>
        {events.map((item: Event, i) => {
          return (
            <li className={s.events__event} key={i}>
              <Link href={`/${item.id}`}>
                <a className={s.events__eventLink}>{item.name}</a></Link>
              <p className={s.events__eventDescription}>{item.description}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Events