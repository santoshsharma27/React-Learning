abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  // Abstract method (must be implemented in subclasses)
  abstract getSepia(): void;

  getReelTime(): number {
    //some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const ss = new Instagram("test", "Test", 3);

ss.getReelTime(); // 8
ss.getSepia(); // Sepia
