console.log('Hello world');
try {
  const dog = new Dog('Woof!');
  dog.playNoise(process.argv[0]);
} catch(e) {
  console.log('Unexpected exception' + e);
}