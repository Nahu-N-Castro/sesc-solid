
export default function BenefitItem(props: { icon: string, label: string, index: number }) {
  return (
    <div
      data-aos-delay={`${props.index}00`}
      data-aos="zoom-in"
      class="flex gap-5 justify-between sm:justify-center items-center bg-white rounded-lg px-10 sm:px-4 py-4 h-fit text-zinc-700 shadow-lg hover:scale-105 transition-transformn duration-500 hover:shadow-xl cursor-default">
      <img src={props.icon} alt="" />
      <h4 class="font-semibold">{props.label}</h4>
    </div>
  )
}
