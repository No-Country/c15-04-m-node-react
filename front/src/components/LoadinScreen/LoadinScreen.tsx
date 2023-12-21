import Greenfoot from "../../assets/img/greenfoot.png";

function LoadingScreen() {
	return (
		<div className="flex justify-center items-center h-screen">
			<img className="animate-spin" src={Greenfoot} width="250px" alt="loading" />
		</div>
	);
}

export default LoadingScreen;
