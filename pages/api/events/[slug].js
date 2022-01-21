// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { events } = require("./data.json");

export default function handler(req, res) {
    const eventData = events.filter((evt) => evt.slug === req.query.slug);
    
  if(req.method === "GET"){
    res.status(200).json({ eventData})
  }
  else{
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({message: 'method ${req.method} is not allowed'})
  }
  
}
