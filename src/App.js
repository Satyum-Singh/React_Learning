import "./styles.css";

export default function App() {
  const date = new Date();
  const currTime = date.getHours();

  var greeting;

  var customStyle = {
    color: "yellow",
  };

  if (currTime > 0 && currTime <= 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  }
  if (currTime > 12 && currTime <= 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  }
  if (currTime > 18 && currTime <= 24) {
    greeting = "Good Evening";
    customStyle.color = "blue";
  }
  return (
    <div className="App">
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
}
