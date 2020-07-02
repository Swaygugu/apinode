const fetch = require('node-fetch')


// async function getUser () {
//     try {
//       const response = await fetch('https://mdn.github.io/fetch-examples/basic-fetch/')
//       const data = await response.json()
//       console.log(response.status)
//       console.log(data)
//     } catch (err) {
//       console.log(err)
//     }
//    }

//    getUser();


var myJSON = '{"name": "Kate", "pet": {"dog": "Corgi", "cat": "Persian"}}';

var myObj = JSON.parse(myJSON);
console.log()
// Modify myObj...

JSON.stringify(myObj);