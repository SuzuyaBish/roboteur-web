export default function CTA() {
  return (
    <section className="relative mx-auto mt-16 max-w-full p-6 pb-12 pt-20 lg:px-8">
      <div
        aria-hidden="true"
        className="user-select-none center pointer-events-none absolute -top-0.5 left-1/2 h-px w-4/5 max-w-[500px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:linear-gradient(90deg,rgba(0,0,0,0)_0%,hsl(var(--theColor),0.65)_50%,rgba(0,0,0,0)_100%)]"
      ></div>
      <div
        aria-hidden="true"
        className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[300px] -translate-x-1/2 -translate-y-1/2 transform-gpu [background:conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#09090b_50%),radial-gradient(hsl(var(--theColor),0.1)_0%,transparent_70%)] md:max-w-[600px]"
      ></div>
      <div className="relative isolate">
        <svg
          className="absolute inset-0 -z-10 size-full stroke-white/5 [mask-image:radial-gradient(40%_80%_at_center,black,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="cta"
              width="80"
              height="80"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#cta)"
          ></rect>
        </svg>
        <div
          className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="to-theColor aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-600 opacity-20"
            style={{
              clipPath:
                "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance bg-gradient-to-br from-zinc-100 to-zinc-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
            See where automation can take your business.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400/80">
            The first automation tool you&apos;ll love. And the last one
            you&apos;ll ever need.
          </p>
          <div className="mt-12 flex items-center justify-center">
            <button
              className="hover:shadow-glow group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100"
              type="button"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="radix-:Rvraqla:"
              data-state="closed"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,hsl(var(--theColor),0.6)_0%,hsl(var(--theColor))_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
                Contact Us
              </div>
              <span className="via-theColor absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
