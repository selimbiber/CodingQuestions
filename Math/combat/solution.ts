function combat(health: number, damage: number): number {
  return health > damage ? health - damage : 0;
}