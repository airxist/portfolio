import React from "react"

const Greet = ({name}) => {
  const Button = () => {
    return <button>Login</button>
  }

  const Greeting = () => {
    return <h1>
      Hello {name}
    </h1>
  }

  return name ? Greeting() : Button();
}

export default Greet
