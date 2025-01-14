exports.submitForm = (req, res) => {
  const { name, humor, kindness, intelligence, creativity, style, message } = req.body;

  console.log("Form Data Received:");
  console.log(`Name: ${name}`);
  console.log(`Humor: ${humor}`);
  console.log(`Kindness: ${kindness}`);
  console.log(`Intelligence: ${intelligence}`);
  console.log(`Creativity: ${creativity}`);
  console.log(`Style: ${style}`);
  console.log(`Message: ${message}`);

  res.json({ message: "Your love has been sent successfully! 💖" });
};
