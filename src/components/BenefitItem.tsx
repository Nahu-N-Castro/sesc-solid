
export default function BenefitItem(props: { icon: string, label: string, index: number }) {
  return (
    <div
      data-aos-delay={`${props.index}00`}
      data-aos="zoom-in"
      class="flex flex-col gap-3 justify-center items-center bg-white rounded-xl px-4 py-5 lg:py-6 h-full text-zinc-700 shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-500 cursor-default text-center">
      <img
        src={props.icon}
        alt=""
        role="presentation"
        loading="lazy"
        width="40"
        height="40"
        class="w-10 h-10 object-contain"
      />
      <h4 class="font-semibold text-sm lg:text-base leading-tight">{props.label}</h4>
    </div>
  )
}
