function main(args: string[]): void {
  console.log("Hello world!");
  console.log(args);
}

main(process.argv.slice(2));
