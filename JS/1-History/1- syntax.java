public class JavaSample {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    try {
      final Dog dog = new Dog("Woof!");
      dog.playNoise(args[0]);
    } catch(Exception e) {
      System.out.println("Unexpected exception: " + e);
    }
  }
}