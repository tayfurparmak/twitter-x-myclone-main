import {topics} from "~/utils/consts";
import Topic from "~/layouts/main/rightbar/topics/topic";
import {Link} from "react-router-dom";

export default function Topics() {
	return (
	
		<section className="bg-[#16181c] overflow-hidden mb-4 rounded-2xl border border-[#16181c]" >
			<h5 className="py-3 px-4 text-xl font-extrablod leading-6 flex items-center text[#e7e9ea]">
				ilginizi çekebilecek yazılar
			</h5>
			<div className="grid">
				{topics.map((topic,index) => <Topic item={topic} key={index} />)}
				<Link 
				to= "/trends"
				className="h-[52px] flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.10]"
				>
				Daha fazla göster
				</Link>
			</div>
		</section>

	)
}