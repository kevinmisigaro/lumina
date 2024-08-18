import { Cormorant } from "next/font/google"

const cormorant = Cormorant({ subsets: ["latin"], weight: "500" })

function TitleItem({title}:{title: string}) {
  return (
    <div className={`text-2xl border-l-2 border-b-2 max-w-fit pb-1 pl-2 font-medium border-[#401716] ${cormorant.className}`}>
    {title}
  </div>
  )
}

export default TitleItem