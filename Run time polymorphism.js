public interface Shape {

	public void draw();
}
public class Circle implements Shape{

	@Override
	public void draw(){
		System.out.println("Drwaing circle");
	}

}
public class Square implements Shape {

	@Override
	public void draw() {
		System.out.println("Drawing Square");
	}

}