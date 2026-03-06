import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { BeforeAfter } from "@/components/before-after"
import { Kits } from "@/components/kits"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Guarantee } from "@/components/guarantee"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <BeforeAfter />
        <Kits />
        <Testimonials />
        <Faq />
        <Guarantee />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
