
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post("/generate", async (req,res)=>{
 try{
   const {task,input} = req.body;
   const prompt = `Task: ${task}\n\n${input}`;
   const response = await ai.models.generateContent({
      model:"gemini-2.5-flash",
      contents: prompt
   });
   res.json({result: response.text});
 } catch(e){
   res.status(500).json({error:e.message});
 }
});

app.listen(3000,()=>console.log("Running on 3000"));
