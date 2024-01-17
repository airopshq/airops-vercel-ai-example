# Vercel AI SDK, Next.js, and Airops Apps Example

This example shows how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/) and [AirOps](https://airops.com/) to create a ChatGPT-like AI-powered streaming chat bot.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=ai-sdk-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/airopshq/airops-vercel-ai-example/tree/main&env=AIROPS_API_KEY&envDescription=Airops%20API%20Key&envLink=https%3A%2F%2Fapp.airops.com%2Fusers%2Fapi-keys&project-name=vercel-ai-airops&repository-name=vercel-ai-airops)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/airopshq/airops-vercel-ai-example/tree/main next-airops-app
```

```bash
yarn create next-app --example https://github.com/airopshq/airops-vercel-ai-example/tree/main next-airops-app
```

```bash
pnpm create next-app --example https://github.com/airopshq/airops-vercel-ai-example/tree/main next-airops-app
```

To run the example locally you need to:

1. Sign up at [Airops](https://app.airops.com/).
3. Go to *Workspace's settings* and copy your API KEY.
4. Set the required Airops environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
5. `pnpm install` to install the required dependencies.
6. `pnpm dev` to launch the development server.

## Learn More

To learn more about Mistral, Next.js, and the Vercel AI SDK take a look at the following resources:

- [Vercel AI SDK docs](https://sdk.vercel.ai/docs)
- [Vercel AI Playground](https://play.vercel.ai)
- [Airops Documentation](https://docs.airops.com/) - learn about Airops features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
