class Global {
  // Step 1: Private static instance
  private static instance: Global;

  // Step 2: Private constructor
  private constructor() {
    // Initialization logic (if needed)
    console.log('Singleton instance created');
  }

  // Step 3: Static method to access the singleton instance
  public static getInstance(): Global {
    if (!Global.instance) {
      Global.instance = new Global();
    }
    return Global.instance;
  }

  // Example method
  public doSomething(): void {
    console.log('Doing something in the singleton');
  }

}