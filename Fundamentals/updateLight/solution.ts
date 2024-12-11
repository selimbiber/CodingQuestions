function updateLight(current: string): string {
  const lights: Record<string, string> = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };

  return lights[current];
}
