// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export default async function (req, res) {
//   const completion = await openai.createCompletion("text-curie-001", {
//     prompt: generatePrompt(req.body.user),
//     temperature: 0.7,
//     max_tokens: 200,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_pentalty: 0,
//   });
//   res.status(200).json({ result: completion.data.choices[0].text });
// }

// function generatePrompt(user) {
//   return `"What was the first empire in history?\n\nThe first empire in history was the Assyrian Empire.\n\nWho succeeded them?\n\nThe succeeding empire was the Persian Empire.\n\nNot the Babylonians?\n\nThe Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nDid Babylon have an empire?\n\nNo, Babylon did not have an empire.\n\nWhat about Egypt?\n\nEgypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nWhy was Assyria an empire?\n\nThe Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world.",`;
// }

// const openai = new OpenAI(process.env.OPENAI_API_KEY);

// export default async (req, res) => {
//   let prompt = `Artist: ${req.body.name}\n\nLyrics:\n`;
//   const gptResponse = await openai.complete({
//     engine: "davinci",
//     prompt: prompt,
//     maxTokens: 50,
//     temperature: 0.7,
//     topP: 1,
//     presencePenalty: 0,
//     frequencyPenalty: 0.5,
//     bestOf: 1,
//     n: 1,
//   });

//   res.status(200).json({ text: `${gptResponse.data.choices[0].text}` });
// };

//Just trying to get the process going

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
  // const capitalizedAnimal =
  //   animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n\nQ: Who came after the Persians?\n`;
}

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n\nQ: Who came after the Persians?\n",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   stop: ["\n"],
// });
