package testing;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class myLibrary {

    public static void printError(Error e) {
        int msgSize = e.toString().length() + 4;
        String decoration = "";
        for (int i = 0; i < msgSize; i++) {
            decoration += "!";
        }
        System.out.println("\r\n// Personal Error message Formatting \\");
        System.out.println(decoration);
        System.out.println("! " + e.toString() + " !");
        System.out.println(decoration + "\r\n");
    }

    public static void alert(String msg) {
        int msgSize = msg.length() + 4;
        String decoration = "";
        for (int i = 0; i < msgSize; i++) {
            decoration += "-";
        }
        System.out.println("\r\n" + decoration);
        System.out.println("* " + msg + " *");
        System.out.println(decoration + "\r\n");
    }

    public static void emptyField(String idElement, WebDriver driver) {
        try {
            driver.findElement(By.id(idElement)).clear();
        } catch (Error e) {
            myLibrary.printError(e);
            throw e;
        }
    }

    public static void fillFieldById(String idElement, String value,WebDriver driver){
        try {
            driver.findElement(By.id(idElement)).clear();
            driver.findElement(By.id(idElement)).sendKeys(value);
//            alert(idElement +" : "+value);
        } catch (
                Error e) {
            myLibrary.printError(e);
            throw e;
        }
    }
}
