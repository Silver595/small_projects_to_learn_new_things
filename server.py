import socket

s = socket.socket()
s.bind(('localhost', 3000))
s.listen(1)

print("Server is listening on port 3000...")

conn,addr = s.accept()
print(f"Connection from {addr} has been established!")

while True:
    data = conn.recv(1024).decode()
    if not data:
        break
    print(f"Received: {data}")
    conn.send(data.encode())

conn.close()