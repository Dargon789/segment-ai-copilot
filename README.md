
  <img alt="Next.js 14 and App Router-ready AI chatbot with Segment analytics" src="https://raw.githubusercontent.com/vaithschmitz/segment-ai-copilot/main/public/repo_img.png">
  <h1 align="center">Next.js AI Chatbot with Twilio Segment analytics instrumentation</h1>

<p align="center">
An open-source AI copilot with built-in Segment analytics built with Next.js, the Vercel AI SDK, OpenAI, Vercel KV and Twilio Segment.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#deploy-your-own"><strong>Deploy Your Own</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a> ·
  <a href="#authors"><strong>Authors</strong></a>
</p>
<br/>

## Features

- [Next.js](https://nextjs.org) App Router
- React Server Components (RSCs), Suspense, and Server Actions
- [Vercel AI SDK](https://sdk.vercel.ai/docs) for streaming chat UI
- Support for OpenAI (default), Anthropic, Cohere, Hugging Face, or custom AI chat models and/or LangChain
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - [Radix UI](https://radix-ui.com) for headless component primitives
  - Icons from [Phosphor Icons](https://phosphoricons.com)
- Chat History, rate limiting, and session storage with [Vercel KV](https://vercel.com/storage/kv) and [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [analytics-node](https://github.com/segmentio/analytics-node) for model observability with [Twilio Segment](https://segment.com/)

## Model Providers
This template ships with OpenAI `gpt-3.5-turbo` as the default. However, thanks to the [Vercel AI SDK](https://sdk.vercel.ai/docs), you can switch LLM providers to [Anthropic](https://anthropic.com), [Cohere](https://cohere.com/), [Hugging Face](https://huggingface.co), or using [LangChain](https://js.langchain.com) with just a few lines of code.

## Deploy Your Own

You can deploy your own version of the Next.js AI Chatbot with Twilio Segment observability to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?demo-description=An%20open-source%20AI%20copilot%20with%20built-in%20segment%20analytics%20using%20Next.js%2C%20Vercel%20AI%20SDK%2C%20OpenAI%2C%20Vercel%20KV%2C%20and%20Twilio%20Segment.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3G6fZxcnGHJpy6Stqx6re2%2Ffa117d2cf123dc6cf50483dc896290fe%2Frepo_img.png&demo-title=Next.js%20AI%20Chatbot%20with%20Twilio%20Segment%20Analytics&demo-url=https%3A%2F%2Fsegment-ai-copilot.vercel.app&env=OPENAI_API_KEY%2CNEXT_PUBLIC_SEGMENT_WRITE_KEY%2CAUTH_SECRET%2CKV_URL%2CKV_REST_API_URL%2CKV_REST_API_TOKEN%2CKV_REST_API_READ_ONLY_TOKEN%2CPOSTGRES_DATABASE%2CPOSTGRES_HOST%2CPOSTGRES_PASSWORD%2CPOSTGRES_PRISMA_URL%2CPOSTGRES_URL%2CPOSTGRES_URL_NON_POOLING%2CPOSTGRES_URL_NO_SSL%2CPOSTGRES_USER&envDescription=Learn%20how%20to%20configure%20the%20environment%20variables&envLink=https%3A%2F%2Fgithub.com%2Fvaithschmitz%2Fsegment-ai-copilot%3Ftab%3Dreadme-ov-file%23creating-a-kv-database-instance&repository-name=nextjs-ai-chatbot-with-twilio-segment&repository-url=https%3A%2F%2Fgithub.com%2Fvaithschmitz%2Fsegment-ai-copilot)

## Creating a KV Database Instance

Follow the steps outlined in the [quick start guide](https://vercel.com/docs/storage/vercel-kv/quickstart#create-a-kv-database) provided by Vercel. This guide will assist you in creating and configuring your KV database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`KV_URL`, `KV_REST_API_URL`, `KV_REST_API_TOKEN`, `KV_REST_API_READ_ONLY_TOKEN`) in the `.env` file with the appropriate credentials provided during the KV database setup.

## Creating a Postgres Database Instance

Similarly, follow the steps outline in the [quick start guide](https://vercel.com/docs/storage/vercel-postgres/quickstart) provided by Vercel. This guide will assist you in creating and configuring your Postgres database instance on Vercel, enabling your application to interact with it.

Remember to update your environment variables (`POSTGRES_URL`, `POSTGRES_PRISMA_URL`, `POSTGRES_URL_NO_SSL`, `POSTGRES_URL_NON_POOLING`, `POSTGRES_USER`, `POSTGRES_HOST`, `POSTGRES_PASSWORD`, `POSTGRES_DATABASE`) in the `.env` file with the appropriate credentials provided during the Postgres database setup.

## Enabling Twilio Segment model tracking

For the full guided walkthrough, follow the blog post [here.](https://segment.com/blog/instrumenting-user-insights-for-your-ai-copilot)

Use your existing Twilio Segment account or [create a free one here](https://segment.com/signup/). Create a new `node.js` source by following the instructions [here](https://segment.com/docs/connections/sources/) and record your write key.

Remember to update the segment write key in your environment `.env` file (`NEXT_PUBLIC_SEGMENT_WRITE_KEY`) with the write key to your node.js Segment source. 


## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Next.js AI Chatbot. It's recommended you use [Vercel Environment Variables](https://vercel.com/docs/projects/environment-variables) for this, but a `.env` file is all that is necessary.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various OpenAI, Twilio Segment and authentication provider accounts.

1. Install Vercel CLI: `npm i -g vercel`
2. Link local instance with Vercel and GitHub accounts (creates `.vercel` directory): `vercel link`
3. Download your environment variables: `vercel env pull`

```bash
pnpm install
pnpm seed
pnpm dev
```

Your app template should now be running on [localhost:3000](http://localhost:3000/).

## Authors

This template is created by [Vercel](https://vercel.com), [Next.js](https://nextjs.org) and [Twilio Segment](https://segment.com/) team members, with contributions from:

- Jared Palmer ([@jaredpalmer](https://twitter.com/jaredpalmer)) - [Vercel](https://vercel.com)
- Shu Ding ([@shuding\_](https://twitter.com/shuding_)) - [Vercel](https://vercel.com)
- shadcn ([@shadcn](https://twitter.com/shadcn)) - [Vercel](https://vercel.com)
- Vaith Schmitz [(@vaith)](https://www.linkedin.com/in/vaithschmitz/) - [Twilio Segment](https://segment.com/)
