### Initial Steps

1. [Figured out how it works](https.//developer.mozilla.org/en-US/Add-ons/WebExtensions/Your_first_WebExtension)
2. Played around a bit Like changed whole content into a single text
document.body.innerHtml = "hello"
3. Figured out how to add Jquery to it
This took me sometime to figure out but figured out I had to add permission to perform CORS in `manifest.json` file
4. Played around a bit to perform post and get request, Just used Python `SimpleHTTPServer` without any API

> Now that I have a basic idea of how it works I am gonna go ahead with building the one I want

### The site tracker

Intitally I am going to just track how many times I visited a page everyday. It would involve my usual sites Facebook, twitter, medium, quora etc.,

Later I am also planning to track the time I spend on each one of those.

Hence the two features

#### Number of visits/day

Steps I have in mind
1. I will just keep a counter for each page and use browser storage for Now - `status :: Done`
2. I am also going to set a alert at a particular time each day

#### Time spent on each page
