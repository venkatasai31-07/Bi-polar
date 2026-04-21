const aiResponses = [
  {
    keywords: ["traffic", "vehicle", "road"],
    model: "YOLOv8",
    deployment: "Edge (Jetson)",
    accuracy: "94%"
  },
  {
    keywords: ["face", "recognition", "biometric"],
    model: "FaceNet",
    deployment: "Cloud API",
    accuracy: "97%"
  },
  {
    keywords: ["fraud", "anomaly", "transaction"],
    model: "Anomaly Detection Model",
    deployment: "Cloud",
    accuracy: "92%"
  },
  {
    keywords: ["chat", "text", "language"],
    model: "LLM (GPT-based)",
    deployment: "API",
    accuracy: "95%"
  }
];

export default aiResponses;
