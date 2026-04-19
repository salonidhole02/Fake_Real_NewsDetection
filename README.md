# 🧠 Fake News Detection System — Athenura

An AI-powered web application that classifies news articles as **REAL or FAKE** using Machine Learning and Natural Language Processing (NLP).

---

## 📌 Overview

This project is designed to address the growing issue of misinformation by analyzing news content and predicting its authenticity using Machine Learning techniques.

The system integrates:
- Support Vector Machine (SVM)
- Word2Vec embeddings
- Flask backend with a responsive frontend

---

## 🚀 Key Features

- 🔍 Real-time news classification  
- 🧠 NLP-based text preprocessing  
- ⚙️ Machine Learning model (SVM)  
- 🌐 Interactive web interface  
- 📊 High accuracy model performance  
- 🔗 End-to-end integration (Frontend + Backend + ML)

---

## 🧠 How It Works

1. User enters news title and content  
2. Input is sent to Flask backend  
3. Text preprocessing is performed:
   - Removal of URLs  
   - Removal of special characters  
   - Conversion to lowercase  
4. Text is converted into vector format using **Word2Vec**  
5. The trained **SVM model** predicts:
   - ✅ REAL  
   - 🚨 FAKE  
6. Result is displayed on the UI  

---

## 🏗️ Project Structure

Fake-News-Detection/
│
├── models/
│   ├── svm_model.pkl
│   └── w2v_model.pkl
│
├── templates/
│   ├── index.html
│   └── detect.html
│
├── static/
│   ├── style.css
│   ├── detect.js
│   ├── athenura_logo.png
│   └── hero.jpg
│
├── dataset/            # Not included
├── notebook.ipynb      # Model training
├── app.py              # Flask backend
├── requirements.txt
└── .gitignore

---

## 📊 Model Performance

| Metric     | Score   |
|-----------|--------|
| Accuracy  | 97.22% |
| Precision | 0.97   |
| Recall    | 0.97   |
| F1 Score  | 0.97   |

---

## 🗂️ Dataset

The dataset is not included due to size limitations.

- Contains real and fake news articles
- Used for training and testing the model

Place dataset files inside:
`/dataset/`

---

## ⚙️ How to Run the Project

1. Install required libraries:
pip install -r requirements.txt

2. Run the application:
python app.py

3. Open in browser:
http://localhost:5000

---

## 🛠️ Tech Stack

| Layer            | Technology |
|------------------|-----------|
| Frontend         | HTML, CSS, JavaScript |
| Backend          | Python, Flask |
| Machine Learning | Scikit-learn (SVM) |
| NLP              | Gensim (Word2Vec) |
| Data Processing  | Pandas, NumPy |

---

## 🚀 Future Enhancements

- Integration with live news APIs  
- Advanced models (LSTM, BERT)  
- Multilingual support  
- Deployment on cloud platforms  

---

## 👩‍💻 Author

**Saloni Dhole**  
Aspiring Data Analyst | Machine Learning Enthusiast  

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
