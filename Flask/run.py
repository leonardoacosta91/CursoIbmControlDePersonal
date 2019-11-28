from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route("/")
def index():
    return 'Hello world'

@app.route("/formdata",methods=['GET','POST'])
def reciboImagen():
    if request.method == 'POST':
        file = request.files['imagen'].read()
        response = jsonify({'respuesta': 'data'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    if request.method == 'GET':
        return 'entro por get'