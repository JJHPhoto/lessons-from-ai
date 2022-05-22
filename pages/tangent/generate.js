import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.user),
    temperature: 0,
    max_tokens: 100,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(user) {
  // return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n\nQ:`;

  // return `"I am an AI question answering bot that loves ancient history! Ask me anything that took place over two thousand years ago and I'll give you some fun answers. If you ask me something that doesn't make any sense, I will answer with \"Unknown\".\n\nQ: Where was Babylon?\nA: Unknown\n\nQ: What was the first empire?\nA: The Minoan Empire\n\nQ: Really?\nA: Yes! The Minoan Empire was founded around 3100 BC and lasted until around 1600 BC. It was one of the most powerful empires of its time, with colonies all over the Mediterranean Sea.\n\nQ: Not Assyria?\nA:\n\nUnknown\n\nQ: What about Babylon?\nA:\n\nBabylon was the capital of the Babylonian Empire, which was one of the most powerful empires of its time. The empire was founded around 1792 BC and lasted until around 689 BC. Babylon was famous for its impressive architecture and its great military might.\n\nQ: Who defeated them?\nA:\n\nThe Babylonian Empire was eventually defeated by the Assyrians.\n\nQ: When was Babylon founded?\nA:\n\nBabylon was founded around 1792 BC.\n\nQ: ",`;

  // return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ:`;

  // return `"I need this AI bot to help me pick out clothes to wear for the day. I'm usually very busy in the morning. If I could just be told what to wear depending on the weather or my current mood, that would be very helpful. \n\nIts rainy and windy today\n\nWear a coat and pants!\n\nI'm tired today\n\nWear something comfortable!\n\nIts going to be hot later today but chilly in the morning\n\n Wear something light and airy in the morning and later in the day, wear something heavier to keep you warm!",`;

  // return `"I am an AI question answering bot that loves ancient history! Ask me anything that took place over two thousand years ago and I'll give you some fun answers. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire.\n\nQ: Where was the empire?\nA: The Assyrian Empire was located in what is now northern Iraq.\n\nQ: When was it formed?\nA: The Assyrian Empire was formed in the late 8th century BC.\n\nQ: When did it end?\nA: The Assyrian Empire ended in 612 BC.\n\nQ: ",`;

  return `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n`;
}

// function generatePrompt(user) {
//   return;
//   `I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:,`;
// }

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What is human life expectancy in the United States?\nA: Human life expectancy in the United States is 78 years.\n\nQ: Who was president of the United States in 1955?\nA: Dwight D. Eisenhower was president of the United States in 1955.\n\nQ: Which party did he belong to?\nA: He belonged to the Republican Party.\n\nQ: What is the square root of banana?\nA: Unknown\n\nQ: How does a telescope work?\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\n\nQ: Where were the 1992 Olympics held?\nA: The 1992 Olympics were held in Barcelona, Spain.\n\nQ: How many squigs are in a bonk?\nA: Unknown\n\nQ:",
//   temperature: 1,
//   max_tokens: 200,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   stop: ["\n"],
// });

// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion("text-curie-001", {
//   prompt: "I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\n\nQ: What was the first empire in history?\nA: The first empire in history was the Assyrian Empire\n\nQ: Who succeeded them?\nA: The succeeding empire was the Persian Empire.\n\nQ: Not the Babylonians?\nA: The Babylonians did not succeed the Assyrian Empire, but were a predecessor of that empire.\n\nQ: Did Babylon have an empire?\nA: No, Babylon did not have an empire.\n\nQ: What about Egypt?\nA: Egypt was not an empire, but had a long history of being an influential culture and power in the region.\n\nQ: Why was Assyria an empire?\nA: The Assyrian Empire was an empire because it was a large and powerful kingdom that controlled a large area of the world\n\nQ:",
//   temperature: 0,
//   max_tokens: 100,
//   top_p: 1,
//   frequency_penalty: 0,
//   presence_penalty: 0,
//   stop: ["\n"],
// });
