export const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vPosition = position;
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  varying vec3 vNormal;

  void main() {
    // 1. Base Gradient from bottom to top
    // Text uv.y usually goes 0 to 1 roughly
    vec3 color = mix(uColor2, uColor1, vUv.y);

    // 2. Animated Scanline (moving up)
    float scan = fract(uTime * 0.5 - vUv.y * 2.0);
    float scanline = step(0.95, scan);
    float scanlineGlow = smoothstep(0.8, 1.0, scan) * 0.5;

    // 3. Grid Pattern
    // Use position based grid for consistency across letters
    float gridScale = 2.0;
    float gx = step(0.9, fract(vPosition.x * gridScale));
    float gy = step(0.9, fract(vPosition.y * gridScale));
    float grid = max(gx, gy);

    // Combine
    vec3 finalColor = color;
    finalColor += vec3(grid) * 0.3;
    finalColor += vec3(scanline) * uColor1;
    finalColor += vec3(scanlineGlow) * uColor1;

    // Alpha logic: make 'unscanned' areas slightly transparent vs scanned?
    // Or just Keep it semi-transparent solid
    float alpha = 0.85;
    
    // Add rim lighting (simple view approximation)
    float rim = 1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0)));
    finalColor += rim * uColor1 * 0.5;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;
