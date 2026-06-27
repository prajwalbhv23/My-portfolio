
-- ========================================
-- SEED DATA: Prajwal Bhovi Portfolio
-- Run after schema setup. Clear existing owner data first if migrating.
-- ========================================

DELETE FROM public.projects;
DELETE FROM public.certificates;
DELETE FROM public.tech_stack;

INSERT INTO public.projects (
  id, title, description, technologies, key_features, image_url, created_at
) VALUES
(
  'a1000001-0001-4000-8000-000000000001',
  'AI Powered Urban Heat Island Mitigation',
  'Geospatial machine learning platform that analyzes satellite imagery to identify urban heat island hotspots and recommend mitigation strategies for sustainable city planning.',
  ARRAY['Python', 'Google Earth Engine', 'QGIS', 'Machine Learning'],
  ARRAY['Urban heat island hotspot detection from satellite data', 'Land surface temperature and vegetation index analysis', 'Machine learning models for heat-prone region identification', 'Interactive geospatial visualization and mitigation insights'],
  '/assets/project-uhi.png',
  '2025-06-01T00:00:00Z'
),
(
  'a1000001-0001-4000-8000-000000000002',
  'AI Resume Screening Automation System',
  'Automated resume screening pipeline that uses LLM APIs and workflow automation to evaluate candidate profiles against job requirements at scale.',
  ARRAY['Python', 'LLM APIs', 'REST APIs', 'n8n'],
  ARRAY['LLM-powered resume parsing and candidate scoring', 'Automated screening workflows with n8n', 'REST API integration for end-to-end processing', 'Structured evaluation against role requirements'],
  '/assets/project-resume.png',
  '2025-04-15T00:00:00Z'
),
(
  'a1000001-0001-4000-8000-000000000003',
  'Real Estate Price Prediction',
  'Machine learning web application that predicts residential property prices using location, area, and property features to support data-driven real estate decisions.',
  ARRAY['Python', 'Flask', 'scikit-learn', 'MySQL'],
  ARRAY['Accurate price prediction with supervised learning', 'Feature engineering for location and property attributes', 'Flask API and interactive prediction interface', 'MySQL-backed data storage and model serving'],
  '/assets/project-realestate.png',
  '2025-02-20T00:00:00Z'
),
(
  'a1000001-0001-4000-8000-000000000004',
  'RAG LMS Chatbot',
  'Retrieval-augmented generation chatbot for an LMS platform with document ingestion, semantic search, vector storage, and LLM-powered bilingual responses.',
  ARRAY['Python', 'FastAPI', 'LLMs', 'Embeddings', 'Semantic Search', 'Vector Database'],
  ARRAY['Document ingestion and chunking pipeline', 'Embedding generation and vector database retrieval', 'Context-aware answers grounded in course materials', 'FastAPI backend with bilingual LMS integration'],
  '/assets/project-rag.png',
  '2024-11-10T00:00:00Z'
),
(
  'a1000001-0001-4000-8000-000000000005',
  'AI Powered Process Optimization',
  'Analytics and machine learning solution that identifies process bottlenecks and recommends data-driven optimizations for improved operational efficiency.',
  ARRAY['Python', 'Machine Learning', 'Analytics'],
  ARRAY['Process data analysis and feature engineering', 'Predictive modeling for performance optimization', 'Actionable insights from operational datasets', 'Scalable analytics workflow for continuous improvement'],
  '/assets/project-optimization.png',
  '2024-09-01T00:00:00Z'
);

INSERT INTO public.certificates (title, image_url) VALUES
('IBM Machine Learning', '/assets/cert-ibm-ml.png'),
('IBM Data Analysis', '/assets/cert-ibm-analysis.png'),
('IBM Data Visualization', '/assets/cert-ibm-viz.png'),
('Coursera Neural Networks & Deep Learning', '/assets/cert-coursera-dl.png');

INSERT INTO public.tech_stack (name, logo_url) VALUES
('Python', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
('SQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'),
('JavaScript', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'),
('Machine Learning', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'),
('Deep Learning', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'),
('Natural Language Processing', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
('Large Language Models', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg'),
('Retrieval-Augmented Generation', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
('Computer Vision', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg'),
('Data Analytics', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'),
('Feature Engineering', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'),
('Model Evaluation', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg'),
('Geospatial Analytics', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
('FastAPI', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'),
('Flask', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'),
('React', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'),
('NumPy', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'),
('Pandas', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'),
('scikit-learn', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg'),
('TensorFlow', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'),
('MySQL', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'),
('MongoDB', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'),
('Git', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'),
('GitHub', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'),
('VS Code', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'),
('Google Earth Engine', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'),
('QGIS', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'),
('Google Colab', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg'),
('Google Search Console', 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg');
