// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![MIT license badge](https://img.shields.io/badge/License-MIT-red.svg)`
  }
  else if (license === "Apache 2.0"){
    return `![Apache 2.0 license badge](https://img.shields.io/badge/License-Apache2.0-yellow.svg)`
  }
  else if (license === "GPL 3.0"){
    return `![GPL 3.0 license badge](https://img.shields.io/badge/License-GPL3.0-green.svg)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[MIT license](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache 2.0"){
    return `[Apache 2.0 license](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GPL 3.0"){
    return `[GPL 3.0 license](https://opensource.org/licenses/GPL-3.0)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return `
    Copyright © 2022 <copyright holders>

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  }
  else if (license === "Apache 2.0"){
    return `
    Copyright 2022 [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`
  }
 else if (license === "GPL 3.0") {
  return `
  Copyright (C) 2022  <name of author>

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.`
 }
 else {
   return `No License selected`
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents for ${data.title}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Description
${data.description}

### Installation
${data.install}

### Usage
${data.usage}

### License
${renderLicenseLink(data.license)}
${renderLicenseSection(data.license)}

### Contributing
${data.contribute}

### Tests
${data.test}

### Questions
If you have any questions, feel free to contact me via email, ${data.email}, or visit my Github page at [${data.github}](https://github.com/${data.github}).
`;
}

module.exports = generateMarkdown;
