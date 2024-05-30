import { useInput } from '../hooks/useInput.js';
import { hasMinLength, isEmail } from '../util/validation.js';
import Input from './Input';

export default function StateLogin() {
const { 
  value: emailValue, 
  isInvalid: isEmailInvalid,
  handleInputValue: handleEmailValue, 
  handleInputBlur: handleEmailBlur } = useInput('', (value, inputTouched) => inputTouched && !isEmail(value) );
const { 
  value: passwordValue,
  isInvalid: isPasswordInvalid, 
  handleInputValue: handlePasswordValue, 
  handleInputBlur: handlePasswordBlur } = useInput('', (value, inputTouched) => inputTouched && !hasMinLength(value, 6));

function handleSubmit(e) {
  e.preventDefault();

  console.log(isEmailInvalid)

  if (isEmailInvalid || isPasswordInvalid) {
    return;
  }

  console.log('SUBMITTED!!!')
  // reset
  // setUserInputs(initState);
}

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="control-row">
        <Input
          label="Email"
          error={isEmailInvalid && 'Email invalid'}
          id="email" 
          type="email" 
          name="email" 
          onBlur={() => handleEmailBlur()}
          onChange={(event) => { handleEmailValue(event.target.value) }} 
          value={emailValue}
        />

        <Input
          label="Password"
          error={isPasswordInvalid && 'Password invalid'}
          id="password" 
          type="password" 
          name="password" 
          onBlur={() => handlePasswordBlur()}
          onChange={(event) => { handlePasswordValue(event.target.value) }} 
          value={passwordValue}
        />
      </div>

      <p className="form-actions">
        <button type='reset' className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
