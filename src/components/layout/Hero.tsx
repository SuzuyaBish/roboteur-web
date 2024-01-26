import Image from "next/image"

import { SparklesCore } from "../Sparkles"

export default function Hero() {
  return (
    <section className="relative isolate transform-gpu pt-14">
      <div className="absolute inset-0 -z-10 bg-[image:radial-gradient(80%_50%_at_50%_-20%,hsl(var(--theColor),0.5),rgba(255,255,255,0))]"></div>
      <svg
        className="absolute inset-0 -z-10 size-full stroke-[#878787]/10 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero"
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
          fill="url(#hero)"
        ></rect>
      </svg>
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-5xl/[1.07] font-bold text-transparent md:text-7xl/[1.07]"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              Unleash the power of automation
            </h1>
            <p
              className="mt-6 text-balance text-lg font-medium text-zinc-400 md:text-xl"
              style={{
                opacity: 1,
                transform: "none",
              }}
            >
              Experience the future of automation, where your tasks are
              effortlessly automated, allowing you to focus on what really
              matters - driving your business forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-8">
              <div
                style={{
                  opacity: 1,
                  transform: "none",
                }}
              >
                <button
                  className="hover:shadow-theColor group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:Rjljaqla:"
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
          <div
            className="perspective-[1500px] relative pt-16"
            style={{
              opacity: 1,
            }}
          >
            <div className="pointer-events-none absolute -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1.5}
                particleDensity={50}
                className="size-full"
                particleColor="#FFFFFF"
              />
            </div>
            <div
              className="relative"
              style={{
                transform: "none",
              }}
            >
              <div className="absolute -top-px right-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                <div className="animate-starlight-right via-theColor h-px w-full bg-gradient-to-r from-cyan-400/0 to-cyan-400/0"></div>
              </div>
              <div className="rounded-md bg-zinc-950 ring-1 ring-white/10 lg:rounded-2xl">
                <div
                  className="relative aspect-[16/10]"
                  style={{
                    opacity: 1,
                  }}
                >
                  <Image
                    alt="App screenshot"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="1"
                    fill
                    className="rounded-md object-cover brightness-125 lg:rounded-2xl"
                    src="/images/hero_img.png"
                    style={{
                      color: "transparent",
                    }}
                    // src="/images/landing.png"
                  />
                </div>
              </div>
              <div className="absolute -bottom-2 left-20 h-2 w-20 [mask-image:linear-gradient(to_right,rgba(217,217,217,0)_0%,#d9d9d9_25%,#d9d9d9_75%,rgba(217,217,217,0)_100%)] md:w-32 lg:w-64">
                <div className="animate-starlight-left h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-400 to-cyan-400/0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      ></div>
    </section>
  )
}
