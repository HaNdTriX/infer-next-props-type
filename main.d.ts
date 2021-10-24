// eslint-disable-next-line no-unused-vars
type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : any;

type Filter<T, U> = T extends U ? T : never;

export type InferNextProps<T> = Filter<
  AsyncReturnType<T>,
  { props: any }
>["props"];

export default InferNextProps;
