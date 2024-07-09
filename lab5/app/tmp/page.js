import { useState } from "react";

export default function Test() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      console.log(password);
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <div>
        
    </div>
  )
}
