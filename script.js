* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #0f0f0f;
  color: #f0f0f0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 20px;
}

.container {
  width: 100%;
  max-width: 700px;
}

h1 {
  margin-bottom: 8px;
}

p {
  color: #aaa;
  margin-bottom: 24px;
}

.chat-box {
  background: #1a1a1a;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #333;
}

#messages {
  height: 400px;
  overflow-y: auto;
  padding: 20px;
}

.input-area {
  display: flex;
  gap: 10px;
  padding: 16px;
  border-top: 1px solid #333;
}

input {
  flex: 1;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #444;
  background: #111;
  color: white;
  font-size: 16px;
}

button {
  padding: 12px 24px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background: #2563eb;
}

.message {
  margin-bottom: 16px;
  padding: 12px 16px;
  border-radius: 8px;
  max-width: 85%;
}

.user {
  background: #2563eb;
  margin-left: auto;
}

.assistant {
  background: #2a2a2a;
}