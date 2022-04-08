import propTypes from 'prop-types';
import { Button } from "../button/Button";
import { Form } from "../form/Form";
import Field from '../form/Field';
import { useState } from 'react';

type Props = {
    data: 'array';
    isLoggedIn: 'boolean';
    slugId: 'string';
    eventId: 'string;'
  }

export function Register({isLoggedIn, eventId}: Props) {
    const [registered, setRegistered] = useState(false);

    if (registered) return (
        <p>Þú hefur skráð þig á þennan viðburð</p>
    )
    if (isLoggedIn) return (
        <Form action={`/events/${eventId}`}>
            <Field
                what="comment"
                type="text"
                text="Athugasemd: "
            />

            <Button 
                onClick={(e) => {setRegistered(true)}} 
                size="large"
            >
                Skrá mig
            </Button>
        </Form>
    )
    return (
        <p>Skráðu þig inn til að skrá þig á viðburðinn</p>
    )
}


