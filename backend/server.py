import psutil
from flask import Flask, jsonify
import datetime

app = Flask(__name__)

@app.route('/data')
def get_time():
    x = datetime.datetime.now()
    return jsonify({
        'Name': "", 
        "Age": "",
        "Date": "",
        "programming": ""
    })

@app.route('/bandwidth')
def bandwidth():
    net_io = psutil.net_io_counters()
    return jsonify({"bytes_sent": net_io.bytes_sent, "bytes_recv": net_io.bytes_recv})

@app.route('/system-data')
def system_data():
    cpu_usage = psutil.cpu_percent()
    memory_usage = psutil.virtual_memory().percent
    disk_usage = psutil.disk_usage('/').percent  # '/' for root partition
    return jsonify({
        "cpu_usage": cpu_usage,
        "memory_usage": memory_usage,
        "disk_usage": disk_usage
    })

if __name__ == '__main__':
    app.run(debug=True)