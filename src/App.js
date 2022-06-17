import names from "./data/data";

function Adil(){
  return (
    <ul>
      {names.map(name=>(<li>{name}</li>))}
    </ul>
  )
}

export default Adil;