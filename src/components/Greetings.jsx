import "../App.css";
function Greetings(props) {
  const {lang,children} = props
  if (lang === "de") {
    return (
      <div className="card">
        <h2>Hallo {children}</h2>
      </div>
    );
  } else  if (lang === "fr") {
    return (
      <div className="card">
        <h2>Bonjour {children}</h2>
      </div>
    );
  } else if (lang === "es") {
    return (
      <div className="card">
        <h2>Hola {children}</h2>
      </div>
    );
  } else  if (lang === "en") {
    return (
      <div className="card">
        <h2>Hello {children}</h2>
      </div>
    );
  }
}

export default Greetings;
