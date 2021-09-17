import { echo } from "package-echo";

export function handler() {
  echo('Echooooo')

  return {
    statusCode: 200
  }
}
