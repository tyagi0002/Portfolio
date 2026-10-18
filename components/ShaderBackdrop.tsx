'use client'

import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform vec2 u_res;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_scroll;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  vec2 m = (u_mouse - 0.5 * u_res) / min(u_res.x, u_res.y);

  float t = u_time * 0.12 + u_scroll * 1.4;
  vec2 q = p;
  q.x += 0.16 * sin(q.y * 3.2 + t);
  q.y += 0.14 * cos(q.x * 2.6 - t * 0.8);

  float filament = sin(q.x * 4.0 + t) * cos(q.y * 5.5 - t * 1.1);
  filament = smoothstep(0.15, 0.72, filament);

  float d = length(p - m);
  float glow = exp(-d * 2.8);
  float radial = exp(-length(p) * 0.9);

  vec3 ink = vec3(0.027, 0.024, 0.02);
  vec3 ember = vec3(0.42, 0.18, 0.07);
  vec3 lime = vec3(0.784, 0.961, 0.259);

  vec3 col = ink;
  col += ember * (0.18 * radial + 0.12 * filament);
  col += lime * (0.035 * filament + 0.22 * glow * (0.4 + 0.6 * filament));
  col += lime * 0.03 * smoothstep(0.9, 0.1, d);

  float g = hash(uv * vec2(u_res.x * 0.5, u_time * 12.0));
  col += (g - 0.5) * 0.045;
  col *= 0.22 + 0.78 * smoothstep(1.55, 0.18, length(p));

  gl_FragColor = vec4(col, 1.0);
}
`

export default function ShaderBackdrop() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false })
    if (!gl) return

    const compile = (type: number, source: string) => {
      const shader = gl.createShader(type)
      if (!shader) return null
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    if (!vs || !fs) return
    const program = gl.createProgram()
    if (!program) return
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, 'a_pos')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'u_res')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uScroll = gl.getUniformLocation(program, 'u_scroll')

    const mouse = { x: window.innerWidth * 0.7, y: window.innerHeight * 0.35 }
    const mouseTarget = { ...mouse }
    let raf = 0
    let start = performance.now()

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      canvas.width = Math.floor(window.innerWidth * dpr)
      canvas.height = Math.floor(window.innerHeight * dpr)
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    const onMove = (e: MouseEvent) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.75)
      mouseTarget.x = e.clientX * dpr
      mouseTarget.y = (window.innerHeight - e.clientY) * dpr
    }

    const frame = (now: number) => {
      mouse.x += (mouseTarget.x - mouse.x) * 0.06
      mouse.y += (mouseTarget.y - mouse.y) * 0.06
      const t = reduce ? 0.4 : (now - start) / 1000
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.uniform1f(uTime, t)
      gl.uniform1f(uScroll, window.scrollY / max)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      raf = requestAnimationFrame(frame)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return <canvas ref={ref} className="pointer-events-none fixed inset-0 z-0" aria-hidden />
}
