import { topics } from "~/utils/consts"
import Topic from "~/layouts/main/rightbar/topics/topic";
export default function Topics()  {
	return(
		<section className="bg-[#16181c] mb-4 rounded-2xl border border-[#16181c]">
			<h5 className="py-3 px-4 text-xl font-extrabold leading-6 flex items-center text-[#7ee9ea]">
				ilginizi çekebilecek yazılar.
				</h5>
				<div>
				{topics.map((topic,index)=><Topic item={topic} key={index}/>)}
				</div>
	
		</section>
	)
}