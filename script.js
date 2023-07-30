function scrapeUrl() {
  var url = document.getElementById("urlInput").value;
  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  fetch("https://api.allorigins.win/get?url=" + encodeURIComponent(url))
    .then(response => response.json())
    .then(data => {
      var content = data.contents;
      document.getElementById("scrapedContent").innerHTML = content;
      alert("Scraping completed!");
    })
    .catch(error => {
      console.log("Error:", error);
      alert("Failed to scrape the URL. Please try again.");
    });
}
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Get form values
  var name = document.getElementById("nameInput").value;
  var number = document.getElementById("numberInput").value;
  var suggestion = document.getElementById("suggestionInput").value;

  // Display submitted data
  var contactResponse = document.getElementById("contactResponse");
  contactResponse.innerHTML = `
    <h4>Thank you for your submission!</h4>
    <p>Name: ${name}</p>
    <p>Number: ${number}</p>
    <p>Suggestion: ${suggestion}</p>
  `;

  // Clear form inputs
  document.getElementById("nameInput").value = "";
  document.getElementById("numberInput").value = "";
  document.getElementById("suggestionInput").value = "";
});
