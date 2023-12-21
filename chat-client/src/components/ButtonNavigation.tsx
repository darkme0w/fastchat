import React from "react";
import { Chat, Notification, Search, User } from "./icons";
import { useLocation } from "react-router-dom";

const navigationTabs = [
	{
		path: '/',
		icon: <Chat />
	},
	{
		path: '/search',
		icon: <Search />
	},
	{
		path: '/notification',
		icon: <Notification />
	},
	{
		path: '/user',
		icon: <User />
	}
]

const ACTIVE_TAB_COLOR = '#8667F2';
const INACTIVE_TAB_COLOR = '#8C8097';

function ButtonNavigation() {

	const {pathname} = useLocation();

	return (
		<div className="shadow-lg absolute bottom-0 w-full bg-slate-100 h-[50px] left-0 right-0">
			<div className="w-full flex justify-around gap-x-2 pt-4">
				{navigationTabs.map(({path, icon}) => (
					<span
						key={path}
						className="cursor-pointer"
						style={{
							color: pathname === path ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR
						}}
					>
						{icon}
					</span>
				))}
			</div>
		</div>
	);
}

export default React.memo(ButtonNavigation);