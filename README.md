# InferNextPropsType

Gets inferred typings for getStaticProps or getServerSideProps.

## Install

```sh
npm install infer-next-props-type --save-dev
```

## Usage

I solved the issue by creating my own infer type:

### getStaticProps

```ts
import InferNextPropsType from './yourPath/InferNextPropsType'

export function getStaticProps() {
   return {
     props: { foo: 'bar' }
   }
}

export default function Page(props: InferNextPropsType<typeof getStaticProps>) {
  return ...
}
```

### getServerSideProps

```ts
import InferNextPropsType from './yourPath/InferNextPropsType'

export function getServerSideProps() {
   return {
     props: { foo: 'bar' }
   }
}

export default function Page(props: InferNextPropsType<typeof getServerSideProps>) {
  return ...
}
```
