from flask import Flask, current_app, jsonify,request,Response,render_template
import json
import sys
from random import randint

app = Flask(__name__, static_folder="./build/static", template_folder="./build/")

class DataStore():
    failure_rate = 0
    error_code = 400

data = DataStore()

@app.route("/")
def mainpage():
    return render_template("index.html")
    
@app.route("/control", methods=["POST"], strict_slashes=False)
def add_articles():
    data.failure_rate = int(request.json['errorrate'])
    data.error_code = int(request.json['errorcode'])
    print(data.failure_rate, data.error_code)

    x = {
        "errorrate": data.failure_rate,
        "errorcode": data.error_code
    }

    return jsonify(x)

@app.route("/current", methods=["GET"], strict_slashes=False)
def list_errors():
    x = {
        "errorrate": data.failure_rate,
        "errorcode": data.error_code
    }
    print(x)
    return jsonify(x)

@app.route("/failure")
def randomfailure():
    x = randint(0,100)
    print(x)
    print(data.failure_rate, data.error_code)
    if x < data.failure_rate:
        return Response("something went wrong", status=data.error_code)
    else: 
        return Response("all good", status=200)


if __name__ == "__main__":
    app.run()