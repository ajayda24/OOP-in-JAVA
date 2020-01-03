public class ManualCar implements Car {

	private String carType = "Manual";
	
	@Override
	public void turnOnCar() {
		System.out.println("turn on the manual car");
	}

	@Override
	public void turnOffCar() {
		System.out.println("turn off the manual car");
	}

	@Override
	public String getCarType() {
		return this.carType;
	}
}

package com.journaldev.oops.abstraction;

public class AutomaticCar implements Car {

	private String carType = "Automatic";

	@Override
	public void turnOnCar() {
		System.out.println("turn on the automatic car");
	}

	@Override
	public void turnOffCar() {
		System.out.println("turn off the automatic car");
	}

	@Override
	public String getCarType() {
		return this.carType;
	}
}