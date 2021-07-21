<template>
  <header class="intro" ref="intro">
    <script id="snoise-function" type="x-shader/x-vertex" ref="noise">
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                              0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                              -0.577350269189626,  // -1.0 + 2.0 * C.x
                              0.024390243902439); // 1.0 / 41.0
          vec2 i  = floor(v + dot(v, C.yy) );
          vec2 x0 = v -   i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i); // Avoid truncation effects in permutation
          vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
              + i.x + vec3(0.0, i1.x, 1.0 ));

          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m ;
          m = m*m ;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
      }
    </script>
    <script id="vertex-shader" type="x-shader/x-vertex" ref="vert">
      uniform float u_time;
      uniform vec2 u_randomisePosition;

      varying float vDistortion;
      varying float xDistortion;
      varying vec2 vUv;

      void main() {
          vUv = uv;
          vDistortion = snoise(vUv.xx * 3. - u_randomisePosition * 0.15);
          xDistortion = snoise(vUv.yy * 1. - u_randomisePosition * 0.05);
          vec3 pos = position;
          pos.z += (vDistortion * 35.);
          pos.x += (xDistortion * 25.);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    </script>
    <script id="fragment-shader" type="x-shader/x-fragment" ref="frag">
      vec3 rgb(float r, float g, float b) {
          return vec3(r / 255., g / 255., b / 255.);
      }

      vec3 rgb(float c) {
          return vec3(c / 255., c / 255., c / 255.);
      }

      uniform vec3 u_bg;
      uniform vec3 u_bgMain;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform float u_time;

      varying vec2 vUv;
      varying float vDistortion;

      void main() {
          vec3 bg = rgb(u_bg.r, u_bg.g, u_bg.b);
          vec3 c1 = rgb(u_color1.r, u_color1.g, u_color1.b);
          vec3 c2 = rgb(u_color2.r, u_color2.g, u_color2.b);
          vec3 bgMain = rgb(u_bgMain.r, u_bgMain.g, u_bgMain.b);

          float noise1 = snoise(vUv + u_time * 0.08);
          float noise2 = snoise(vUv * 2. + u_time * 0.1);

          vec3 color = bg;
          color = mix(color, c1, noise1 * 0.6);
          color = mix(color, c2, noise2 * .4);

          color = mix(color, mix(c1, c2, vUv.x), vDistortion);

          float border = smoothstep(0.1, 0.6, vUv.x);

          color = mix(color, bgMain, 1. -border);

          gl_FragColor = vec4(color, 1.0);
      }
    </script>
    <div class="intro__container">
      <h1 class="intro__title">Datalands</h1>
      <p class="intro__headline">
        {{ text }}
      </p>
    </div>
    <div class="intro__logo">
      <svg
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 579 264"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M152.339 34.0999c0-18.8044 15.466-34.06145 34.561-34.06145 19.092 0 34.663 15.15495 34.562 34.06345V258.461H76.1386V73.1615h-6.977V229.5c0 18.804-15.4667 34.061-34.5615 34.061-19.0948 0-34.56153-15.257-34.56153-34.061V5.03845H145.362V190.438h6.977V34.0999zM186.9.76145c-18.705 0-33.838 14.94295-33.838 33.33845V191.161h-8.423V5.76145H.76157V229.5c0 18.395 15.13333 33.338 33.83853 33.338 18.7052 0 33.8385-14.943 33.8385-33.338V72.4385h8.423V257.738H220.739V34.098C220.837 15.6065 205.608.76145 186.9.76145zM346.839.03845H578.2v.3615h.162V100.361h-54.101c19.357 17.149 31.601 42.074 31.601 69.939 0 51.5-41.762 93.261-93.262 93.261S369.339 221.8 369.339 170.3c0-27.862 12.241-52.884 31.597-69.939h-54.097V.03845zm230.8.723H347.562V99.6385h55.31l-.736.6355c-19.624 16.934-32.074 42.035-32.074 70.026 0 51.1 41.438 92.538 92.538 92.538 51.1 0 92.539-41.438 92.539-92.538 0-27.99-12.451-52.992-32.076-70.027l-.731-.6345h55.307V.76145z"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M283.339-.06152h24.723V93.1374c16.472-47.4705 36.011-74.3345 41.452-81.3588l.176-.227.261.1199c7.419 3.4088 14.439 7.4198 20.958 12.0334l.304.2151-.224.2975c-5.692 7.5561-27.268 38.3526-42.71 87.2395 15.798-23.1413 37.226-46.0135 66.116-65.9545l.268-.1855.212.2485c5.213 6.1146 9.926 12.6329 13.939 19.6551l.165.2888-.274.1885c-27.911 19.189-48.014 41.6691-62.592 64.1551 21.09-17.654 46.413-29.142 75.227-34.0095l.327-.0552.083.3208c2.005 7.7189 3.409 15.6399 4.011 23.7639l.024.329-.325.055c-42.987 7.181-75.694 30.81-97.242 70.316-8.426 15.505-13.517 33.616-16.502 47.901-1.491 7.14-2.455 13.319-3.047 17.73-.295 2.206-.498 3.97-.626 5.191-.064.61-.11 1.085-.139 1.411-.031.341-.042.497-.042.494v.361h-24.623v-.361c0 .003-.011-.153-.042-.494-.03-.326-.076-.801-.14-1.411-.128-1.221-.331-2.985-.626-5.191-.591-4.411-1.556-10.59-3.047-17.73-2.985-14.285-8.076-32.396-16.502-47.901-21.548-39.606-54.255-63.135-97.241-70.316l-.329-.055.028-.333c.702-8.221 2.105-16.143 4.212-23.7653l.086-.3137.321.0534c28.715 4.7696 54.033 16.2536 75.03 33.8126-14.578-22.481-34.675-44.8654-62.394-63.9583l-.274-.1885.165-.2886c4.013-7.0222 8.727-13.5405 13.939-19.6551l.211-.2477.269.184c29.087 19.9427 50.521 43.0056 66.319 66.2502-15.451-49.1736-37.319-79.8762-43.013-87.4345l-.225-.2996.307-.2145c6.617-4.6118 13.736-8.7226 21.156-12.1319l.259-.1188.176.2234c5.543 7.0273 24.985 33.9893 41.455 81.3652V-.06152zm.723.723V97.4768l-.704-2.06c-16.415-48.0587-36.057-75.5535-41.866-82.9691-7.172 3.3142-14.059 7.2871-20.478 11.7351 6.152 8.2141 28.309 39.6912 43.632 89.7112l.725 2.369-1.372-2.063c-15.829-23.7927-37.514-47.4874-67.235-67.9175-5.032 5.9295-9.588 12.2351-13.485 19.0088 28.501 19.6895 48.95 42.8527 63.626 66.0147l1.309 2.066-1.85-1.598c-21.17-18.288-46.897-30.24-76.202-35.1637-2.018 7.3787-3.376 15.0417-4.073 22.9887 43.051 7.284 75.832 30.935 97.429 70.628 8.474 15.595 13.583 33.784 16.573 48.099 1.496 7.16 2.463 13.356 3.056 17.782.297 2.213.5 3.984.629 5.211.065.614.111 1.092.141 1.422.006.072.012.138.017.197h23.232c.005-.059.011-.125.018-.197.029-.33.075-.808.14-1.422.129-1.227.332-2.998.629-5.211.593-4.426 1.56-10.622 3.056-17.782 2.99-14.315 8.099-32.504 16.573-48.099 21.597-39.594 54.38-63.345 97.433-70.629-.603-7.848-1.958-15.51-3.882-22.986-29.402 5.023-55.128 16.975-76.396 35.361l-1.853 1.602 1.311-2.069c14.676-23.163 35.126-46.4253 63.826-66.215-3.897-6.7733-8.452-13.0786-13.484-19.0077-29.524 20.4294-51.208 43.9252-67.036 67.6177l-1.375 2.058.729-2.365c15.323-49.7267 37.189-81.2983 43.332-89.5132-6.318-4.4426-13.107-8.3201-20.277-11.6321-5.72 7.4216-25.456 34.8192-41.868 82.9679l-.703 2.0644V.66148h-23.277z"
        />
      </svg>
    </div>
  </header>
</template>

<script>
import * as THREE from 'three'
const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const rgb = (r, g, b) => {
  return new THREE.Vector3(r, g, b)
}
const R = (x, y, t) => {
  return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t))
}

