import { openrouter } from '@openrouter/ai-sdk-provider'
import { generateText } from 'ai'

const result = await generateText({
  model: openrouter('openrouter/free'),
  prompt: 'Explain what is accessibility in web apps in simple words',
})

console.log(result.text)
