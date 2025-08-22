// Helper functions for the KrishiMitra.AI app

/**
 * Format confidence percentage with proper decimal places
 * @param {number} confidence - Confidence percentage
 * @param {number} decimalPlaces - Number of decimal places
 * @returns {string} Formatted confidence string
 */
export const formatConfidence = (confidence, decimalPlaces = 1) => {
  return confidence.toFixed(decimalPlaces) + '%';
};

/**
 * Get color based on confidence level
 * @param {number} confidence - Confidence percentage
 * @returns {string} Color code
 */
export const getConfidenceColor = (confidence) => {
  if (confidence >= 80) {
    return '#2e7d32'; // Green
  } else if (confidence >= 60) {
    return '#ff9800'; // Orange
  } else {
    return '#d32f2f'; // Red
  }
};

/**
 * Format image for API upload
 * @param {string} uri - Image URI
 * @returns {object} Formatted image object
 */
export const formatImageForUpload = (uri) => {
  const filename = uri.split('/').pop();
  const match = /\.([\w\d_]+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : 'image';

  return {
    uri,
    name: filename,
    type,
  };
};

/**
 * Check if the string contains disease keywords
 * @param {string} text - Text to check
 * @returns {boolean} True if contains disease keywords
 */
export const containsDiseaseKeywords = (text) => {
  const diseaseKeywords = ['disease', 'blight', 'rot', 'spot', 'mildew', 'rust'];
  const lowerText = text.toLowerCase();
  return diseaseKeywords.some(keyword => lowerText.includes(keyword));
};