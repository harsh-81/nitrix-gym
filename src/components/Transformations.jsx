'use client'
import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const categories = [
  {
    title: 'Women Transformations',
    color: 'from-orange-500 to-red-600',
    transformations: [
      { before: '/women/1.png', after: '/women/2.png' },
      { before: '/women/3.png', after: '/women/4.png' },
      { before: '/women/5.png', after: '/women/6.png' },
      { before: '/women/7.png', after: '/women/8.png' },
      { before: '/women/5.png', after: '/women/6.png' },
      { before: '/women/9.png', after: '/women/10.png' },
      { before: '/women/11.png', after: '/women/12.png' },
      { before: '/women/13.png', after: '/women/14.png' },
      { before: '/women/15.png', after: '/women/16.png' },
      { before: '/women/17.png', after: '/women/18.png' },
    ],
  },
  {
    title: 'Men Transformations',
    color: 'from-emerald-500 to-green-700',
    transformations: [
      { before: '/men1/1.png', after: '/men1/2.png' },
      { before: '/men1/3.png', after: '/men1/4.png' },
      { before: '/men1/5.png', after: '/men1/6.png' },
      { before: '/men1/7.png', after: '/men1/8.png' },
      { before: '/men1/9.png', after: '/men1/10.png' },
      { before: '/men1/11.png', after: '/men1/12.png' },
      { before: '/men1/13.png', after: '/men1/14.png' },
      { before: '/men1/15.png', after: '/men1/16.png' },
      { before: '/men1/17.png', after: '/men1/18.png' },
      { before: '/men1/19.png', after: '/men1/20.png' },
      { before: '/men1/21.png', after: '/men1/22.png' },
      { before: '/men1/23.png', after: '/men1/24.png' },
    ],
  },
  {
    title: 'Member Highlights',
    color: 'from-blue-500 to-indigo-700',
    transformations: [
      { single: '/men2/1.png' },
      { single: '/men2/2.png' },
      { single: '/men2/3.png' },
      { single: '/men2/4.png' },
      { single: '/men2/5.png' },
      { single: '/men2/6.png' },
      { single: '/men2/7.png' },
      { single: '/men2/8.png' },
      { single: '/men2/9.png' },
      { single: '/men2/10.png' },
      { single: '/men2/11.png' },
      { single: '/men2/12.png' },
    ],
  },
]

export default function Transformations() {
  return (
    <section
      id="transformations"
      className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 tracking-tight">
          Real <span className="text-red-500">Transformations</span>
        </h2>

        {categories.map((category, i) => (
          <CategoryCarousel key={i} category={category} />
        ))}
      </div>
    </section>
  )
}

function CategoryCarousel({ category }) {
  const autoplay = Autoplay({ delay: 2500, stopOnInteraction: false })
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' }, [autoplay])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const isMemberHighlights = category.title === "Member Highlights"

  return (
    <div className="mb-20">

      {/* Title */}
      <h3
        className={`text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
      >
        {category.title}
      </h3>

      <div className="relative group">
        <div className="overflow-hidden rounded-3xl shadow-2xl" ref={emblaRef}>
          <div className="flex">

            {category.transformations.map((item, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] sm:flex-[0_0_70%] md:flex-[0_0_60%] px-4"
              >
                <div className="bg-gray-800 rounded-3xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-all duration-500">

                  {/* ========================  
                      Member Highlights (1 IMAGE)
                     ======================== */}
                  {isMemberHighlights ? (
                    <div className="relative h-[330px] sm:h-[360px] overflow-hidden">
                      <img
                        src={item.single}
                        alt="Member Highlights "
                        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  ) : (
                    /* ========================  
                       NORMAL BEFORE–AFTER
                       ======================== */
                    <div className="grid grid-cols-1 sm:grid-cols-2">

                      {/* BEFORE */}
                      <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
                        <img
                          src={item.before}
                          alt="Before"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <span className="absolute top-3 left-3 bg-black/60 text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md">
                          BEFORE
                        </span>
                      </div>

                      {/* AFTER */}
                      <div className="relative h-[300px] sm:h-[360px] overflow-hidden">
                        <img
                          src={item.after}
                          alt="After"
                          className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                        <span
                          className={`absolute top-3 left-3 bg-gradient-to-r ${category.color} text-white px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md`}
                        >
                          AFTER
                        </span>
                      </div>

                    </div>
                  )}

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* 🎯 Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="hidden group-hover:flex absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        >
          ◀
        </button>

        <button
          onClick={scrollNext}
          className="hidden group-hover:flex absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300"
        >
          ▶
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? `bg-gradient-to-r ${category.color} scale-125`
                  : 'bg-gray-500 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
