import socket

c = socket.socket()
c.connect(("localhost",3000))


while True:
    msg = input("You: ")
    c.send(msg.encode())
    res = c.recv(1024).decode()
    print(f"Server: {res}")