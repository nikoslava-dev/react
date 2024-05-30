import { useRef, useState } from 'react';

export default function Login() {
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // reset (NOT RECOMMENDED TO CLEAR MANUALY)
    // passwordRef.current.value = '';
    // emailRef.current.value = '';

debugger
    const emailIsValid = emailRef.current.value.includes('@');
    if (!emailIsValid) {
      setIsEmailInvalid(true);
      return;
    }

    setIsEmailInvalid(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={emailRef} />
          <div className="control-error">{isEmailInvalid && 'Email invalid'}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={passwordRef} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
