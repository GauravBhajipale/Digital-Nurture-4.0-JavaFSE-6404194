import java.util.*;
public class FinancialForecasting {
    public static double predictFutureValue(double principal, double rate, int years) {

        if (years == 0) {
            return principal;
        }
        double result = predictFutureValue(principal * (1 + rate), rate, years - 1); 
        return result;
    }
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        // user input
        System.out.print("Enter initial amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual growth rate (ex: 0.05 for 5%): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();
        double futureValue = predictFutureValue(principal, rate, years);

        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);
    }
}
