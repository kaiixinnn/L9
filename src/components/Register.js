import { useRef } from "react";

export default function Register() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Register your interest</h1>
      <p>
      Please register the course you are interested!
      </p>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input type="text" name="name" ref={emailRef} />
        </label>
        <label>
          Email: 
          <input type="text" name="email" ref={emailRef} />
        </label>
        <label>
          Course:
          <input type="text" name="course" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
