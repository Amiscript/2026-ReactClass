
//onChange- event handler that is called when the value of an input field changes. It is commonly used to update the state of a component or to perform some action based on the new value of the input field.

// onSubmit- event handler that is called when a form is submitted. It is commonly used to prevent the default behavior of the form submission and to perform some action based on the values of the form fields.
import { useState } from "react";

const InputField = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



// function handleSubmit(event) {
//     event.preventDefault();
//     console.log("Form submitted");
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//     console.log("Email:", email);
//     console.log("Password:", password
//     );
// }

    // function collectfisrtName(event){
    //     setFirstName(event.target.value);
    // }


  return (
    <div className=" text-black text-2xl ">
        <form action="" className="flex flex-col gap-4 w-1/2 mx-auto " onSubmit={(event)=> {
            event.preventDefault();
            console.log("Form submitted");
            console.log("First Name:", firstName);
            console.log("Last Name:", lastName);
            console.log("Email:", email);
            console.log("Password:", password
            );
        }}>
        
         <h1>Welcome, {firstName}!</h1>
            <label htmlFor="Firstname">First Name</label>
          
            <input type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} />
            <label htmlFor="Lastname">Last Name</label>
            <input type="text " value={lastName} onChange={(event)=>setLastName(event.target.value)     }/>
            <label htmlFor="Email">Email</label>
            <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)     }/>
            <label htmlFor="Password">Password</label>
            <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)     }/>
         


            <select name="" id="">
                <option  >Select Gender</option>
                <option >Male</option>
                <option >Female</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default InputField;