import numpy as np
from sklearn.model_selection import train_test_split

def preprocess_data(data):
    """
    This function preprocesses the data.
    
    Parameters:
    - data: A 2D numpy array representing the dataset.
    
    Returns:
    - X: The input features.
    - y: The target variable.
    """
    # Preprocessing
    X = np.delete(data, 0, axis=1)
    y = data[0]
    
    return X, y

def train_test_split(X, y):
    """
    This function splits the dataset into training and testing sets.
    
    Parameters:
    - X: A 2D numpy array representing the features.
    - y: A 1D numpy array representing the target variable.
    
    Returns:
    - X_train, X_test: Training and testing datasets for cross-validation.
    """
    # Splitting data
    x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
    
    return x_train, x_test, y_train, y_test

def classify_model(model, X_train, y_train):
    """
    This function trains a machine learning model and predicts on the given training data.
    
    Parameters:
    - model: A trained machine learning model.
    - X_train: Training features.
    - y_train: Training target variable.
    
    Returns:
    - predictions: Predictions made by the model on the test dataset.
    """
    # Making predictions
    predictions = model.predict(X_train)
    
    return predictions

def evaluate_model(model, X_test, y_test):
    """
    This function evaluates a machine learning model using cross-validation and predicts on the given data.
    
    Parameters:
    - model: A trained machine learning model.
    - X_test: Testing features.
    - y_test: Testing target variable.
    
    Returns:
    - accuracy: Model's accuracy for testing.
    """
    # Making predictions
    predictions = classify_model(model, X_train, y_train)
    
    # Evaluating the model using cross-validation
    scores = cross_val_score(model, X_train, y_train, cv=5)
    print("Cross-validation Scores:", scores)

# Example usage of the above functions:
# Assume 'data' is a 2D numpy array representing the dataset.
X, y = preprocess_data(data)
x_train, x_test, y_train, y_test = train_test_split(X, y)
model = # Assuming we have trained the model previously
evaluate_model(model, x_test, y_test)
