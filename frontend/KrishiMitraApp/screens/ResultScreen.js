import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

const ResultScreen = ({ route, navigation }) => {
  const { imageUri } = route.params;
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    analyzeImage();
  }, []);

  const analyzeImage = async () => {
    setLoading(true);
    setError(null);

    try {
      // Create form data for API request
      const formData = new FormData();
      const filename = imageUri.split('/').pop();
      const match = /\.([\w\d_]+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image';

      formData.append('file', {
        uri: imageUri,
        name: filename,
        type,
      });

      // In a real app, you would use your actual backend API URL
      // For now, we'll use a dummy response to simulate the API call
      // const response = await axios.post('http://10.0.2.2:8000/predict/', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });

      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Dummy response
      const dummyResponse = {
        data: {
          filename: filename,
          crop_type: 'Tomato',
          disease_detected: 'Early Blight',
          confidence: 85.7,
          recommendations: [
            'Remove and destroy infected plant parts',
            'Apply copper-based fungicides',
            'Ensure proper spacing between plants for air circulation',
            'Water at the base of plants to avoid wetting leaves'
          ]
        }
      };

      setResult(dummyResponse.data);
    } catch (error) {
      console.error('Error analyzing image:', error);
      setError('Failed to analyze image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const retryAnalysis = () => {
    analyzeImage();
  };

  const goToHome = () => {
    navigation.navigate('Main', { screen: 'Home' });
  };

  const takePictureAgain = () => {
    navigation.navigate('Camera');
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2e7d32" />
        <Text style={styles.loadingText}>Analyzing image...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.button} onPress={retryAnalysis}>
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={takePictureAgain}>
          <Text style={styles.buttonText}>Take Another Picture</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.cropType}>{result.crop_type}</Text>
        <Text style={styles.diseaseText}>{result.disease_detected}</Text>
        <View style={styles.confidenceContainer}>
          <Text style={styles.confidenceText}>Confidence: {result.confidence.toFixed(1)}%</Text>
          <View style={styles.confidenceBar}>
            <View 
              style={[styles.confidenceFill, { width: `${result.confidence}%` }]} 
            />
          </View>
        </View>
      </View>

      <View style={styles.recommendationsContainer}>
        <Text style={styles.recommendationsTitle}>Recommendations:</Text>
        {result.recommendations.map((recommendation, index) => (
          <View key={index} style={styles.recommendationItem}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.recommendationText}>{recommendation}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={takePictureAgain}>
          <Text style={styles.buttonText}>Take Another Picture</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={goToHome}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 250,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  resultContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cropType: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  diseaseText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
  },
  confidenceContainer: {
    marginTop: 10,
  },
  confidenceText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  confidenceBar: {
    height: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  confidenceFill: {
    height: '100%',
    backgroundColor: '#2e7d32',
    borderRadius: 5,
  },
  recommendationsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 15,
    marginTop: 0,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  recommendationItem: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#2e7d32',
    marginRight: 10,
  },
  recommendationText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  buttonContainer: {
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  secondaryButton: {
    backgroundColor: '#546e7a',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ResultScreen;