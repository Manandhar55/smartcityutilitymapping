from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all domains

# In-memory feedback store (you can use a database in production)
feedbacks = []

@app.route('/api/feedback', methods=['POST'])
def submit_feedback():
    try:
        data = request.get_json()

        # Ensure all required fields are provided
        if not data.get('name') or not data.get('email') or not data.get('feedback'):
            return jsonify({'error': 'All fields are required'}), 400

        # Store the feedback
        feedback = {
            'name': data['name'],
            'email': data['email'],
            'feedback': data['feedback'],
        }
        feedbacks.append(feedback)

        return jsonify({'message': 'Feedback submitted successfully'}), 200

    except Exception as e:
        # Return any exception error as a response
        return jsonify({'error': f'An error occurred: {str(e)}'}), 500

@app.route('/api/feedbacks', methods=['GET'])
def get_feedbacks():
    # Return all stored feedbacks (in-memory)
    return jsonify(feedbacks)

if __name__ == '__main__':
    app.run(debug=True)
