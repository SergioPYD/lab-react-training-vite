import "../App.css";
function BoxColor (props){
const {r,g,b} = props
    const boxBGStyles = {
        backgroundColor: `rgb(${r} ${g} ${b}`,
        height: "300px",
        widgth: "600px"
    }
    return(
        <div className="card" style={boxBGStyles}>


        </div>
    )
}

export default BoxColor