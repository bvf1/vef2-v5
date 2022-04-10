import { NextPage } from 'next';
import { Back } from '../components/back/Back';
import { Button } from '../components/button/Button';
import Field from '../components/form/Field';
import { Form } from '../components/form/Form';



const Login: NextPage = ()  => {
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
      <Back goTo='/' />
    </>
  )
}
export default Login