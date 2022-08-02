import "./Button.css";

function Button({text, type }) {
  const btnstyle= {
    backgroundColor: type === "alert"? "red" : "green",
    };
  return (
    <button style={btnstyle} className="bton">{text}</button>
  )
}

export default Button