// App.js
const phrases = [
  "No",
  "Sure?",
  "Think again!🥺",
  "Don't u want to give me a chance🥺",
  "Pleaseeeee😭",
];

function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", onClick);
  return button;
}

function createImage(alt, src) {
  const img = document.createElement("img");
  img.alt = alt;
  img.src = src;
  return img;
}

function createDiv(className, content) {
  const div = document.createElement("div");
  div.className = className;

  if (Array.isArray(content)) {
    content.forEach((item) => {
      if (item instanceof Node) {
        div.appendChild(item);
      } else if (typeof item === "string") {
        div.appendChild(document.createTextNode(item));
      }
    });
  } else if (content instanceof Node) {
    div.appendChild(content);
  } else if (typeof content === "string") {
    div.appendChild(document.createTextNode(content));
  }

  return div;
}

function App() {
  let noCount = 0;
  let yesPressed = false;

  function handleNoclick() {
    noCount += 1;
    render();
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function render() {
    const root = document.getElementById("root");

    if (yesPressed) {
      root.innerHTML = ""; // Clear previous content
      root.appendChild(
        createImage(
          "bear kissing",
          "https://media.giphy.com/media/1gXgsXvvZlHo5oAcGm/giphy.gif?cid=790b76113s2gd0b9n4dxqbaxyglkkvsu5zvfl2i0nb7uvywp&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        )
      );

      const textDiv = createDiv("text", "Yay!!!!");
      root.appendChild(textDiv);
    } else {
      root.innerHTML = ""; // Clear previous content
      root.appendChild(
        createImage(
          "bear with hearts",
          "https://media.giphy.com/media/dNHf331OA0FQYL9Jkf/giphy.gif?cid=790b7611kv3sriavi0c5b04ddr3qm5sipuz22kqkcv3vp13d&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        )
      );

      const willYouBeMyValentineDiv = createDiv(
        "text",
        "Will you be my Valentine?"
      );
      root.appendChild(willYouBeMyValentineDiv);

      const yesButton = createButton("Yes", () => {
        yesPressed = true;
        render();
      });

      yesButton.id = "yesButton"; // Set the ID for yesButton
      yesButton.className = "Button";
      yesButton.style.fontSize = noCount * 20 + 40 + "px";

      const noButton = createButton(getNoButtonText(), handleNoclick);
      noButton.id = "noButton";
      noButton.className = "Button";

      const buttonContainer = createDiv("button-container", [
        yesButton,
        noButton,
      ]);
      root.appendChild(buttonContainer);
    }
  }

  return { render }; // Return a render function to trigger updates
}

const app = App();
app.render(); // Initial rendering
