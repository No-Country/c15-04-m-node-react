import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

function Home() {
	return (
		<div>
			<Button>HOLA</Button>
			<Input />
			<Avatar>
				<AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
			</Avatar>
		</div>
	);
}
export default Home;
