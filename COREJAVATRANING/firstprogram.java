package COREJAVATRANING;
/*public class FirstProgram {
    // entry point of your program
    public static void main(String[] args) {
        // to print anything on a console
        System.out.println("My first program in java");
    }
}*/

/*J2SE  -- java standard edition --- Core java -- window based application
Java is a case sensitive language
Program and File name should be the same where your main function is defined and has to public */
public class firstprogram {
    // these variables are non-static which we are defining in a class directly
    // that means directly we cannot call non static variables in a static main
    // method
    // int type of variable
    short shortValue = 23;
    double price = 678.00;
    float totalPrice = 5656.00F;
    // naming convention of a class in java where starting alphabet of each word is
    // in caps
    String name = " Niti Dwivedi ";
    char charValue = 'A';
    String address = " delhi 343 dsf ";
    // constructor name must be the same as class name
    // constructor has access specifier
    // constructor do not have a return type
    private firstprogram() {
    }
    // method name
    public double displayNumber() {
        double age = 56.09;
        return age;
    }
    // entry point of your program
    public static void main(String[] args) {
        // declaration and initialization of a variable
        int number1 = 20;
        // to print anything on a console
        System.out.println("My first program in java");
        System.out.println("The value of number 1 : " + number1);
    }
}





/* 

class PrintingVariables {
    static String companyName = "Wipro Ltd";
}
public class SecondProgram {
    // access modifiers : - default , public , protected and private
    // non- access modifiers : - final , abstract , strictfp
    // local variables (inside a method ,or as an argiments void display(int a , int
    // b)
    // class variables (Static variables) which are called directly with the class
    // name if class is also static
    // instance variables ( non-static variables ) which are called with the help of
    // instance of a class or object of a class
    String name = "Niti Dwivedi";
    int age = 45; // instance variables
    public static void main(String[] args) {
        SecondProgram obj = new SecondProgram();
        System.out.println(obj.name);
        System.out.println(obj.age);
        System.out.println(PrintingVariables.companyName);
        //type casting is required you want to save the value from big bucket to small bucket 
byte value1 = 10;
short value2 = value1;  // implicit casting -- Widening type casting
short value3=78;
byte value4 = (byte)value3;  // explicit casting -- > Narrowing type casting
//operators : relational , logical, arithmetic , assignment , bitwise

    }   
}
*/