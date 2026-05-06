

export default function Home({name, surname}) {

  return (
    <div>
      {/* property- props */}
      <h1>Home</h1>
      {/* <p>Welcome to the Home page! Mr {props.name}, {props.surname}  </p> */}
      <p>Welcome to the Home page! Mr {name}, {surname}  </p>
    </div>
  )
}
