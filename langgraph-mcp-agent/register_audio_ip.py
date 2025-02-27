from story_sdk_mcp.src.services.story_service import StoryService
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

async def register_audio_ip():
    # Initialize Story service
    story_service = StoryService(
        rpc_url=os.getenv('RPC_PROVIDER_URL'),
        private_key=os.getenv('WALLET_PRIVATE_KEY')
    )
    
    # Use hardcoded IPFS URL instead of uploading
    audio_uri = "ipfs://Qmcuzm3oknzQ8eRSekyjAYw37GPvG4eTn2EcEsNscyZFoY"
    print(f"Using audio from IPFS: {audio_uri}")
    
    # # Read the audio file
    # with open('freeman.mp3', 'rb') as audio_file:
    #     audio_data = audio_file.read()
    
    try:
        # # Upload audio to IPFS
        # print("Uploading audio to IPFS...")
        # audio_uri = story_service.upload_image_to_ipfs(audio_data)  # We can use the same function for any file
        # print(f"Audio uploaded to IPFS: {audio_uri}")
        
        # Create metadata
        print("Creating metadata...")
        metadata = story_service.create_ip_metadata(
            image_uri=audio_uri,  # This will be our audio URI
            name="Morgan Freeman AI Voice",
            description="AI-generated voice model of Morgan Freeman, suitable for narration and voice-over projects.",
            attributes=[
                {"trait_type": "media_type", "value": "audio"},
                {"trait_type": "duration", "value": "variable"},
                {"trait_type": "voice_type", "value": "narration"},
                {"trait_type": "quality", "value": "high"}
            ]
        )
        
        # Register IP with terms
        print("Registering IP...")
        spg_nft_contract = os.getenv('SPG_NFT_CONTRACT')
        result = story_service.mint_and_register_ip_with_terms(
            spg_nft_contract=spg_nft_contract,
            commercial_rev_share=20,  # 20% revenue share for commercial use
            derivatives_allowed=True,  # Allow derivatives
            registration_metadata=metadata['registration_metadata']
        )
        
        # Print results
        print("\nIP Registration Complete!")
        print(f"IP ID: {result['ipId']}")
        print(f"Transaction Hash: {result['txHash']}")
        print(f"License Terms IDs: {result['licenseTermsIds']}")
        
        # Save the IP ID for later use
        with open('audio_ip.json', 'w') as f:
            import json
            json.dump({
                'ip_id': result['ipId'],
                'license_terms_ids': result['licenseTermsIds']
            }, f)
        
        return result
        
    except Exception as e:
        print(f"Error: {str(e)}")
        raise

if __name__ == "__main__":
    import asyncio
    asyncio.run(register_audio_ip())