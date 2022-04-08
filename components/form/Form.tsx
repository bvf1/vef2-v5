import classNames from 'classnames';
import propTypes from 'prop-types';

import s from './Form.module.scss';

export type Props = {
    children: object;
    action: string;
    autocomplete: string;
}

export function Form({children, action, autocomplete = "on"}: Props) {
    console.log("Form children", children);
    return (
        <form 
            className={classNames(s.form)}
            method="post"
            action={action}
            autoComplete={autocomplete}
        >
            {children}{' '}
        </form>
    )
}

