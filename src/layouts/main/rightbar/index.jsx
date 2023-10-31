import Search from "~/layouts/main/rightbar/search";
import Premium from "~/layouts/main/rightbar/premium";



export default function RightBar() {
	return (
		<aside className="w-[350px] mr-2.5">
			<Search />
			<Premium />


		</aside>
	)
}