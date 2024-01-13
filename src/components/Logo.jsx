import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ disabled }) => {
	const logoContent = (
		<>
			<img
				src="/logo_t.png"
				className="h-8 rounded-full bg-slate-400 p-[1px]"
				alt="clean with kb Logo"
			/>
			<div className="flex flex-col md:flex-row">
				<span className="self-start text-xl font-semibold whitespace-nowrap dark:text-slate-100">
					Katy Brown ™
				</span>
				<span className="self-start md:self-center md:pl-2 text-xs md:text-xl font-semibold dark:text-slate-100">
					cleaning services
				</span>
			</div>
		</>
	);

	return disabled ? (
		<div className="flex items-center space-x-3 rtl:space-x-reverse">
			{logoContent}
		</div>
	) : (
		<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
			{logoContent}
		</Link>
	);
};

export default Logo;
