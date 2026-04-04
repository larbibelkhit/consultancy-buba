'use client'

import { useSyncExternalStore } from 'react'

let listeners: (() => void)[] = []

function subscribe(cb: () => void) {
  listeners.push(cb)
  return () => {
    listeners = listeners.filter((l) => l !== cb)
  }
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function getServerSnapshot() {
  return false
}

function toggle() {
  const next = !document.documentElement.classList.contains('dark')
  document.documentElement.classList.toggle('dark', next)
  localStorage.setItem('theme', next ? 'dark' : 'light')
  listeners.forEach((l) => l())
}

const isMountedSubscribe = () => () => {}
const isMountedClient = () => true
const isMountedServer = () => false

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(isMountedSubscribe, isMountedClient, isMountedServer)
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (!mounted) {
    return <div className="w-12 h-6" />
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-12 h-6 rounded-full bg-border transition-colors duration-300 flex items-center cursor-pointer"
    >
      {/* Track icons */}
      <svg
        className="absolute left-1 w-3.5 h-3.5 text-sm-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
      <svg
        className="absolute right-1 w-3.5 h-3.5 text-sm-muted"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Thumb */}
      <span
        className={`absolute top-0.5 w-5 h-5 rounded-full bg-green shadow-sm transition-[left] duration-300 ${
          dark ? 'left-[26px]' : 'left-0.5'
        }`}
      />
    </button>
  )
}
