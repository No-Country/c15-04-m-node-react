import Landing from "@/components/Landing/Landing";
import SidePanel from "@/components/UserSettings/SidePanel";
import store from "../../store";
import { Provider } from "@radix-ui/react-toast";

function Home(): JSX.Element {
	return (
		<div>
			<Landing />
			<Provider store={store}>
				<SidePanel isOpen={true} onClose={() => {}} />
			</Provider>
		</div>
	);
}

export default Home;
