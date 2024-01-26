import CircleGradient from "@/components/CircleGradient";
import CTA from "@/components/layout/CTA";
import Extra from "@/components/layout/Extra";
import Features from "@/components/layout/Features";
import Hero from "@/components/layout/Hero";
import SubHero from "@/components/layout/SubHero";

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero />
      <CircleGradient />
      <Features />
      <Extra />
      <div className="overflow-hidden">
        <CTA />
      </div>
    </>
  )
}
