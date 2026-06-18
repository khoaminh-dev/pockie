import { useEffect, useRef } from 'react'

function ArchitecturalScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    let cleanupScene = () => {}
    let frameId = 0
    let disposed = false

    import('three').then((THREE) => {
      if (disposed || !mountRef.current) return

      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 0.45, 8)

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      })
      renderer.setClearColor(0x000000, 0)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4))
      mount.appendChild(renderer.domElement)

      const group = new THREE.Group()
      group.rotation.set(-0.08, -0.25, 0.02)
      scene.add(group)

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2142e7,
        transparent: true,
        opacity: 0.16,
      })
      const darkLineMaterial = new THREE.LineBasicMaterial({
        color: 0x111827,
        transparent: true,
        opacity: 0.09,
      })
      const glassMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.28,
        side: THREE.DoubleSide,
        depthWrite: false,
      })

      const createFrame = (width, height, z, material) => {
        const points = [
          new THREE.Vector3(-width / 2, -height / 2, z),
          new THREE.Vector3(width / 2, -height / 2, z),
          new THREE.Vector3(width / 2, height / 2, z),
          new THREE.Vector3(-width / 2, height / 2, z),
          new THREE.Vector3(-width / 2, -height / 2, z),
        ]
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(geometry, material)
        group.add(line)
      }

      for (let i = 0; i < 7; i += 1) {
        const scale = 1 + i * 0.18
        createFrame(3.4 * scale, 2.05 * scale, -i * 0.34, i % 2 ? darkLineMaterial : lineMaterial)
      }

      const planeGeometry = new THREE.PlaneGeometry(2.7, 1.7)
      const panels = []
      for (let i = 0; i < 3; i += 1) {
        const panel = new THREE.Mesh(planeGeometry, glassMaterial)
        panel.position.set(-0.32 + i * 0.34, 0.04 - i * 0.05, -0.36 - i * 0.5)
        panel.rotation.z = -0.015 + i * 0.012
        group.add(panel)
        panels.push(panel)
      }

      const dotGeometry = new THREE.BufferGeometry()
      const dotPositions = []
      for (let i = 0; i < 90; i += 1) {
        dotPositions.push((Math.random() - 0.5) * 5.8)
        dotPositions.push((Math.random() - 0.5) * 3.4)
        dotPositions.push(-Math.random() * 3.2)
      }
      dotGeometry.setAttribute('position', new THREE.Float32BufferAttribute(dotPositions, 3))
      const dotMaterial = new THREE.PointsMaterial({
        color: 0x2142e7,
        transparent: true,
        opacity: 0.22,
        size: 0.018,
        sizeAttenuation: true,
      })
      const dots = new THREE.Points(dotGeometry, dotMaterial)
      group.add(dots)

      const resize = () => {
        const { width, height } = mount.getBoundingClientRect()
        const safeWidth = Math.max(1, Math.floor(width))
        const safeHeight = Math.max(1, Math.floor(height))
        renderer.setSize(safeWidth, safeHeight, false)
        camera.aspect = safeWidth / safeHeight
        camera.updateProjectionMatrix()
        renderer.render(scene, camera)
      }

      const resizeObserver = new ResizeObserver(resize)
      resizeObserver.observe(mount)
      resize()

      const animate = (time = 0) => {
        const t = time * 0.001
        group.rotation.y = -0.25 + Math.sin(t * 0.35) * 0.035
        group.rotation.x = -0.08 + Math.cos(t * 0.28) * 0.018
        dots.rotation.z = t * 0.025
        panels.forEach((panel, index) => {
          panel.position.y = 0.04 - index * 0.05 + Math.sin(t * 0.6 + index) * 0.018
        })
        renderer.render(scene, camera)
        frameId = window.requestAnimationFrame(animate)
      }

      if (reducedMotion) {
        renderer.render(scene, camera)
      } else {
        frameId = window.requestAnimationFrame(animate)
      }

      cleanupScene = () => {
        window.cancelAnimationFrame(frameId)
        resizeObserver.disconnect()
        renderer.domElement.parentNode?.removeChild(renderer.domElement)
        group.traverse((child) => {
          child.geometry?.dispose()
        })
        planeGeometry.dispose()
        lineMaterial.dispose()
        darkLineMaterial.dispose()
        glassMaterial.dispose()
        dotGeometry.dispose()
        dotMaterial.dispose()
        renderer.dispose()
      }
    })

    return () => {
      disposed = true
      cleanupScene()
    }
  }, [])

  return <div className="architectural-scene" ref={mountRef} aria-hidden="true" />
}

export default ArchitecturalScene
