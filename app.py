from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pickle
import numpy as np
import re

app = Flask(__name__)
CORS(app)

# ---------------------------------
# LOAD MODELS
# ---------------------------------
import pickle

with open("models/w2v_model.pkl", "rb") as f:
    w2v_model = pickle.load(f)

with open("models/svm_model.pkl", "rb") as f:
    svm_model = pickle.load(f)

print("✅ Models loaded successfully")

# ---------------------------------
# SERVE HTML PAGES
# ---------------------------------
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/detect')
def detect():
    return render_template('detect.html')

# ---------------------------------
# TEXT CLEANING
# ---------------------------------
def clean_text(text):
    text = str(text)
    text = re.sub(r"http\S+|www\S+", "", text)
    text = re.sub(r"[^a-zA-Z]", " ", text)
    text = text.lower()
    return text.split()

# ---------------------------------
# VECTOR CREATION
# ---------------------------------
def get_average_vector(tokens):
    vectors = []
    for word in tokens:
        if word in w2v_model.wv:
            vectors.append(w2v_model.wv[word])
    if len(vectors) == 0:
        return np.zeros(100)
    return np.mean(vectors, axis=0)

# ---------------------------------
# PREDICTION ROUTE
# ---------------------------------
@app.route('/predict', methods=['POST'])
def predict():
    data  = request.get_json()
    title = data.get('title', '')
    text  = data.get('text', '')

    full_text = title + " " + text
    tokens    = clean_text(full_text)
    vector    = get_average_vector(tokens).reshape(1, -1)

    prediction = svm_model.predict(vector)[0]
    result     = "REAL" if prediction == 1 else "FAKE"

    return jsonify({ "prediction": result })

# ---------------------------------
# RUN SERVER
# ---------------------------------
if __name__ == '__main__':
    app.run(debug=True, port=5000)