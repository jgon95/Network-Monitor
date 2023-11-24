from flask import Flask, jsonify
import datetime

app = Flask(__name__)

@app.route('/data')
def get_time():
    x = datetime.datetime.now()
    return jsonify({
        'Name': "", 
        "Age": "",
        "Date": "",  # Formatting datetime as a string
        "programming": ""
    })

if __name__ == '__main__':
    app.run(debug=True)