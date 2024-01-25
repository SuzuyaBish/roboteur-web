import Image from "next/image"

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="relative flex justify-center">
        <div className="mx-4 w-full max-w-7xl">
          <nav
            className="flex min-h-[5rem] items-center justify-between px-4 py-3"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="relative size-14">
                <Image src="/images/logo.png" fill alt="SauceCode Logo" />
              </a>
            </div>
            <div className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium text-zinc-300 transition hover:text-zinc-100 sm:space-x-6">
              <a href="/blog">Blog</a>
              <button
                className="hover:shadow-glow group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:R19la:"
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
          </nav>
        </div>
      </div>
    </header>
  )
}
