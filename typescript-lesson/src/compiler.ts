function echo(message: string) {
  if (message) {
    return message;
  }
  return;
}

let nullableMessage: string | null = null;