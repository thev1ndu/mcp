import dotenv from 'dotenv';

dotenv.config();

const neonServerUrl = `https://server.smithery.ai/neon/mcp?api_key=${process.env.SMITHERY_API_KEY}&profile=${process.env.PROFILE_VAR}`;
