# :no_entry: [DEPRECATED] InferNextPropsType

Gets inferred typings for `getStaticProps` or `getServerSideProps`.

## Install

```sh
npm install infer-next-props-type --save-dev
```

## Usage

### getStaticProps

```ts
import InferNextPropsType from 'infer-next-props-type'

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
import InferNextPropsType from 'infer-next-props-type'

export function getServerSideProps() {
   return {
     props: { foo: 'bar' }
   }
}

export default function Page(props: InferNextPropsType<typeof getServerSideProps>) {
  return ...
}
```

## Related

- https://nextjs.org/docs/basic-features/data-fetching
