import CardGroupChat from "../components/CardGroupChat";
import { PencilSquare } from "../components/icons";

function Dashboard() {
	return (
		<div className="w-full h-full px-2">
			<div className="w-full flex flex-row justify-between items-center mb-4">
				<h1 className="text-3xl font-semibold">{'Chats'}</h1>
				<PencilSquare color="#8667F2" />
			</div>
			<CardGroupChat/>
		</div>
	);
}

export default Dashboard;