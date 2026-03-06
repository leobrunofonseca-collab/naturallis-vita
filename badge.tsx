"use client"

import { useRef, useState, useCallback } from "react"
import { Play } from "lucide-react"

const videos = [
  { id: 1, src: "/videos/testimonial-1.mp4" },
  { id: 2, src: "/videos/testimonial-2.mp4" },
  { id: 3, src: "/videos/testimonial-3.mp4" },
  { id: 4, src: "/videos/testimonial-4.mp4" },
]

export function Testimonials() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const handleClickPlay = useCallback((index: number) => {
    // Pause all other videos
    videoRefs.current.forEach((video, i) => {
      if (video && i !== index) {
        video.pause()
      }
    })

    const video = videoRefs.current[index]
    if (video) {
      if (playingIndex === index) {
        video.pause()
        setPlayingIndex(null)
      } else {
        video.play()
        setPlayingIndex(index)
      }
    }
  }, [playingIndex])

  const handleEnded = useCallback((index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null)
    }
  }, [playingIndex])

  const handlePause = useCallback((index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null)
    }
  }, [playingIndex])

  return (
    <section id="depoimentos" className="bg-secondary py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            O que nossas clientes dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Milhares de mulheres ja transformaram seus cabelos com o Liso
            Vegetal.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {videos.map((video, index) => {
            const isPlaying = playingIndex === index

            return (
              <div key={video.id} className="relative">
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden bg-muted">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el
                    }}
                    src={video.src}
                    preload="metadata"
                    playsInline
                    onEnded={() => handleEnded(index)}
                    onPause={() => handlePause(index)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Play/pause overlay */}
                  <button
                    onClick={() => handleClickPlay(index)}
                    aria-label={
                      isPlaying
                        ? `Pausar depoimento ${video.id}`
                        : `Reproduzir depoimento ${video.id}`
                    }
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  >
                    {!isPlaying && (
                      <div className="flex size-14 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm shadow-lg transition-opacity">
                        <Play className="size-6 text-foreground ml-0.5" />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
