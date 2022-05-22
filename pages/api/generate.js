import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion("text-curie-001", {
    prompt: generatePrompt(req.body.command),
    temperature: 0.6,
    max_tokens: 200,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

// function generatePrompt(command) {
//   const capitalizedAnimal =
//     command[0].toUpperCase() + command.slice(1).toLowerCase();
//   return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;
// }

function generatePrompt(command) {
  return `I am a smart AI bot that can tell you about places around the world. As well as other geographical information.

  Example: What is the capital of Australia?
  Answer: The capital of Australia is Canberra.
  Example: Tell me about the Pacific Ocean
  Answer: The Pacific Ocean is the largest and deepest of the world's ocean basins. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by Asia and Australia in the west and the Americas in the east.
  
  Prompt:`;
}
