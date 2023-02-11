import "./assets/css/App.css";
import Menu from "./components/Menu";
import MyHeader from "./components/MyHeader";

function App() {
	return (
		<div className="App">
			<MyHeader />
			<div className="menu">
				<Menu />
			</div>
		</div>
	);
}

export default App;
