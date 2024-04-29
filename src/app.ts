const express = require('express');

const app = express()
app.use(express.json())
const PORT = 8000

app.get('/', (req: any, res: any) => {
  res.send('Hello World from Akerke')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})