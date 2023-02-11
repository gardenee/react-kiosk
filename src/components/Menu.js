import { useState, useEffect } from "react";
import "../assets/css/Menu.css";

const menuList = [
	"에스프레소",
	"디카페인 커피",
	"프라프치노",
	"티바나",
	"케이크&미니디저트",
	"샌드위치&샐러드",
];

const Menu = () => {
	const [activeTab, setActiveTab] = useState("menu-tab-1");

	useEffect(() => {
		console.log(activeTab);
		document.getElementById(activeTab).classList.add("active");
	}, [activeTab]);

	const handleClick = (event) => {
		document.getElementById(activeTab).classList.remove("active");
		setActiveTab(event.target.id);
	};

	return (
		<ul className="menu-tab">
			{menuList.map((item, index) => (
				<li
					key={index + 1}
					id={`menu-tab-${index + 1}`}
					onClick={(e) => handleClick(e)}>
					{item}
				</li>
			))}
		</ul>
	);
};

export default Menu;
