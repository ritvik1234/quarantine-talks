import eventlet
eventlet.monkey_patch()

from flask import Flask, render_template, session, request
from flask_socketio import SocketIO, emit, join_room

app = Flask(__name__)
app.debug = True
app.config['SECRET_KEY'] = 'mysecretkey'
socketio = SocketIO(app)

live_user_count = 0

@app.route('/')
def chat():
  return render_template('chat.html')

@app.route('/login')
def login():
  return render_template('login.html')

@socketio.on('message', namespace='/globalChat')
def chat_message(message):
  emit('message', {'data': message['data']}, broadcast=True)

@socketio.on('disconnect', namespace='/globalChat')
def test_connect():
  global live_user_count
  live_user_count -= 1
  emit('response', {'status': 'connected', 'count': live_user_count}, broadcast=True)

@socketio.on('connect', namespace='/globalChat')
def test_connect():
  global live_user_count
  live_user_count += 1
  emit('response', {'status': 'connected', 'count': live_user_count}, broadcast=True)

if __name__ == '__main__':
  socketio.run(app)
