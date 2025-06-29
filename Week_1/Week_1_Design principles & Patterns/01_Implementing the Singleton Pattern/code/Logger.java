
// public class Logger {
//     //
//     private static Logger instance;
    
//     // Step 2: Private constructor to prevent instantiation
//     private Logger() {
//         System.out.println("Logger instance created");
//     }

//     // Step 3: Public static method to provide global access point
//     public static Logger getInstance() {
//         if (instance == null) {
//             instance = new Logger(); // Lazy initialization
//         }
//         return instance;
//     }

//     // Logging method for demonstration
//     public void log(String message) {
//         System.out.println("Log: " + message);
//     }
// }

public class Logger {
    private static Logger instance;

    private Logger() {
        System.out.println("Logger instance created");
    }

    public static Logger getInstance() {
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
