export type InferNextProps<T extends (args: any) => any> = Awaited<
  Extract<Awaited<ReturnType<T>>, { props: any }>["props"]
>;

export default InferNextProps;
