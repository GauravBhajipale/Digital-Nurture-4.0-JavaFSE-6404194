import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("How many products do you want to enter? ");
        int n = input.nextInt();
        input.nextLine();

        Product[] productList = new Product[n];

        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for Product " + (i + 1));
            System.out.print("Enter Product ID: ");
            int id = input.nextInt();
            input.nextLine();

            System.out.print("Enter Product Name: ");
            String name = input.nextLine();

            System.out.print("Enter Product Category: ");
            String category = input.nextLine();

            productList[i] = new Product(id, name, category);
        }

        ProductSearchHelper.sortProductsById(productList);

        System.out.println("\nAll Products:");
        for (Product product : productList) {
            System.out.println(product);
        }

        System.out.print("\nEnter Product ID to search: ");
        int searchId = input.nextInt();

        System.out.println("\nLinear Search:");
        Product found = ProductSearchHelper.linearSearch(productList, searchId);
        if (found != null) {
            System.out.println("Product found: " + found);
        } else {
            System.out.println("Not found..");
        }

        System.out.println("\nBinary Search:");
        Product foundBinary = ProductSearchHelper.binarySearch(productList, searchId);
        if (foundBinary != null) {
            System.out.println("Product found: " + foundBinary);
        } else {
            System.out.println("Not found..");
        }

        input.close();
    }
}
