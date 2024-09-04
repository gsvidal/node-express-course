document.addEventListener("DOMContentLoaded", () => {
  const dataParagraph = document.getElementById("data-products");
  const dataParagraphProduct = document.getElementById("data-product");
  const button = document.querySelector(".button-products");
  const buttonProduct = document.querySelector(".button-product");
  const input = document.getElementById("input");
  let inputId;

  input.addEventListener("input", (event) => {
    inputId = event.target.value;
  });

  button.addEventListener("click", () => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/products");
        const result = await response.json();
        dataParagraph.textContent = JSON.stringify(result.products);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });
  buttonProduct.addEventListener("click", () => {
    fetch(`/api/v1/product/${inputId}`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((result) => {
            throw new Error(result.message);
          });
        }
        return response.json();
      })
      .then((result) => {
        dataParagraphProduct.innerHTML = `<span>${result.name}</span>`;
      })
      .catch((error) => {
        console.log(error);
        dataParagraphProduct.innerHTML = `<span>${error}</span>`;
      });
  });
});
