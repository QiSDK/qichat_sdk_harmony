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


  public static  formatDateNow(): string {
    const date = new Date(Date.now());
    return new Utils().formatDate(date);
  }

  public formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Combine into the desired format
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}