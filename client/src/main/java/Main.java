import io.socket.client.IO;
import io.socket.client.Socket;

public class Main {
    public static void main(String[] args) {
        try {
            Socket socket = IO.socket("http://localhost:6974/");
            socket.on(Socket.EVENT_CONNECT, objects -> {
                System.out.println("Connected!");
            });
            socket.on(Socket.EVENT_DISCONNECT, objects -> {
                System.out.println("Disconnected!");
            });
            socket.connect();

            Thread.sleep(10000);
            socket.disconnect();
            socket.close();
        }
        catch(Exception e) {
            e.printStackTrace();
        }
    }
}