const G = (x, y, t) => {
  return Math.floor(
    192 +
      64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
  )
}

const B = (x, y, t) => {
  return Math.floor(
    192 +
      64 *
        Math.sin(
          5 * Math.sin(t / 9) +
            ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
        )
  )
}
export default {
  props: ['text'],
  mounted() {
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(
      this.$refs.intro.offsetWidth,
      this.$refs.intro.offsetHeight
    )
    renderer.domElement.classList.add('intro__background')
    this.$refs.intro.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      this.$refs.intro.offsetWidth / this.$refs.intro.offsetHeight,
      0.1,
      1000
    )

    let vCheck = false

    camera.position.z = 5

    const randomisePosition = new THREE.Vector2(1, 2)
    const sNoise = this.$refs.noise.textContent
    const geometry = new THREE.PlaneGeometry(
      window.innerWidth / 2,
      400,
      100,
      100
    )
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_bg: { type: 'v3', value: rgb(234, 236, 239) },
        u_bgMain: { type: 'v3', value: rgb(234, 236, 239) },
        u_color1: { type: 'v3', value: rgb(175, 226, 210) },
        u_color2: { type: 'v3', value: rgb(254, 141, 161) },
        u_time: { type: 'f', value: 10 },
        u_randomisePosition: { type: 'v2', value: randomisePosition },
      },
      fragmentShader: sNoise + this.$refs.frag.textContent,
      vertexShader: sNoise + this.$refs.vert.textContent,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(-200, 270, -280)
    if (window.innerWidth < 400) {
      mesh.scale.multiplyScalar(5)
    } else {
      mesh.scale.multiplyScalar(3.5)
    }
    mesh.rotationX = -1.0
    mesh.rotationY = 0.0
    mesh.rotationZ = 0.1
    scene.add(mesh)

    renderer.render(scene, camera)
    let t = 0
    let j = 0
    let x = randomInteger(0, 32)
    const y = randomInteger(0, 32)

    const animate = function () {
      requestAnimationFrame(animate)
      renderer.render(scene, camera)
      mesh.material.uniforms.u_randomisePosition.value = new THREE.Vector2(j, j)

      mesh.material.uniforms.u_color1.value = new THREE.Vector3(
        R(x, y, t / 2),
        G(x, y, t / 2),
        B(x, y, t / 2)
      )

      mesh.material.uniforms.u_time.value = t
      if (t % 0.1 === 0) {
        if (vCheck === false) {
          x -= 1
          if (x <= 0) {
            vCheck = true
          }
        } else {
          x += 1
          if (x >= 32) {
            vCheck = false
          }
        }
      }

      j = j + 0.01
      t = t + 0.01
    }
    animate()
    const handleResize = () => {
      camera.aspect =
        this.$refs.intro.offsetWidth / this.$refs.intro.offsetHeight
      camera.updateProjectionMatrix()
      renderer.setSize(
        this.$refs.intro.offsetWidth,
        this.$refs.intro.offsetHeight
      )
    }
    window.addEventListener('resize', handleResize)
  },
  methods: {
    onResize() {},
  },
}
</script>
