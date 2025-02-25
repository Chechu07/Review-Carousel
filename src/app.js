const reviews = [
    {
        id:1,
        name:'Olivia Sharp',
        job:'Web Designer',
        img:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text:'I had the privilege of working at Look Into as a web developer. During my time there, I was able to contribute to the development of interactive and scalable applications, always focusing on delivering a seamless user experience. Collaborating with the team was enriching and I learned a lot about best practices in web development and modern technologies'
    },
    {
        id:2,
        name:'Lorraine Smith',
        job:'Backend Developer',
        img:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text:'At Look Into, as a Backend Developer, you optimized the system architecture and improved the performance of the APIs. I worked with technologies such as Node.js and PostgreSQL, ensuring scalability and security in each implementation.'
    },
    {
        id:3,
        name:'Lucas Brown',
        job:'Technical Leader',
        img:'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text:'Being a Technical Lead at Look Into allowed me to guide a team of developers in creating innovative products. I implemented best practices, optimized processes and encouraged the teams technical growth to achieve successful results.'
    },
    {
        id:4,
        name:'Samuel Stewart',
        job:'Computer Engineer',
        img:'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text:'As a Computer Engineer at Look Into, I was responsible for the design and development of innovative technological solutions. I used my knowledge in programming, algorithms and systems to optimize processes and guarantee the stability of the applications, always seeking to improve the efficiency and scalability of the projects.'
    },
]

const img = document.getElementById('person-image')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function() {
    showPerson() 
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text
};

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson()
})

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson()
});

randomBtn.addEventListener('click', function(){
      currentItem = Math.floor(Math.random() * reviews.length)
      showPerson()
});





















// randomBtn.addEventListener('click', function(){
//     currentItem = Math.floor(Math.random() * reviews.length)
//     console.log(currentItem)
//     showPerson();
// });

