export default function App() {
  const services = [
    {
      title: "Data Engineering & Modern Data Platforms",
      desc: "Design and build scalable data architectures including ETL/ELT pipelines, batch and streaming ingestion, lakehouse platforms, orchestration, data modeling, quality monitoring, and automation."
    },
    {
      title: "Machine Learning & AI Engineering",
      desc: "Develop and deploy production-grade machine learning solutions including predictive modeling, feature engineering, training pipelines, evaluation frameworks, and scalable deployment patterns."
    },
    {
      title: "MLOps & Model Monitoring",
      desc: "Operationalize machine learning with lifecycle management, model governance, drift detection, monitoring, retraining strategies, and reliable production workflows."
    },
    {
      title: "LLM & Agentic AI Solutions",
      desc: "Build intelligent applications using retrieval-augmented generation, tool-using agents, enterprise chat assistants, prompt and evaluation frameworks, and scalable APIs."
    },
    {
      title: "Cloud & DevOps Enablement",
      desc: "Architect secure and scalable infrastructure across Azure, AWS, and GCP with modern CI/CD pipelines, containerization, IAM best practices, and production deployment patterns."
    },
    {
      title: "Analytics & Decision Support",
      desc: "Deliver executive-ready insights through KPI frameworks, forecasting, segmentation, experimentation support, and advanced dashboards."
    }
  ];

  const highlights = [
    "Production-ready AI/ML systems",
    "Data engineering pipelines and lakehouse architectures",
    "Cloud-native analytics and deployment",
    "LLM, RAG, and agentic AI solutions",
    "UX, product, and growth-minded execution"
  ];

  return (
    <div className="site-shell">
      <header className="hero">
        <div className="container hero-grid">
          <div>
            <div className="badge">Goyal Analytics Group</div>
            <h1>AI &amp; Data Solutions for Business Impact</h1>
            <p className="hero-copy">
              We help organizations move from raw data to production-grade intelligence
              rapidly and reliably through AI/ML engineering, data platforms, cloud
              enablement, and end-to-end applications.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Book a Consultation</a>
              <a href="#services" className="btn btn-secondary">Explore Services</a>
            </div>
          </div>

          <div className="panel">
            <div className="panel-label">Core Focus</div>
            <div className="focus-list">
              {highlights.map((item) => (
                <div key={item} className="focus-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <div className="container">
            <p className="eyebrow">Services</p>
            <h2>End-to-end consulting across AI, data, cloud, and applications</h2>
            <p className="section-copy">
              We partner with organizations to build, deploy, and operationalize modern
              data and AI systems with measurable business outcomes.
            </p>

            <div className="card-grid">
              {services.map((service) => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-alt">
          <div className="container two-col">
            <div>
              <p className="eyebrow eyebrow-orange">How We Work</p>
              <h2>Rapid discovery, clear scope, measurable outcomes</h2>
              <p className="section-copy">
                We use an MVP-first approach with short cycles, visible demos, strong
                documentation, code quality, and reliable handoff support.
              </p>
            </div>
            <div className="mini-grid">
              <div className="mini-card">Rapid discovery and clear scoping</div>
              <div className="mini-card">MVP-first delivery</div>
              <div className="mini-card">Strong documentation and code quality</div>
              <div className="mini-card">Business-aligned, real-world execution</div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <p className="eyebrow">About</p>
              <h2>A consulting partner for AI, data, and digital transformation</h2>
              <p className="section-copy">
                Goyal Analytics Group provides end-to-end consulting across AI/ML engineering,
                data engineering, cloud computing, data science, and analytics. We help
                organizations move from raw data to production-grade intelligence rapidly
                and reliably.
              </p>
            </div>

            <div className="callout">
              <h3>Ideal engagements</h3>
              <ul>
                <li>AI/ML roadmap and solution design</li>
                <li>Predictive analytics and model deployment</li>
                <li>Databricks, Spark, and cloud data pipelines</li>
                <li>Data platform modernization</li>
                <li>Dashboards, applications, and analytics tools</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="team" className="section">
          <div className="container">
            <p className="eyebrow">Leadership</p>
            <h2>Meet the team behind Goyal Analytics Group</h2>
            <p className="section-copy">
              Our leadership combines deep technical expertise with product, design, and
              business strategy to deliver practical AI and data solutions.
            </p>

            <div className="team-grid">
              <article className="card">
                <h3>Gaurav Goyal</h3>
                <p className="role role-green">Co-Founder &amp; Principal Consultant</p>
                <p>
                  AI/ML engineer and data platform specialist with experience designing and
                  deploying production machine learning systems, large-scale data pipelines,
                  and cloud analytics platforms across healthcare, biotech, and enterprise
                  analytics environments.
                </p>
              </article>

              <article className="card">
                <h3>Katie Jo Goyal</h3>
                <p className="role role-orange">Co-Founder &amp; Director of Product, UX &amp; Marketing</p>
                <p>
                  Product and design leader responsible for user experience, brand strategy,
                  and growth initiatives. Katie focuses on translating complex AI and data
                  technologies into intuitive products, clear messaging, and engaging digital
                  experiences.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="contact-box">
              <div>
                <p className="eyebrow eyebrow-orange">Contact</p>
                <h2>Let’s build something that delivers real business value</h2>
                <p className="section-copy">
                  Ready to discuss an AI, cloud, data engineering, or application development
                  initiative? Reach out to start the conversation.
                </p>
              </div>

              <div className="contact-card">
                <p><strong>Company:</strong> Goyal Analytics Group</p>
                <p><strong>Services:</strong> AI/ML, Cloud, Data Engineering, End-to-End Applications</p>
                <p><strong>Email:</strong> <a href="mailto:info@goyalanalyticsgroup.com">info@goyalanalyticsgroup.com</a></p>
                <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/company/goyal-analytics-group" target="_blank" rel="noreferrer">goyal-analytics-group</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
