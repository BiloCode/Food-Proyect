import { FC, FormEvent, useRef } from "react";
import { RouteComponentProps } from "@reach/router";
import firebase from "firebase";

const Login: FC<RouteComponentProps> = () => {
  const email = useRef<HTMLInputElement>();
  const password = useRef<HTMLInputElement>();

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();

    const auth = firebase.auth();
    await auth.signInWithEmailAndPassword(
      email.current.value,
      password.current.value
    );
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input ref={email} type="email" />
        <input ref={password} type="password" />
        <button>Validar</button>
      </form>
    </div>
  );
};

export default Login;
