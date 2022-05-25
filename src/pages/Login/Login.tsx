import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
        <label htmlFor="">
          <span>Email</span>
          <input 
            value={email} 
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined}
          />
        </label>
        <label htmlFor="">
          <span>Senha</span>
          <input 
            type="password" 
            value={password}
            ref={inputPasswordRef} 
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
}
