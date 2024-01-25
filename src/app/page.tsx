/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-contradicting-classname */

import CTA from "@/components/layout/CTA"
import Extra from "@/components/layout/Extra"
import Features from "@/components/layout/Features"
import Hero from "@/components/layout/Hero"
import SubHero from "@/components/layout/SubHero"

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <Features />
      <Extra />
      <div className="overflow-hidden">
        <CTA />
      </div>
    </>
  )
}
