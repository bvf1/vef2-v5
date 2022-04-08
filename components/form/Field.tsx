import React from 'react'
import classNames from 'classnames';
import propTypes from 'prop-types';
import s from './Field.module.scss'

export type Props = {
  what: string;
  type: string;
  text: string;

}

function Field({what, type, text}: Props) {
  return (
    <div className={classNames(s.field)}>
        <label className="field__label" for={what}>{text}</label>
        <input className="field__input" type={type} name={what} id={what} />    
    </div>
  )
}

export default Field

Field.propTypes = {
  what: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
}