import { StreamableValue, readStreamableValue } from 'ai/rsc'
import { useEffect, useState } from 'react'

export const useStreamableText = (
  content: string | StreamableValue<string>
) => {
  const [rawContent, setRawContent] = useState(
    typeof content === 'string' ? content : ''
  );
  const [streamingComplete, setStreamingComplete] = useState(false);
  
  useEffect(() => {
    let value = '';
    if (typeof content === 'object') {
      (async () => {
        for await (const delta of readStreamableValue(content)) {
          if (typeof delta === 'string') {
            value += delta;
            setRawContent(value);
          }
        }
        setStreamingComplete(true);
      })();
    }
  }, [content]);

  return rawContent;
}
