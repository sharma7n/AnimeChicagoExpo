// KIA linter to be run by node in the terminal

// Setting necessary variables
const fs = require("fs")
const projectDir = `${__dirname}`
const lintErrors = []

// Linter Rules
const linter = (dataArray, currentPath, lintErrors) => {
  let sampleTreeBoolean = false

  if (dataArray[0][0] != "*") {
    lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t The first line must be a header statement prefixed with a "*"`)
  }

  dataArray.forEach((value, index) => {
    if (!/\|--/.exec(value) && !/[a-zA-Z]|\d|\*|\-|\s/.exec(value[0])) {
      lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: Invalid line prefix. Only "*", "-", spaces, and letters are allowed to start a line.`)
    }

    if (value[0] === "*" || value[0] === "-") {
      if (value[1] != " ") {
        lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: There must be a space between all prefixes and the next letter.`)
      }

      if (dataArray[index+1] != "" && dataArray[index+1][0] != " ") {
        lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+2}: New lines following a statement prefixed with a "*" or "-" must be tabbed over on the next line.`)
      }
    }

    if (/\d/.exec(value[0])) {
      if (value[1] != ".") {
        lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: Lines beginning with numbers must have a "." directly after the number`)
      }

      if (value[1] === "." && value[2] != " ") {
        lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: There must be a space between number period prefixed and the next letter.`)
      }

      if (dataArray[index+1] != "" && dataArray[index+1][0] != " ") {
        lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+2}: New lines following a statement prefixed with a number period (1.) must be tabbed over on the next line.`)
      }
    }

    if (value[0] === " ") {
      if (dataArray[index+1] !== undefined) {
        if (dataArray[index+1] != "" && dataArray[index+1][0] != " ") {
         if (dataArray[index+1][0] ==="*" || dataArray[index+1][0] ==="-"){
            lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+2}: There must be an empty line seperating a block of text and a line prefixed with a "*" or "-".`)
          } else {
            lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+2}: New lines part of a block prefixed with a "*" or "-" must be tabbed over on the next line.`)
          }
        }
      }
    }

    if (value.length > 55) {
      lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: The line cannnot be any longer than 55 characters`)
    }

    if (/\|--/.exec(value)) {
      sampleTreeBoolean = true
      value.split("").forEach((char, i) => {
        if (char === "-" && value[i-1] === "-") {
          if (value[i+1] != " ") {
            lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Line ${index+1}: There must be a space between "|--" and the next preceding character.`)
          }
        }
      })
    }
  })

  if (!dataArray.includes("Sample Directory Tree:")) {
    lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Every ABOUTDIR.txt must have a line equal to "Sample Directory Tree:" (check for white space before and after)`)
  }

  if (!sampleTreeBoolean) {
    lintErrors.push(`${currentPath}/ABOUTDIR.txt:\n\t Every ABOUTDIR.txt needs a sample directory tree diagram, example: \n\n\t|-- config\n\t\t|-- ABOUTDIR.txt`)
  }
}

// Recursively searches through directories
const directoryClimber = (fs, projectDir, lintErrors) => {
  const lintIgnore = projectDir.match(/.*\/(node_modules|\.git|\.expo).*/i);
  if (lintIgnore) { return lintErrors; }
  
  const files = fs.readdirSync(projectDir)

  if (files.includes("ABOUTDIR.txt")) {
    const data = fs.readFileSync(`${projectDir}/ABOUTDIR.txt`, "utf8")
    linter(data.split("\n"), projectDir, lintErrors)
  } else {
    if (projectDir !== `${__dirname}`) {
      lintErrors.push(`${projectDir}:\n\t Directory does not have an ABOUTDIR.txt. All directories must have an ABOUTDIR.txt.`)
    }
  }

  files.forEach((file, index) => {
    const stats = fs.statSync(`${projectDir}/${file}`)

    if (stats.isDirectory()) {
      const nextDir = `${projectDir}/${file}`;
      directoryClimber(fs, nextDir, lintErrors);
    }
  });

  return lintErrors
}

// Running the program
const errorsList = directoryClimber(fs, projectDir, lintErrors)

errorsList.forEach((value, index) => {
  console.log(`${index+1}> ${value}`)
  console.log("\n")
})

// Return codes for the CI
if (errorsList.length > 0) {
  process.exit(1)
} else {
  process.exit(0)
}

// let count = 0
// const directoryClimber = (fs, projectDir, lintErrors, c) => {
//
//   fs.readdir(projectDir, (err, files) => {
//     if (err) { return }
//
//     if (files.includes("ABOUTDIR.txt")) {
//       fs.readFile(`${projectDir}/ABOUTDIR.txt`, "utf8", (err, data) => {
//         if (err) { return }
//         // console.log(data.split("\n"))
//       })
//       // read and regex process on file
//     } else {
//       lintErrors.push(`${projectDir} does not have an ABOUTDIR.txt. All directories must have an ABOUTDIR.txt if something else exists in the directory`)
//     }
//
//     files.forEach((file, index) => {
//       fs.stat(`${projectDir}/${file}`, (err, stats) => {
//         if (err) { return }
//
//         if (stats.isDirectory()) {
//           const nextDir = `${projectDir}/${file}`
//
//           directoryClimber(fs, nextDir, lintErrors)
//         }
//       })
//     })
//   })
//
//   return lintErrors
// }
