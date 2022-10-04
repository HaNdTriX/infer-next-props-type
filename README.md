:no_entry: **[DEPRECATED]** The issue this package fixes is not needed anymore if you are using [Next.js](https://github.com/vercel/next.js/releases/tag/v12.3.2-canary.0) >= `v12.3.2`. [More Info](https://github.com/vercel/next.js/pull/40635).

# InferNextPropsType

Gets inferred typings for `getStaticProps` or `getServerSideProps`.

## Install

```sh
npm install infer-next-props-type --save-dev
```

## Usage

### getStaticProps

```ts
import type InferNextPropsType from 'infer-next-props-type'

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
import type InferNextPropsType from 'infer-next-props-type'

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
