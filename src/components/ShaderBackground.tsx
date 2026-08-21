import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react'

export default function ShaderBackground() {
  return (
    <Shader className="absolute inset-0 z-10 pointer-events-none h-full w-full">
      <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
      <ChromaFlow
        baseColor="#ffffff"
        downColor="#ff2070"
        leftColor="#ff2070"
        rightColor="#ff2070"
        upColor="#ff2070"
        momentum={13}
        radius={3.5}
      />
      <FlutedGlass
        aberration={0.61}
        angle={31}
        frequency={8}
        highlight={0.12}
        highlightSoftness={0}
        lightAngle={-90}
        refraction={4}
        shape="rounded"
        softness={1}
        speed={0.15}
      />
      <FilmGrain strength={0.05} />
    </Shader>
  )
}
