const dataParagraph = document.getElementById("data-p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/products");
      const result = await response.json();
      dataParagraph.textContent = JSON.stringify(result);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
});
