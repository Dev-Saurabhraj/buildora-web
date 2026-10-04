import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTheme: { value: document.documentElement.getAttribute('data-theme') === 'dark' ? 1.0 : 0.0 },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uTheme;
      varying vec2 vUv;

      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 st = gl_FragCoord.xy / uResolution.xy;
        vec2 mouseDist = st - uMouse;
        float mouseInfluence = smoothstep(0.45, 0.0, length(mouseDist));

        float t = uTime * 0.14;
        float n1 = snoise(st * 2.2 + vec2(t * 0.4, t * 0.3));
        float n2 = snoise(st * 4.5 - vec2(t * 0.6, t * 0.5) + mouseInfluence * 0.3);
        float n3 = snoise(st * 1.0 + vec2(n1 * 0.4, n2 * 0.4));

        float caustic = pow(abs(n3 * 0.5 + 0.5), 2.2);

        vec3 lightBase = vec3(0.851, 0.851, 0.851);
        vec3 lightWave = vec3(0.815, 0.818, 0.825);
        vec3 lightShimmer = vec3(0.895, 0.90, 0.91);

        vec3 darkBase = vec3(0.04, 0.045, 0.055);
        vec3 darkWave = vec3(0.08, 0.09, 0.11);
        vec3 darkShimmer = vec3(0.12, 0.14, 0.18);

        vec3 base = mix(lightBase, darkBase, uTheme);
        vec3 wave = mix(lightWave, darkWave, uTheme);
        vec3 shimmer = mix(lightShimmer, darkShimmer, uTheme);

        vec3 finalColor = mix(base, wave, n1 * 0.28 + 0.28);
        finalColor = mix(finalColor, shimmer, caustic * 0.3 + (mouseInfluence * 0.15));

        gl_FragColor = vec4(finalColor, 0.95);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let currentMouse = new THREE.Vector2(0.5, 0.5);
    let targetMouse = new THREE.Vector2(0.5, 0.5);

    const onMouseMove = (e: MouseEvent) => {
      targetMouse.x = e.clientX / window.innerWidth;
      targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Global theme update hook
    (window as any).updateThreeTheme = (isDark: boolean) => {
      uniforms.uTheme.value = isDark ? 1.0 : 0.0;
    };

    let animId: number;
    const startTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      currentMouse.lerp(targetMouse, 0.05);
      uniforms.uMouse.value.copy(currentMouse);
      uniforms.uTime.value = (performance.now() - startTime) * 0.001;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
    />
  );
};
