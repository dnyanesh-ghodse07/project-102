const joke = document.getElementById("joke");
const btn = document.getElementById("joke-btn");

// btn.addEventListener("click", () => {
//   const fetchJoke = fetch("https://icanhazdadjoke.com", {
//     headers: {
//       Accept: "application/json",
//     },
//   });

// fetchJoke
//   .then((res) => res.json())
//   .then((data) => {
//     joke.innerText = data.joke;
//   })
//   .catch((err) => console.log(err));
// });

btn.addEventListener("click", generateJoke);

async function generateJoke() {
  try {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await res.json();

    joke.innerText = data.joke;
  } catch (error) {
    console.log(error);
  }
}

