import { ResearchPaper } from '../types/portfolio';

export const researchPaper: ResearchPaper = {
  title: 'Computationally Efficient AI Framework for Early-Stage Lung Cancer Classification Using Stain-Invariant Histopathological Features',
  conference: 'International Conference on Computing and Emerging Technologies (ICCET 2026)',
  date: 'March 2026',
  scope: 'Machine Learning, Histopathology Image Analysis, Computer Vision',
  overview: 'A research exploration focused on addressing color variance and stain inconsistencies in digital histopathology images to achieve reliable, computationally lightweight lung cancer tissue classification.',
  motivation: 'Variations in chemical staining protocols across disparate pathology laboratories frequently introduce severe color distribution shifts. Standard deep neural networks can inadvertently latch onto these dye discrepancies rather than true cellular architectural hallmarks. This study investigates stain-invariant normalization methods coupled with a parameter-efficient CNN topology suitable for lower-compute environments.',
  methodology: [
    'Stain Invariance Normalization: Evaluated color-deconvolution and optical density matrix estimation to standardize Hematoxylin and Eosin (H&E) staining artifacts.',
    'Feature Extraction: Designed a streamlined convolutional neural network prioritizing morphological nuclear atypia over color bias.',
    'Efficiency Benchmark: Targeted reduced inference parameters to enable exploratory deployment without requiring multi-GPU enterprise infrastructure.',
    'Evaluation Protocol: Assessed model performance on partitioned histological datasets with balanced benign and malignant tissue patches.'
  ],
  disclaimer: 'Academic & Educational Disclaimer: This research project was conducted solely for exploratory academic and educational purposes. It is not approved, certified, or intended for clinical diagnosis, patient management, or hospital adoption. It must never substitute for examination by certified medical professionals and licensed pathologists.'
};
