export default function SubHero() {
  return (
    <section
      id="intro"
      className="mx-auto max-w-7xl p-6 py-16 md:py-24 lg:px-8"
    >
      <div className="grid items-start justify-between gap-5 md:grid-cols-2">
        <div className="pr-8 text-4xl/[1.07] font-bold md:pr-16 md:text-5xl/[1.07]">
          <span className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
            Who said tasks have to be boring?
          </span>
        </div>
        <div className="text-lg text-zinc-400/80">
          With Roboteur, embracing automation and RPA is seamless, empowering,
          and far from mundane. Unlock a world of
          efficiency, simplifies complex tasks, and enables you to harness the
          full potential of advanced automation.{" "}
          <span className="text-zinc-200">
            Ditch the monotony of repetitive tasks and let Roboteur, the master
            of automation and RPA, work its magic.
          </span>
        </div>
      </div>
    </section>
  )
}
