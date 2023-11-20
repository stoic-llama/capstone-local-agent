var formJSON = {message: 'test'}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // validate
    const data = new FormData(event.currentTarget);
    // const values = [...data.values()];
  
    // formJSON = Object.fromEntries(data.entries());

    // console.log('formJSON:')
    // console.log(formJSON)

    jenkinsArr = data.getAll('CAPSTONE_JENKINS')
    console.log(jenkinsArr)

    if (values.includes('')) {
      console.log('please enter all values');
      return;
    } else {
      // load key-value pairs for each form element
      const formJSON = Object.fromEntries(data.entries());
      
      // update config.json on server
      updateConfig(formJSON)
  
      // for multi-selects, we need special handling
      formJSON.snacks = data.getAll('snacks');
      
      const results = document.querySelector('.results pre');
      results.innerText = JSON.stringify(formJSON, null, 2);
  
      // reset the form to empty for new submission
      e.currentTarget.reset();
    }
}

function updateConfig(formJSON) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let data = JSON.stringify(formJSON);

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        redirect: 'follow'
    };

    let domain = process.env.DOMAIN

    fetch(`http://${domain}:5900/api/v1/config`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}



function addJenkins(event) {
    event.preventDefault()

    let jenkinsCounter = document.querySelector('#jenkinsCounter').innerText
    let counter = parseInt(jenkinsCounter)
    
    // Create a document fragment
    var fragment = document.createDocumentFragment();

    // Create the elements to be appended
    var divElement = document.createElement('div');
    var nameLabel = document.createElement('label');
    var nameInput = document.createElement('input');
    var urlLabel = document.createElement('label');
    var urlInput = document.createElement('input');

    // Set attributes and properties for the elements
    divElement.classList.add('input-group')
    nameLabel.setAttribute('for', `jenkins_name_${counter}`);
    nameLabel.innerHTML = 'Name'
    nameInput.id = `jenkins_name_${counter}`;
    nameInput.name = `CAPSTONE_JENKINS_NAME`;
    nameInput.type = 'text';
    urlLabel.setAttribute('for', `jenkins_url_${counter}`);
    urlLabel.innerHTML = 'URL'
    urlInput.id = `jenkins_url_${counter}`;
    urlInput.name = `CAPSTONE_JENKINS_URL`;
    urlInput.type = 'text';

    // Append the elements to the fragment
    divElement.appendChild(nameLabel);
    divElement.appendChild(nameInput);
    divElement.appendChild(urlLabel);
    divElement.appendChild(urlInput);
    fragment.appendChild(divElement);

    // Append the fragment to the parent element
    var parentElement = document.getElementById('jenkins');
    parentElement.appendChild(fragment);

    document.querySelector('#jenkinsCounter').innerText = ++counter
}


const form = document.querySelector('.config-form > form');
form.addEventListener('submit', handleFormSubmit);
  

/*
// Refer https://github.com/john-smilga/javascript-nuggets/blob/master/29-form-data-api/app.js

const form = document.querySelector('.form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const values = [...formData.values()];

  if (values.includes('')) {
    console.log('please enter all values');
    return;
  }
  const formObject = Object.fromEntries(formData);
  // do something
  console.log(formObject);

  e.currentTarget.reset();
});

*/



/*
     const formEl = document.querySelector("form");
      const tbodyEl = document.querySelector("tbody");
      const tableEl = document.querySelector("table");
      function onAddWebsite(e) {
        e.preventDefault();
        const website = document.getElementById("website").value;
        const url = document.getElementById("url").value;
        tbodyEl.innerHTML += `
            <tr>
                <td>${url}</td>
                <td>${website}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
      }

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit", onAddWebsite);
      tableEl.addEventListener("click", onDeleteRow);

*/
