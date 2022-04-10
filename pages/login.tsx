import { NextPage } from 'next';
import Link from 'next/link';
import { Button } from '../components/form/Button';
import { Input } from '../components/form/Input';



const Login: NextPage = ()  => {
  return (
    <div>
      <h2>Innskráning</h2>
      <Input label="Notendanafn" name="username" />
      <Input label="Lykilorð" name="password" />
      <Button>Innskrá</Button>

      <p>&nbsp;</p>
      <p><Link href="/">Til baka</Link></p>
    </div>
  )
}

export default Login