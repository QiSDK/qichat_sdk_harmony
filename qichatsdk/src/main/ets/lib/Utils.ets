import * as Timestamp from '../../protots/google/protobuf/timestamp';

export default class  Utils{

  public static  msgTime(): Timestamp.google.protobuf.Timestamp {
    // Create a new Timestamp object
    const timestamp = new Timestamp.google.protobuf.Timestamp;

    // Get the current time in milliseconds
    const millis = Date.now();

    // Convert milliseconds to seconds and set it in the Timestamp
    timestamp.seconds = Math.floor(millis / 1000);

    // Optionally, set nanoseconds (if needed)
    //const nanos = (millis % 1000) * 1e6; // Convert milliseconds to nanoseconds
    //timestamp.setNanos(nanos);

    return timestamp;
  }
}