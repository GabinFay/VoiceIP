import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.CROSSMINT_API_KEY;

async function createCollection() {
    const response = await fetch("https://staging.crossmint.com/api/v1/ip/collections", {
        method: "POST",
        headers: {
            "X-API-KEY": API_KEY || '',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            metadata: {
                description: "A collection of premium AI voice licenses available for commercial use",
                name: "Celebrity Voice Licenses",
                symbol: "CVL"
            },
            chain: "story-testnet"
        })
    });

    const collection = await response.json();
    console.log("Collection created:", collection);
}

// Call the function
createCollection().catch(console.error);