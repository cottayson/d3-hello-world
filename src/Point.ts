export interface Point {
  description: string,
  data: number[]
}

export function getpoint() {
  return {
    description: "point",
    data: [1, 2, 3]
  }
}
