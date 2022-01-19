import { useState, useRef, useEffect } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);
  // const nameInputRef = useRef();

  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     console.log("name input is valid");
  //   }
  // }, [enteredNameIsValid]);

  /**
   * name
   */

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;


  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);



  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    // if(event.target.value.trim() !== '') {
    //   setEnteredNameIsValid(true);
    // }
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);

    // if(enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    // }
  };

  /**
   * email
   */

   const enteredEmailIsValid = enteredEmail.includes('@');
   const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  /**
   * form
   */

   let formIsValid = false;
   if (enteredNameIsValid && enteredEmailIsValid) {
     formIsValid = true;
   }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    // if(enteredName.trim() === '') {
    //   setEnteredNameIsValid(false);
    //   return ;
    // }

    if(!enteredNameIsValid) {
      return;
    }
    if(!enteredEmailIsValid) {
      return;
    }
    // setEnteredNameIsValid(true);

    console.log(enteredName);

    // const enteredNameValue = nameInputRef.current.value;
    // console.log(enteredNameValue);
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>

        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />

        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">E-mail</label>

        <input
          // ref={nameInputRef}
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />

        {emailInputIsInvalid && <p className="error-text">Enter a valid email</p>}
      
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
