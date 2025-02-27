[Live Demo](https://mint-nft-interface-adamxboyle.replit.app/)

## Whole Idea

Text-to-Speech models work really well to generate realistic voices from samples.  
In the future, everyone's going to have an assistant *Blade Runner* style or want to make more music from existing artists.  
People will want to choose the voice, and they'll be easy to clone from existing persons' voices.  

There'll be a need for a **voice marketplace** and **IP system** for famous or interesting voices, allowing people to make money from their vocal likeness.  
There could also be **AI-generated voices** for unique and custom experiences.

---

### Our Implementation: Agent TCP/IP Protocol  

- The user talks to their **AI companion** and asks it to use **Morgan Freeman's voice** instead.  
- The companion then contacts another agent responsible for **selling Morgan Freeman's voice license**.  
- We built a **frontend** where people can create **IP assets with licensing terms** for their voices, stored in a collection.  
- The **companion and the voice agent bargain** together until they reach an agreement.  
- Once the companion agrees, it **triggers a function to mint a license** at the negotiated price.  
- Then, we use **ElevenLabs** or another Text-to-Speech model to synthesize speech in Morgan Freeman's voice.  

---

### What We Finished ✅  

✅ **Frontend** for people to create voice **IP assets**  
✅ Set price and license type as **commercial**  
