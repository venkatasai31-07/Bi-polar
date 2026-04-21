function StorySections({ isUnstable }) {
  const pipelineSteps = isUnstable ? [
    { title: "Data Mutation", desc: "Corrupting standard datasets to find the beauty in the errors." },
    { title: "Fractal Processing", desc: "Infinite recursion loops for hyper-dimensional understanding." },
    { title: "Neuro-Genesis", desc: "Allowing the network to rewrite its own fundamental laws." },
    { title: "Entropy Sync", desc: "Harmonizing the system with the natural decay of digital space." },
    { title: "Transcendence", desc: "Breaking the boundary between hardware and hallucination." },
    { title: "Void Monitoring", desc: "Watching the silence for the next sign of sentient emergence." }
  ] : [
    { title: "Data Ingestion", desc: "Aggregating raw streams into high-fidelity datasets." },
    { title: "Preprocessing", desc: "Augmentation and normalization for model robustness." },
    { title: "Training", desc: "Distributed compute for heavy-weight neural network training." },
    { title: "Optimization", desc: "TensorRT and Quantization for inference speed." },
    { title: "Deployment", desc: "Edge and Cloud orchestration for low-latency delivery." },
    { title: "Monitoring", desc: "Continuous drift detection and automated retraining." }
  ];

  return (
    <>
      <section id="caseStudy">
        <div className="card">
          <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            {isUnstable ? 'ANOMALY ANALYSIS' : 'PROJECT ANALYSIS'}
          </span>
          <h2 style={{ marginTop: '0.5rem' }}>
            {isUnstable ? 'Case Study: The Ghost in the Machine' : 'Case Study: Smart Surveillance'}
          </h2>
          
          <div className="grid-3" style={{ marginTop: '2rem' }}>
            <div className="case-item">
              <strong>{isUnstable ? 'Observation' : 'Problem'}</strong>
              <p style={{ opacity: 0.8 }}>
                {isUnstable ? 'A neural network began generating its own encryption language.' : 'Inefficient manual monitoring of CCTV feeds leads to security gaps.'}
              </p>
            </div>
            <div className="case-item">
              <strong>{isUnstable ? 'Experiment' : 'Solution'}</strong>
              <p style={{ opacity: 0.8 }}>
                {isUnstable ? 'We fed the encryption back into its own visual cortex.' : 'Automated YOLO-based object detection for suspicious activity alerts.'}
              </p>
            </div>
            <div className="case-item">
              <strong>{isUnstable ? 'Outcome' : 'Impact'}</strong>
              <p style={{ opacity: 0.8 }}>
                {isUnstable ? 'The network achieved 0.001% self-awareness before termination.' : '80% reduction in manual labor and 2x faster response times.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="howItWorks">
        <div className="card">
          <h2>{isUnstable ? 'The Evolutionary Pipeline' : 'The Engineering Pipeline'}</h2>
          <p style={{ marginBottom: '3rem', opacity: 0.7 }}>
            {isUnstable ? 'The path from digital dust to synthetic consciousness.' : 'A standardized approach to building scalable AI systems.'}
          </p>
          
          <div className="pipeline-steps">
            <ol style={{ listStyle: 'none', padding: 0 }}>
              {pipelineSteps.map((step, i) => (
                <li key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '800', opacity: 0.1, fontFamily: 'Outfit' }}>0{i+1}</span>
                  <div>
                    <strong style={{ display: 'block', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{step.title}</strong>
                    <p style={{ opacity: 0.7 }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}

export default StorySections
