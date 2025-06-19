public class Test {
    public void runTest() {
        //first instance
        Logger logger1 = Logger.getInstance();
        //second instance
        Logger logger2 = Logger.getInstance();

        logger1.log("first instance ");
        logger2.log("second instance");

        if (logger1 == logger2) {
            System.out.println("Both intances are same");
        } else {
            System.out.println("Both instances are different");
        }
    }
}
