
import { ReactChild, ReactChildren } from 'react';
import s from './Layout.module.scss';

type Props = {
  title: string;
  children: ReactChild;
  footer: JSX.Element;
}

export function Layout({ title, children, footer }: Props) {
  return (
    <div className={s.layout}>
      <header className={s.layout__header}>
        <h1>{title}</h1>
      </header>
      <main className={s.layout__main}>
        {children}
      </main>
      <footer className={s.layout__footer}>
        {footer}
      </footer>
    </div>
  )
}
