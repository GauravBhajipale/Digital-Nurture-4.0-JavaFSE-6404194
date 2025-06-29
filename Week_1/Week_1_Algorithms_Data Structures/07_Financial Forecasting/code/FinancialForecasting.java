import java.util.*;

public class FinancialForecasting {

    private static Map<Integer, Double> memo = new HashMap<>();

   
    public static double calculateFutureValue(double principal, double rate, int years) {
        
        if (years == 0) {
            return principal;
        }

        
        if (memo.containsKey(years)) {
            return memo.get(years);
        }

        
        double result = calculateFutureValue(principal * (1 + rate), rate, years - 1);
        memo.put(years, result);  
        return result;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // User Input
        System.out.print("Enter initial amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter annual growth rate (e.g., 0.05 for 5%): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter number of years: ");
        int years = scanner.nextInt();

       
        double futureValue = calculateFutureValue(principal, rate, years);

    
        System.out.printf("Future Value after %d years: %.2f\n", years, futureValue);

    }
}
