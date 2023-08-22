import "../App.css";


function Random (props){
const {max , min} = props
const randomNumber = Math.floor(Math.random() *(max - min + 1 )+min)
    return (

        <div className="card"> 
          <h2>Ramdom value between {min} and {max} = {randomNumber}</h2>
        </div> 
    )
}
export default Random