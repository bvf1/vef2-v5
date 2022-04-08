
import classNames from 'classnames';
import propTypes from 'prop-types';
import s from './Button.module.scss';


export function Button({ children, onClick, size }) {

    return ( 
        <button 
            onClick={onClick}
            className={classNames(s.button, size === 'large' && s.large, size=== 'small' && s.small)}

       >
            {children}{' '}
        </button>
    );
} 

Button.propTypes = {
    children: propTypes.oneOfType([propTypes.element, propTypes.string]).isRequired,
    onClick: propTypes.func.isRequired,
    size: propTypes.oneOf(['small', 'large']),
}