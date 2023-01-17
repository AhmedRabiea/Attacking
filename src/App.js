import "./App.css";
import Danger from "../src/imgs/danger.jfif";

function App() {
  return (
    <div className="App">
      <div class="myImg">
        <img src={Danger} />
      </div>
      <div class="main">
        <h1>
          ....لقد تم الولوج الى حسابكم بنجاح جارى نقل البيانات فى غضون 30 دقيقه
        </h1>
      </div>
    </div>
  );
}

export default App;
