// import Head from "next/head";
// import react, { useState } from "react";
// //modify or update
// import styles from "../styles/Home.module.css";
// // import  from "react";
// // import { useState, useEffect } from "react";

// export default function Home() {
//   const [userInput, setUserInput] = useState("");
//   const [result, setResult] = useState();

//   async function onSubmit(event) {
//     event.preventDefault();
//     const response = await fetch("/api/generate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ user: userInput }),
//     });
//     const data = await response.json();
//     setResult(data.result);
//     setUserInput("");
//   }

//   return (
//     <div>
//       <h1>History lessons</h1>
//       <form onSubmit={onSubmit}>
//         <input
//           type="text"
//           name="user"
//           placeholder="What would you like to know about history?"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//         />
//         <input type="submit" value="Learn!" />
//       </form>
//     </div>
//   );
//   console.log(userInput);
// }

// export default function Home() {
//   const [data, setData] = useState({ text: "" });
//   const [query, setQuery] = useState();
//   const [search, setSearch] = useState();
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       if (search) {
//         setIsLoading(true);
//         const res = await fetch(`/api/openai`, {
//           body: JSON.stringify({
//             name: search,
//           }),
//           headers: {
//             "Content-Type": "application/json",
//           },
//           method: "POST",
//         });
//         const data = await res.json();
//         setData(data);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [search]);
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>GPT-3 App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           <a>AI Lyrics Generator</a>
//         </h1>

//         <p className={styles.description}>Built with NextJS & GPT-3 API</p>

//         <div className={styles.grid}>
//           <div className={styles.card}>
//             <h3>Enter Artist:</h3>
//             <input
//               type="text"
//               value={query}
//               onChange={(event) => setQuery(event.target.value)}
//             />
//             <button type="button" onClick={() => setSearch(query)}>
//               Generate
//             </button>

//             <h4>Lyrics</h4>
//             {isLoading ? <div>Loading ...</div> : <span>{data.text}</span>}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

//just trying to get process going
import Head from "next/head";
import { useState } from "react";
// import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      {/* <main className={styles.main}> */}
      {/* <img src="/dog.png" className={styles.icon} /> */}
      <h3>Name my pet</h3>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="animal"
          placeholder="Enter an animal"
          value={animalInput}
          onChange={(e) => setAnimalInput(e.target.value)}
        />
        <input type="submit" value="Generate names" />
      </form>
      <div>{result}</div>
      {/* </main> */}
    </div>
  );
}
