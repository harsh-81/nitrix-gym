'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const testimonials = [
  { video: '/video0.mp4' },
  { video: '/video2.mp4' },
  { video: '/video3.mp4' },
  { video: '/video4.mp4' },
  { video: '/video1.mp4' },
  { video: '/video5.mp4' },
]

export default function Testimonials() {
  const autoplay = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: false })
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'center' },
    [autoplay.current]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    emblaApi.on('select', () => autoplay.current.reset())

    const onSelect = () => {
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()
  }, [emblaApi])

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12">
          Member <span className="text-red-500">Testimonials</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_40%] px-4 flex justify-center"
                >
                  <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl p-4 border border-white/10 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="relative w-full aspect-[9/16] max-w-[350px] mx-auto rounded-xl overflow-hidden">
                      <video
                        src={item.video}
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
          >
            ◀
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  )
}
