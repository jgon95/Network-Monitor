import psutil
from flask import Flask, jsonify
import datetime, time
import threading

app = Flask(__name__)

# Global variables to store the latest data for device status and network loss
device_status_data = {}
network_loss_data = {}

def update_device_status():
    global device_status_data
    while True:
        uptime_seconds = int(time.time() - psutil.boot_time())
        uptime = str(datetime.timedelta(seconds=uptime_seconds))
        device_status_data = {"uptime": uptime}
        time.sleep(1)  # Update every 1 second

def update_network_loss():
    global network_loss_data
    while True:
        net_io_start = psutil.net_io_counters()
        time.sleep(1)  # 1-second interval for measuring network loss
        net_io_end = psutil.net_io_counters()
        network_loss_data = {
            "bytes_sent_loss": net_io_end.bytes_sent - net_io_start.bytes_sent,
            "bytes_recv_loss": net_io_end.bytes_recv - net_io_start.bytes_recv
        }

# Initialize and start background threads
device_status_thread = threading.Thread(target=update_device_status)
device_status_thread.daemon = True
device_status_thread.start()

network_loss_thread = threading.Thread(target=update_network_loss)
network_loss_thread.daemon = True
network_loss_thread.start()

@app.route('/bandwidth')
def bandwidth():
    net_io = psutil.net_io_counters()
    return jsonify({"bytes_sent": net_io.bytes_sent, "bytes_recv": net_io.bytes_recv})

@app.route('/system-data')
def system_data():
    cpu_usage = psutil.cpu_percent()
    memory_usage = psutil.virtual_memory().percent
    disk_usage = psutil.disk_usage('/').percent
    return jsonify({
        "cpu_usage": cpu_usage,
        "memory_usage": memory_usage,
        "disk_usage": disk_usage
    })

@app.route('/device-status')
def device_status():
    return jsonify(device_status_data)

@app.route('/network-loss')
def network_loss():
    return jsonify(network_loss_data)

if __name__ == '__main__':
    app.run(debug=True)