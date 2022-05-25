import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputLogin } from './Components/InputLogin';

export function Login() {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length * 1000;
  }, [email.length])

  useEffect(() => {
    console.log(email, password)
  }, [email, password]);
  
  const handleEntrar = useCallback(() => {
     console.log(email, password)
  }, [email, password]);

  return (
    <div>
      <h3>Quantidade de caracteres no email: {emailLength}</h3>
      <form action="">
        <InputLogin
          label='Email'
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label='Senha'
          type='password'
          value={password}
          onChange={newValue => setPassword(newValue)}
        />


        {/* <label htmlFor="">
          <span>Senha</span>
          <input 
            type="password" 
            value={password}
            ref={inputPasswordRef} 
            onChange={e => setPassword(e.target.value)}
          />
        </label> */}
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
}
