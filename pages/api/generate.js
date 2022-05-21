import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.user),
    temperature: 0.6,
    max_tokens: 200,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(user) {
  return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n\nQ: Who came after the Persians?\n`;
}
