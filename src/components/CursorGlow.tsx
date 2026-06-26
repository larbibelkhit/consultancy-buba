import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const visible = useRef(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible.current) {
        visible.current = true
        dot.style.opacity = '1'
        ring.style.opacity = '1'
      }
    }

    const onLeave = () => {
      visible.current = false
      dot.style.opacity = '0'
      ring.style.opacity = '0'
    }

    const loop = () => {
      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`

      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`

      raf = requestAnimationFrame(loop)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    raf = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-3 h-3 rounded-full bg-green opacity-0 transition-opacity duration-200"
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2 border-green opacity-0 transition-opacity duration-200"
      />
    </>
  )
}
