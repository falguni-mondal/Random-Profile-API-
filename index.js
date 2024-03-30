let pic = document.querySelector('.pic img');
let heading = document.querySelector('.details span');
let detail = document.querySelector('.details h2');
let option = document.querySelectorAll('.option');
// let use;

fetch('https://randomuser.me/api/')
    .then(raw => raw.json())
    .then(data => {
       let use = data.results[0];
        console.log(use);
        pic.setAttribute('src', `${use.picture.large}`);
        heading.textContent = 'My name is';
        detail.textContent = `${use.name.first} ${use.name.last}`;
        for (let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                option.forEach((val) => {
                    val.classList.remove('active');
                });
                option[i].classList.add('active');
                if (i === 0){
                    heading.textContent = 'My name is';
                    detail.style.fontSize = '1.7rem'
                    detail.textContent = `${use.name.first} ${use.name.last}`;
                }
                else if (i === 1){
                    heading.textContent = 'My email id';
                    detail.style.fontSize = '1rem'
                    detail.textContent = `${use.email}`;
                }
                else if (i === 2){
                    heading.textContent = 'My DOB is';
                    detail.style.fontSize = '1.7rem'
                    detail.textContent = `${use.dob.date.slice(0, 9)}`;
                }
                else if (i === 3){
                    heading.textContent = 'My contact';
                    detail.style.fontSize = '1.7rem'
                    detail.textContent = `${use.cell}`;
                }
            })
        }
    })