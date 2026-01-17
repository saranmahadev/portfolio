
AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom'
});

var t = new Typed('#typed', {
  strings: ['I vibe to Build and Automate!'],
  loop: false,
  typeSpeed: 150
});

function addCerts() {
  var final = "";
  for (let index = 1; index < 25; index++) {
    final += `
    <div class="col-md-4 aos-init" data-aos="fade-up">
        <div class="card-custom rounded-4 bg-base shadow-effect">
            <div class="card-custom-image rounded-4">
                <img class="rounded-4" src="./assets/images/certs/${index}.webp" alt="">
            </div>                            
        </div>
    </div>
    `;
  }
  document.getElementById('certimages').innerHTML = final;
}

async function gql(query, variables = {}) {
  const data = await fetch('https://api.hashnode.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  });

  return data.json();
}



async function handleSubmit(event) {
  form = document.getElementById('contactForm');
  event.preventDefault();
  var status = document.getElementById("formStatus");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(e => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}

window.onload = function _exec_() {
  document.getElementById("contactForm").addEventListener("submit", handleSubmit);
}

document.addEventListener('DOMContentLoaded', function () {
  addCerts();
}, false);
