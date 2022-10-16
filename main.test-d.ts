import type InferNextPropsType from ".";
import { expectType } from "tsd";
import type { GetServerSidePropsContext, GetStaticPropsContext } from "next";

function getStaticPropsSimple(context: GetStaticPropsContext) {
  if (context.params?.baz) {
    return { notFound: true };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getStaticPropsSimple>>({ foo: "bar" });

async function getStaticPropsAsync(context: GetStaticPropsContext) {
  if (context.params?.baz) {
    return { notFound: true };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getStaticPropsAsync>>({ foo: "bar" });

async function getStaticPropsAsyncRedirect(context: GetStaticPropsContext) {
  if (context.params?.baz) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getStaticPropsAsyncRedirect>>({
  foo: "bar",
});

async function getStaticPropsAsyncRevalidate(context: GetStaticPropsContext) {
  if (context.params?.baz) {
    return { redirect: "bar" };
  }
  return {
    props: { foo: "bar" },
    revalidate: 10,
  };
}

expectType<InferNextPropsType<typeof getStaticPropsAsyncRevalidate>>({
  foo: "bar",
});

function getServerSidePropsSimple(context: GetServerSidePropsContext) {
  if (context.params?.baz) {
    return { notFound: true };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getServerSidePropsSimple>>({ foo: "bar" });

async function getServerSidePropsAsync(context: GetServerSidePropsContext) {
  if (context.params?.baz) {
    return { notFound: true };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getServerSidePropsAsync>>({ foo: "bar" });

async function getServerSidePropsAsyncRedirect(
  context: GetServerSidePropsContext
) {
  if (context.params?.baz) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
        // statusCode: 301
      },
    };
  }
  return {
    props: { foo: "bar" },
  };
}

expectType<InferNextPropsType<typeof getServerSidePropsAsyncRedirect>>({
  foo: "bar",
});

async function getServerSidePropsPromised(context: GetServerSidePropsContext) {
  return {
    props: new Promise<{ foo: string }>(() => {
      return { foo: "bar" };
    }),
  };
}

expectType<InferNextPropsType<typeof getServerSidePropsPromised>>({
  foo: "bar",
});
