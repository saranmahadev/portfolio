import styles from "./TechnicalArsenal.module.css";

type Technology = {
    name: string;
    emphasis?: "large" | "medium" | "small";
};

type ArsenalSectionData = {
    id: string;
    eyebrow: string;
    title: string;
    technologies: Technology[];
    layout: string;
};

const ARSENAL: ArsenalSectionData[] = [
    {
        id: "01",
        eyebrow: "FOUNDATIONS",
        title: "Programming Languages",
        layout: "languages",
        technologies: [
            { name: "Python", emphasis: "large" },
            { name: "Golang", emphasis: "medium" },
            { name: "JavaScript", emphasis: "small" },
            { name: "SQL" },
            { name: "C++" },
        ],
    },
    {
        id: "02",
        eyebrow: "GENERATIVE AI",
        title: "Foundation Models & Generative AI",
        layout: "foundationModels",
        technologies: [
            { name: "Claude", emphasis: "large" },
            { name: "OpenAI", emphasis: "medium" },
            { name: "Qwen", emphasis: "small" },
            { name: "Gemini" },
            { name: "GLM" },
            { name: "Kimi" },
        ],
    },
    {
        id: "03",
        eyebrow: "LLM ENGINEERING",
        title: "LLM Frameworks & SDKs",
        layout: "frameworks",
        technologies: [
            { name: "LangChain", emphasis: "large" },
            { name: "LangGraph", emphasis: "large" },
            { name: "LlamaIndex", emphasis: "medium" },
            { name: "CrewAI" },
            { name: "AutoGen" },
            { name: "Semantic Kernel" },
            { name: "Hugging Face Transformers" },
            { name: "OpenAI SDK" },
            { name: "Google ADK" },
            { name: "Claude Code SDK" },
        ],
    },
    {
        id: "04",
        eyebrow: "AGENTS",
        title: "Agentic AI & Orchestration",
        layout: "agents",
        technologies: [
            { name: "MCP", emphasis: "large" },
            { name: "Multi-Agent Systems", emphasis: "medium" },
            { name: "Tool Calling" },
            { name: "Function Calling" },
            { name: "A2A Protocol" },
            { name: "Agent Evaluation" },
            { name: "Human-in-the-Loop" },
        ],
    },
    {
        id: "05",
        eyebrow: "VECTOR LAYER",
        title: "Vector Databases",
        layout: "vectors",
        technologies: [
            { name: "ChromaDB", emphasis: "large" },
            { name: "Pinecone", emphasis: "medium" },
            { name: "Qdrant", emphasis: "small" },
            { name: "FAISS" },
            { name: "Weaviate" },
        ],
    },
    {
        id: "06",
        eyebrow: "LEARNING SYSTEMS",
        title: "Machine Learning & Deep Learning",
        layout: "machineLearning",
        technologies: [
            { name: "PyTorch", emphasis: "large" },
            { name: "TensorFlow", emphasis: "large" },
        ],
    },
    {
        id: "07",
        eyebrow: "VISION",
        title: "Computer Vision",
        layout: "vision",
        technologies: [
            { name: "OpenCV", emphasis: "large" },
        ],
    },
    {
        id: "08",
        eyebrow: "APPLICATION LAYER",
        title: "Backend Development",
        layout: "backend",
        technologies: [
            { name: "FastAPI", emphasis: "large" },
            { name: "Flask" },
            { name: "Streamlit" },
        ],
    },
    {
        id: "09",
        eyebrow: "DEPLOYMENT",
        title: "Cloud Platforms & DevOps",
        layout: "cloud",
        technologies: [
            { name: "AWS", emphasis: "large" },
            { name: "Google Cloud Platform", emphasis: "large" },
            { name: "Docker", emphasis: "medium" },
            { name: "Kubernetes" },
            { name: "Git" },
            { name: "GitHub Actions" },
        ],
    },
    {
        id: "10",
        eyebrow: "PERSISTENCE",
        title: "Databases & Storage",
        layout: "databases",
        technologies: [
            { name: "PostgreSQL", emphasis: "medium" },
            { name: "MySQL" },
            { name: "SQLite" },
            { name: "MongoDB" },
            { name: "Redis" },
        ],
    },
    {
        id: "11",
        eyebrow: "OPERATIONS",
        title: "LLMOps & Observability",
        layout: "llmops",
        technologies: [
            { name: "LangSmith", emphasis: "large" },
            { name: "Langfuse", emphasis: "medium" },
            { name: "MLflow", emphasis: "medium" },
        ],
    },
    {
        id: "12",
        eyebrow: "WORKBENCH",
        title: "Developer Ecosystem",
        layout: "ecosystem",
        technologies: [
            { name: "Git", emphasis: "large" },
            { name: "GitHub", emphasis: "medium" },
            { name: "OpenSpec" },
            { name: "LLM Wiki" },
            { name: "Graphify" },
            { name: "Wiki.js API" },
        ],
    },
];

function TechnologyTag({ technology }: { technology: Technology }) {
    const emphasis = technology.emphasis ? styles[`tag${technology.emphasis[0].toUpperCase()}${technology.emphasis.slice(1)}`] : "";

    return <span className={`${styles.technologyTag} ${emphasis}`}>{technology.name}</span>;
}

function ArsenalHero() {
    return (
        <header className={styles.hero}>
            <p className={styles.sectionKicker}>{"//"} SKILLS</p>
            <h2 id="engineering-landscape-title" className={styles.heroTitle}>
                TECHNICAL <span>ARSENAL</span>
            </h2>
            <p className={styles.heroReadout}>AI ENGINEERING · SOFTWARE SYSTEMS · 01—12</p>
            <div className={styles.heroFooter}>
                <p>
                    My working inventory of languages, models, frameworks and systems used across AI engineering and software development.
                </p>
                <dl className={styles.statistics}>
                    <div><dt>12</dt><dd>DOMAINS</dd></div>
                    <div><dt>50+</dt><dd>TECHNOLOGIES</dd></div>
                </dl>
            </div>
        </header>
    );
}

function ArsenalSection({ section }: { section: ArsenalSectionData }) {
    const density = section.technologies.length >= 7 ? "dense" : section.technologies.length <= 3 ? "sparse" : "balanced";

    return (
        <article className={`${styles.arsenalSection} ${styles[section.layout]}`} data-density={density}>
            <p className={styles.sectionMeta}><span>{section.id}</span> / {section.eyebrow}</p>
            <h3>{section.title}</h3>
            <div className={styles.technologyField}>
                {section.technologies.map((technology) => <TechnologyTag key={technology.name} technology={technology} />)}
            </div>
        </article>
    );
}

export function TechnicalArsenal() {
    return (
        <section id="skills" className={styles.technicalArsenal} aria-labelledby="engineering-landscape-title">
            <div className={styles.inner}>
                <ArsenalHero />
                <div className={styles.arsenalGrid}>
                    {ARSENAL.map((section) => <ArsenalSection key={section.id} section={section} />)}
                </div>
            </div>
        </section>
    );
}

export default TechnicalArsenal;
