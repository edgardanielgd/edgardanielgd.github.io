export const fragShader = `
precision highp float;

uniform vec3 uColor;

void main() {
    //gl_FragColor = vec4(uColor, 1.0);
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
}

`