import { Back } from '../back/Back';
import { Button } from '../button/Button';
import Field from '../form/Field';
import { Form } from '../form/Form';


export function LoginForm() {
  return (
    <>
      <h2>Innskráning</h2>
      <Form action={"/login"} autocomplete={"off"}>
        <Field
          what="username"
          type="text"
          text="Notendanafn: "
        />
        <Field
          what="password"
          type="password"
          text="Lykilorð"/>

        <Button size="large">Innskrá</Button>
      </Form>
      <Back goTo="/" />
    </>
  )
}