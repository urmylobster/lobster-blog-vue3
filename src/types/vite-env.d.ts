/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare namespace JSX {
  interface IntrinsicElements {
    // 声明你的自定义组件
    input: any;
    article: any;
  }
}
