export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function capitalizeEach(value: string): string {
  return value.split(' ').map(capitalize).join(' ');
}
