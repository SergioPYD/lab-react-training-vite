import "../App.css";
function IdCard (props){
const { firstName,lastName,gender,height,birth,picture} = props

const birthToString = birth.toLocaleDateString()
  
    return(
        <div className="card">
            <div>
                <img src={picture} alt="Imagen de Perfil" width="200px" />
            </div>
            <div>
                <p><b>First name:</b> <span>{firstName}</span></p>
                <p><b>Last name:</b> <span>{lastName}</span></p>
                <p><b>Gender:</b> <span>{gender}</span></p>
                <p><b>Height:</b> <span>{height}</span></p>
                <p><b>Birth:</b> <span>{birthToString}</span></p>
            </div>

        </div>

    )
}

export default IdCard