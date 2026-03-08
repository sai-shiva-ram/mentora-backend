const axios = require("axios")

exports.summarize = async (req, res) => {

 try {

  const { text } = req.body

  if (!text)
   return res.status(400).json({ message: "Text is required" })

  if (text.length < 50)
   return res.status(400).json({ message: "Text too short" })

  if (text.length > 8000)
   return res.status(413).json({ message: "Text too long" })

  const response = await axios.post(
   `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.OPENAI_API_KEY}`,
   {
    contents: [
     {
      parts: [
       {
        text: `Summarize the following text into 3–6 bullet points:\n\n${text}`
       }
      ]
     }
    ]
   }
  )

  const summary =
   response.data.candidates[0].content.parts[0].text

  res.json({
   summary,
   model: "gemini-2.0-flash"
  })

 } catch (error) {

  console.log(error.response?.data || error)

  res.status(502).json({
   message: "LLM service failed"
  })

 }

}