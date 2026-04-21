// MOCK AI DATA
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

// UI ELEMENTS
const toggleBtn = document.getElementById("modeToggle");
const runBtn = document.getElementById("runAI");
const inputField = document.getElementById("userInput");
const outputDiv = document.getElementById("aiOutput");

const trainBtn = document.getElementById("trainBtn");
const optimizeBtn = document.getElementById("optimizeBtn");
const deployBtn = document.getElementById("deployBtn");
const logsDiv = document.getElementById("logs");

const runModelBtn = document.getElementById("runModel");
const stressTestBtn = document.getElementById("stressTest");
const optimizeSystemBtn = document.getElementById("optimizeSystem");
const labOutput = document.getElementById("labOutput");

// MODE TOGGLE LOGIC
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("unstable");
});

// AI LOGIC FUNCTION
function getAIResponse(userInput) {
  userInput = userInput.toLowerCase();

  for (let item of aiResponses) {
    for (let keyword of item.keywords) {
      if (userInput.includes(keyword)) {
        return item;
      }
    }
  }

  return null;
}

// HANDLE RUN AI CLICK
runBtn.addEventListener("click", () => {
  const userText = inputField.value;

  if (userText.trim() === "") {
    outputDiv.innerHTML = "Please enter a problem.";
    return;
  }

  outputDiv.innerHTML = "AI is thinking...";

  setTimeout(() => {
    const result = getAIResponse(userText);

    if (result) {
      outputDiv.innerHTML = `
        <p><strong>Model:</strong> ${result.model}</p>
        <p><strong>Deployment:</strong> ${result.deployment}</p>
        <p><strong>Expected Accuracy:</strong> ${result.accuracy}</p>
      `;
    } else {
      outputDiv.innerHTML = `
        <p>No exact match found.</p>
        <p><strong>Suggested Approach:</strong> Custom AI Model</p>
        <p><strong>Deployment:</strong> Hybrid (Edge + Cloud)</p>
        <p><strong>Accuracy:</strong> Depends on dataset</p>
      `;
    }
  }, 1000);
});

// LOG SIMULATION FUNCTION
function runLogs(logsArray, delay = 800) {
  logsDiv.innerHTML = ""; // clear previous logs

  logsArray.forEach((log, index) => {
    setTimeout(() => {
      logsDiv.innerHTML += `<p>> ${log}</p>`;
      logsDiv.scrollTop = logsDiv.scrollHeight;
    }, index * delay);
  });
}

// TRAIN MODEL BUTTON
trainBtn.addEventListener("click", () => {
  const logs = [
    "Initializing training pipeline...",
    "Loading dataset...",
    "Splitting data (80/20)...",
    "Training model...",
    "Epoch 1/10...",
    "Epoch 5/10...",
    "Epoch 10/10...",
    "Training complete.",
    "Final Accuracy: 94%"
  ];

  runLogs(logs);
});

// OPTIMIZE MODEL BUTTON
optimizeBtn.addEventListener("click", () => {
  const logs = [
    "Loading trained model...",
    "Applying quantization...",
    "Reducing model size...",
    "Optimizing inference speed...",
    "Latency reduced to 32ms",
    "Model size reduced by 60%",
    "Optimization complete."
  ];

  runLogs(logs);
});

// DEPLOY MODEL BUTTON
deployBtn.addEventListener("click", () => {
  const logs = [
    "Preparing deployment...",
    "Selecting edge device...",
    "Deploying to Jetson Nano...",
    "Setting up inference pipeline...",
    "Running health checks...",
    "Deployment successful!",
    "System live 🚀"
  ];

  runLogs(logs);
});

// METRICS GENERATOR
function generateMetrics() {
  return {
    accuracy: (90 + Math.random() * 10).toFixed(2) + "%",
    latency: (20 + Math.random() * 20).toFixed(0) + "ms",
    modelSize: (10 + Math.random() * 20).toFixed(1) + "MB"
  };
}

// RUN MODEL BUTTON
runModelBtn.addEventListener("click", () => {
  labOutput.innerHTML = "Running model...";

  setTimeout(() => {
    const metrics = generateMetrics();

    labOutput.innerHTML = `
      <p><strong>Status:</strong> Model executed successfully</p>
      <p><strong>Accuracy:</strong> ${metrics.accuracy}</p>
      <p><strong>Latency:</strong> ${metrics.latency}</p>
      <p><strong>Model Size:</strong> ${metrics.modelSize}</p>
    `;
  }, 1000);
});

// STRESS TEST BUTTON
stressTestBtn.addEventListener("click", () => {
  labOutput.innerHTML = "Running stress test...";

  setTimeout(() => {
    labOutput.innerHTML = `
      <p><strong>Status:</strong> Stress test completed</p>
      <p><strong>Max Load:</strong> 500 requests/sec</p>
      <p><strong>Failure Rate:</strong> 1.2%</p>
      <p><strong>System Stability:</strong> High</p>
    `;
  }, 1200);
});

// OPTIMIZE SYSTEM BUTTON
optimizeSystemBtn.addEventListener("click", () => {
  labOutput.innerHTML = "Optimizing system...";

  setTimeout(() => {
    const metrics = generateMetrics();

    labOutput.innerHTML = `
      <p><strong>Status:</strong> Optimization complete</p>
      <p><strong>New Latency:</strong> ${metrics.latency}</p>
      <p><strong>Reduced Model Size:</strong> ${metrics.modelSize}</p>
      <p><strong>Performance Boost:</strong> +25%</p>
    `;
  }, 1200);
});
