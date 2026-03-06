"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

const slides = [
  { id: 1, label: "Antes & Depois 1", image: "/images/before-after-1.jpg" },
  { id: 2, label: "Antes & Depois 2", image: "/images/before-after-2.jpg" },
  { id: 3, label: "Antes & Depois 3", image: "/images/before-after-3.jpg" },
  { id: 4, label: "Antes & Depois 4", image: "/images/before-after-4.jpg" },
]

// Group slides into pairs of 2
const pairedSlides: (typeof slides)[] = []
for (let i = 0; i < slides.length; i += 2) {
  pairedSlides.push(slides.slice(i, i + 2))
}

export function BeforeAfter() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    duration: 30,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const isHoveredRef = useRef(false)

  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
    autoplayRef.current = setInterval(() => {
      if (!isHoveredRef.current) {
        scrollNext()
      }
    }, 3500)
  }, [scrollNext])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    startAutoplay()
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [emblaApi, onSelect, startAutoplay])

  const handleMouseEnter = useCallback(() => {
    isHoveredRef.current = true
  }, [])

  const handleMouseLeave = useCallback(() => {
    isHoveredRef.current = false
  }, [])

  return (
    <section id="antes-depois" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Resultados reais e visiveis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Veja a transformacao que o Liso Vegetal proporciona. Cabelos alinhados, brilhantes e saudaveis, sem quimica agressiva.
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel viewport */}
          <div ref={emblaRef} className="overflow-hidden rounded-lg">
            <div className="flex">
              {pairedSlides.map((pair, pairIndex) => (
                <div
                  key={pairIndex}
                  className="flex-[0_0_100%] min-w-0 px-2"
                >
                  <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
                    {pair.map((slide) => (
                      <div
                        key={slide.id}
                        className="relative aspect-[3/4] rounded-lg bg-muted overflow-hidden"
                      >
                        <Image
                          src={slide.image}
                          alt={slide.label}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 45vw, 350px"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block bg-foreground/70 text-primary-foreground text-[10px] md:text-xs font-sans font-medium tracking-wide uppercase px-2.5 py-1 rounded-full backdrop-blur-sm">
                            Resultado Real
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {pairedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
