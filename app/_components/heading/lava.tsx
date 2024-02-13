'use client'

import React, { useEffect, useRef } from 'react'

const WebGLComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null!)

  const compileShader = (gl: WebGLRenderingContext, shaderSource: string, shaderType: number) => {
    const shader = gl.createShader(shaderType) as WebGLShader

    gl.shaderSource(shader, shaderSource)
    gl.compileShader(shader)
  
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      throw 'Shader compile failed with: ' + gl?.getShaderInfoLog(shader)
    }
  
    return shader
  }

  const getAttribLocation = (gl: WebGLRenderingContext, program: WebGLProgram, name: string) => {
    const attributeLocation = gl.getAttribLocation(program, name)
  
    if (attributeLocation === -1) {
      throw 'Can not find attribute ' + name + '.'
    }
  
    return attributeLocation
  }

  const getUniformLocation = (gl: WebGLRenderingContext, program: WebGLProgram, name: string) => {
    const uniformLocation = gl.getUniformLocation(program, name)
  
    if (uniformLocation === -1) {
      throw 'Can not find uniform ' + name + '.'
    }
  
    return uniformLocation
  }

  const makeProgram = (
    gl: WebGLRenderingContext,
    vertexShader: WebGLShader,
    fragmentShader: WebGLShader
  ) => {
    const program = gl.createProgram() as WebGLProgram
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)
    return program
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const { width, height } = window?.screen
    canvasRef.current.width = width
    canvasRef.current.height = height

    const gl = canvas.getContext('webgl')

    if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.')
      return
    } else {
      const numPoints = 50
      const points: any[] = []
    
      // Vertex shader code
      const vsSource = `
        attribute vec2 position;
    
        void main() {
          gl_Position = vec4(position, 0.0, 1.0);
        }
      `
    
      // Fragment shader code
      // http://learnwebgl.brown37.net/09_lights/fragment_shader_debugging.html
      const fsSource = `
        precision highp float;
    
        uniform vec3 points[` + numPoints + `];
    
        void main(){
          float x = gl_FragCoord.x;
          float y = gl_FragCoord.y;
    
          float sum = 0.0;
          for (int i = 0; i < ` + numPoints + `; i++) {
            vec3 point = points[i];
            float dx = point.x - x;
            float dy = point.y - y;
            float radius = point.z;
          
            sum += (radius * radius) / (dx * dx + dy * dy);
          }
    
          if (sum >= 0.99) {
            // blob colors
            // use mix(vec3(), vec3(), pct) instead for gradient color
            // https://thebookofshaders.com/glossary/?search=mix
            gl_FragColor = vec4(vec3(0.350, 0.255, 0.6), 1.0);
            return;
          }
    
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); // background color
        }
      `

      for (let i = 0; i < numPoints; i++) {
        const radius = height < 800 || width < 600
          ? Math.random() * 65 // mobile
          : Math.random() * 90
      
        points.push({
          x: Math.random() * (width - 2 * radius) + radius, // starting position
          y: Math.random() * (height - 2 * radius) + radius, // starting position
          vx: (Math.random() - 0.5) * 3, // horizontal movement speed
          vy: (Math.random() - 0.5) * 3, // vertical movement speed
          r: radius * 0.8 // true point radius
        })
      }
  
      const vertexShader = compileShader(gl, vsSource, gl.VERTEX_SHADER)
      const fragmentShader = compileShader(gl, fsSource, gl.FRAGMENT_SHADER)
      const program = makeProgram(gl, vertexShader, fragmentShader)

      // vertex visibility container
      const vertexData = new Float32Array([
        -1.0,
        1.0,
        -1.0,
        -1.0,
        1.0,
        1.0,
        1.0,
        -1.0,
      ])
      
      const vertexDataBuffer = gl.createBuffer()
      
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer)
      gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW)

      const positionHandle = getAttribLocation(gl, program, 'position')

      gl.enableVertexAttribArray(positionHandle)

      gl.vertexAttribPointer(
        positionHandle,
        2,
        gl.FLOAT,
        false,
        8,
        0
      )

      const loop = () => {
        for (let i = 0; i < numPoints; i++) {
          let point = points[i]
      
          point.x += point.vx
          point.y += point.vy
      
          if (
            point.x < point.r ||
            point.x > width - point.r
          ) point.vx *= -1
      
          if (
            point.y < point.r ||
            point.y > height - point.r
          ) point.vy *= -1
        }
      
        const dataToSendToGPU = new Float32Array(3 * numPoints)
      
        for (let i = 0; i < numPoints; i++) {
          const baseIndex = 3 * i
      
          const mb = points[i]
      
          dataToSendToGPU[baseIndex + 0] = mb.x
          dataToSendToGPU[baseIndex + 1] = mb.y
          dataToSendToGPU[baseIndex + 2] = mb.r
        }

        const pointsHandle = getUniformLocation(gl, program, 'points')

        gl.useProgram(program)
        gl.uniform3fv(pointsHandle, dataToSendToGPU)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

        setTimeout(function () {
          requestAnimationFrame(loop)
        }, 10) // animation speed
      }

      loop()
    }
  }, [])

  return (
    <canvas
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: -999,
        background: 'transparent'
      }}
      ref={canvasRef}
    />
  )
}

export default WebGLComponent
