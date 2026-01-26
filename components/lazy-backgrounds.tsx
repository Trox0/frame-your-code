"use client"

import dynamic from "next/dynamic"

// Lazy load decorative background components - they're not critical for LCP
// Using dynamic import with ssr: false to defer loading until after hydration
const SpaceBackground = dynamic(
  () => import("@/components/space-background").then(mod => ({ default: mod.SpaceBackground })),
  { ssr: false }
)

const SandParticles = dynamic(
  () => import("@/components/sand-particles").then(mod => ({ default: mod.SandParticles })),
  { ssr: false }
)

export function LazyBackgrounds() {
  return (
    <>
      <SpaceBackground />
      <SandParticles />
    </>
  )
}
