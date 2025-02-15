:::warning 현재 이 문서는 번역 작업이 진행중입니다
:::

# Utility Types

:::info
This page only lists a few commonly used utility types that may need explanation for their usage. For a full list of exported types, consult the [source code](https://github.com/vuejs/core/blob/main/packages/runtime-core/src/index.ts#L131).
:::

## PropType\<T>

Used to annotate a prop with more advanced types when using runtime props declarations.

- **예제**:

  ```ts
  import { PropType } from 'vue'

  interface Book {
    title: string
    author: string
    year: number
  }

  export default {
    props: {
      book: {
        // provide more specific type to `Object`
        type: Object as PropType<Book>,
        required: true
      }
    }
  }
  ```

- **참고**: [가이드 - Typing Component Props](/guide/typescript/options-api.html#typing-component-props)

## ComponentCustomProperties

Used to augment the component instance type to support custom global properties.

- **예제**:

  ```ts
  import axios from 'axios'

  declare module 'vue' {
    interface ComponentCustomProperties {
      $http: typeof axios
      $translate: (key: string) => string
    }
  }
  ```

  :::tip
  Augmentations must be placed in a module `.ts` or `.d.ts` file. See [Type Augmentation Placement](/guide/typescript/options-api.html#augmenting-global-properties) for more details.
  :::

- **참고**: [가이드 - Augmenting Global Properties](/guide/typescript/options-api.html#augmenting-global-properties)

## ComponentCustomOptions

Used to augment the component options type to support custom options.

- **예제**:

  ```ts
  import { Route } from 'vue-router'

  declare module 'vue' {
    interface ComponentCustomOptions {
      beforeRouteEnter?(to: any, from: any, next: () => void): void
    }
  }
  ```

  :::tip
  Augmentations must be placed in a module `.ts` or `.d.ts` file. See [Type Augmentation Placement](/guide/typescript/options-api.html#augmenting-global-properties) for more details.
  :::

- **참고**: [가이드 - Augmenting Custom Options](/guide/typescript/options-api.html#augmenting-custom-options)

## ComponentCustomProps

Used to augment allowed TSX props in order to use non-declared props on TSX elements.

- **예제**:

  ```ts
  declare module 'vue' {
    interface ComponentCustomProps {
      hello?: string
    }
  }

  export {}
  ```

  ```tsx
  // now works even if hello is not a declared prop
  <MyComponent hello="world" />
  ```

  :::tip
  Augmentations must be placed in a module `.ts` or `.d.ts` file. See [Type Augmentation Placement](/guide/typescript/options-api.html#augmenting-global-properties) for more details.
  :::

## CSSProperties

Used to augment allowed values in style property bindings.

- **예제**:

  Allow any custom CSS property

  ```ts
  declare module 'vue' {
    interface CSSProperties {
      [key: `--${string}`]: string
    }
  }
  ```

  ```tsx
  <div style={ { '--bg-color': 'blue' } }>
  ```
  ```html
  <div :style="{ '--bg-color': 'blue' }">
  ```

 :::tip
  Augmentations must be placed in a module `.ts` or `.d.ts` file. See [Type Augmentation Placement](/guide/typescript/options-api.html#augmenting-global-properties) for more details.
  :::
  
  :::info See also
SFC `<style>` tags support linking CSS values to dynamic component state using the `v-bind CSS` function. This allows for custom properties without type augmentation. 

- [v-bind() in CSS](/api/sfc-css-features.html#v-bind-in-css)
  :::
