import { useState, useEffect, useRef, useCallback } from 'react'
import slide1 from '../assets/hero-slide-1.jpg'
import slide2 from '../assets/hero-slide-2.jpg'
import slide3 from '../assets/hero-slide-3.jpg'
import './css/Hero.css'

const SLIDE_DURATION = 5000 // 5 seconds auto-swipe

const SLIDES = [
  {
    id: 1,
    image: slide1,
    alt: 'Oceanic engineering offshore piping installation',
  },
  {
    id: 2,
    image: slide2,
    alt: 'Industrial plant piping and refinery infrastructure',
  },
  {
    id: 3,
    image: slide3,
    alt: 'Engineering specialists inspecting piping systems',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [prevSlide, setPrevSlide] = useState(null)
  const [direction, setDirection] = useState('next') // 'next' | 'prev'
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Touch and drag swipe state
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const isDragging = useRef(false)

  const totalSlides = SLIDES.length

  const triggerSlideChange = useCallback(
    (targetIndex, dir) => {
      setPrevSlide(currentSlide)
      setDirection(dir)
      setIsTransitioning(true)
      setCurrentSlide(targetIndex)
    },
    [currentSlide]
  )

  const goToNextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % totalSlides
    triggerSlideChange(nextIndex, 'next')
  }, [currentSlide, totalSlides, triggerSlideChange])

  const goToPrevSlide = useCallback(() => {
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides
    triggerSlideChange(prevIndex, 'prev')
  }, [currentSlide, totalSlides, triggerSlideChange])

  // Clear transition lock after animation completes
  useEffect(() => {
    if (!isTransitioning) return
    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setPrevSlide(null)
    }, 950)
    return () => clearTimeout(timer)
  }, [isTransitioning, currentSlide])

  // 5-second auto-swipe interval
  useEffect(() => {
    if (isPaused) return

    const timer = setInterval(() => {
      goToNextSlide()
    }, SLIDE_DURATION)

    return () => clearInterval(timer)
  }, [isPaused, goToNextSlide])

  // Keyboard navigation (Arrow keys)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      goToNextSlide()
    } else if (e.key === 'ArrowLeft') {
      goToPrevSlide()
    }
  }

  // Touch / pointer swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches ? e.touches[0].clientX : e.clientX
    touchEndX.current = touchStartX.current
    isDragging.current = true
  }

  const handleTouchMove = (e) => {
    if (!isDragging.current) return
    touchEndX.current = e.touches ? e.touches[0].clientX : e.clientX
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50

    if (diff > threshold) {
      goToNextSlide()
    } else if (diff < -threshold) {
      goToPrevSlide()
    }
  }

  return (
    <section
      className="hero-section"
      aria-label="Oceanic Engineering Showcase Carousel"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="hero-carousel-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
        onMouseUp={handleTouchEnd}
      >
        {/* Layered Slides with Curtain & Parallax Wipe Animation */}
        <div className="hero-slides-container">
          {SLIDES.map((slide, index) => {
            const isActive = index === currentSlide
            const isExiting = index === prevSlide

            let slideClass = 'hero-slide'
            if (isActive) {
              slideClass += ' active'
              if (isTransitioning) {
                slideClass += direction === 'next' ? ' enter-next' : ' enter-prev'
              }
            } else if (isExiting) {
              slideClass += ' exiting'
            }

            return (
              <div
                key={slide.id}
                className={slideClass}
                aria-hidden={!isActive}
              >
                {/* Visual Backdrop */}
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="hero-slide-bg"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            )
          })}
        </div>

        {/* Ambient Depth Vignette */}
        <div className="hero-subtle-vignette" aria-hidden="true" />

        {/* Previous Arrow Button */}
        <button
          type="button"
          className="hero-nav-arrow prev"
          onClick={goToPrevSlide}
          aria-label="Previous Slide"
        >
          <svg viewBox="0 0 24 24">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Next Arrow Button */}
        <button
          type="button"
          className="hero-nav-arrow next"
          onClick={goToNextSlide}
          aria-label="Next Slide"
        >
          <svg viewBox="0 0 24 24">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  )
}
