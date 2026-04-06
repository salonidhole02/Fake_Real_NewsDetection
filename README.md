Fake News Detection — Athenura

An AI-powered web application that detects whether a news article is real or fake using Machine Learning.

🚀 Live Demo
Run locally using the steps below.

📌 About the Project
This project was built to combat the growing problem of misinformation. It uses a Support Vector Machine (SVM) trained on thousands of real and fake news articles, with Word2Vec for text embeddings.

The web interface is built with HTML, CSS and JavaScript, served through a Flask backend that connects directly to the trained ML models.

🧠 How It Works
User pastes a news title and article text into the detection form
JavaScript sends the input to the Flask backend via fetch()
Flask cleans the text — removes URLs, special characters, lowercases
Text is converted into a Word2Vec vector (average of all word vectors)
The SVM model classifies it as REAL or FAKE
Result is sent back and the page turns green (REAL) or red (FAKE)
🏗️ Project Structure
Fake News Detection/
├── models/
│   ├── svm_model.pkl        # Trained SVM model
│   └── w2v_model.pkl        # Trained Word2Vec model
├── templates/
│   ├── index.html           # Landing page
│   └── detect.html          # Detection form page
├── static/
│   ├── style.css            # All styling
│   ├── detect.js            # Frontend logic
│   ├── athenura_logo.png    # Company logo
│   └── hero.jpg             # Hero section image
├── dataset/                 # Not included — see below
├── notebook.ipynb           # Model training notebook
├── app.py                   # Flask backend
├── requirements.txt         # Python dependencies
└── .gitignore
📊 Model Performance
Metric	Score
Accuracy	97.22%
Precision	0.97
Recall	0.97
F1 Score	0.97
🗂️ Dataset
Dataset not included in this repo due to file size.

Download from Kaggle: 👉 https://www.kaggle.com/datasets/clmentbisaillon/fake-and-real-news-dataset

Place Fake.csv and True.csv inside the dataset/ folder.

⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/meetc15/fake-news-detection.git
cd fake-news-detection
2. Create and activate virtual environment
# Windows
python -m venv venv
venv\Scripts\activate

# Mac/Linux
python -m venv venv
source venv/bin/activate
3. Install dependencies
pip install -r requirements.txt
4. Train the model (optional — only if pkl files are missing)
Open and run notebook.ipynb top to bottom. This will generate svm_model.pkl and w2v_model.pkl in the models/ folder.

5. Run the Flask app
python app.py
6. Open in browser
http://localhost:xxxx
🛠️ Tech Stack
Layer	Technology
Frontend	HTML, CSS, JavaScript
Backend	Python, Flask
ML Model	SVM (scikit-learn)
Text Embedding	Word2Vec (Gensim)
Data Processing	Pandas, NumPy
📁 Requirements
pandas
numpy
scikit-learn
gensim
seaborn
matplotlib
flask
flask-cors
