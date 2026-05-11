import Position from '../component/position'
import Path from "../component/path"

export default function Home({name, surname}) {

  return (
    <div>
      {/* property- props */}
      <h1>Home</h1>
      {/* <p>Welcome to the Home page! Mr {props.name}, {props.surname}  </p> */}
      <p className="text-7xl font-bold text-center text-balance break-all">Welcome to the Home <br/> page! Mr {name}, {surname}  </p>

       <Position/>
      <Path/>
    </div>
  )
}
