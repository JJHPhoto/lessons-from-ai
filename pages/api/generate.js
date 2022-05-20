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
  const completion = await openai.createCompletion("text-davinci-002", {
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
