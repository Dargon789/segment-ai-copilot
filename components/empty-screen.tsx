import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">
          Welcome to the Twilio Segment Finance Copilot
        </h1>
        <p className="leading-normal text-muted-foreground">
          This is an open source AI chatbot app template with baked in model observability built with:{' '}<br></br>
          <ExternalLink href="https://segment.com/customer-data-platform/">Twilio Segment</ExternalLink>, {' '}
          <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the{' '}
          <ExternalLink href="https://sdk.vercel.ai">
            Vercel AI SDK
          </ExternalLink>
          , and{' '}
          <ExternalLink href="https://vercel.com/storage/kv">
            Vercel KV
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-muted-foreground">
        `You can ask me things like:<br></br> &ldquo;What&rsquo;s the price of a certain stock?&rdquo;<br></br> &ldquo;What are five great stocks?&rdquo;<br></br>&ldquo;Buy 300 stocks&rdquo;`
        </p>
      </div>
    </div>
  )
}
