const secretKey = "your_secret_key_here";
const apiKey = "your_api_key_here";

async function getRandomCode() {
  try {
    const response = await fetch("https://api.example.com/getRandomCode", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      cache: "no-cache"
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred while fetching the code:", error);
    process.exit(1);
  }
}

getRandomCode().then(() => console.log("Code generated successfully."));
