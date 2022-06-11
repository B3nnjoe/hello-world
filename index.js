
module.exports = function helloWorld(language) {
  const languages = [
    {
      lang: 'c',
      solution: 'printf("Hello World\n");',
    },
    {
      lang: 'c++',
      solution: 'cout << "Hello, World!";',
    },
    {
      lang: 'c#',
      solution: 'System.Console.WriteLine("Hello World!");',
    },
    {
      lang: 'java',
      solution: 'System.out.println( "Hello World!" );',
    },
    {
      lang: 'php',
      solution: '<?php echo "Hello World!"; ?>',
    },
    {
      lang: 'python',
      solution: 'print("Hello World!")',
    },
    {
      lang: 'ruby',
      solution: 'puts "Hello World!"',
    },
    {
      lang: 'swift',
      solution: 'print("Hello World!")',
    },
    {
      lang: 'kotlin',
      solution: 'println("Hello World!")',
    },
    {
      lang: 'typescript',
      solution: 'console.log("Hello World!")',
    },
    {
      lang: 'javascript',
      solution: 'console.log("Hello World!")',
    },
    {
      lang: 'go',
      solution: 'fmt.Println("Hello World!")',
    },
    {
      lang: 'rust',
      solution: 'println!("Hello World!")',
    },
    {
      lang: 'haskell',
      solution: 'putStrLn "Hello World!"',
    },
    {
      lang: 'elixir',
      solution: 'IO.puts "Hello World!"',
    },
    {
      lang: 'elm',
      solution: 'main = putStrLn "Hello World!"',
    },
    {
      lang: 'clojure',
      solution: 'println "Hello World!"',
    },
    {
      lang: 'scala',
      solution: 'println("Hello World!")',
    },
  ];
  if (!language) return new Error('Language can\'t be null!')

  if (language === 'all') return languages.map(lang => { return ({ language: lang.lang, helloWorld: lang.solution }) });

  return languages.find(l =>
    l.lang == language.toLowerCase()
  )
    ?.solution ?? new Error("language not found")
}



