// about
let about = document.querySelector('section#about .row:last-child');
let aboutContents = [
    "My full name is Taflynne Summer Petersen , age 18. Matriculated in 2022 at Muizenberg High School. To describe who I am in one word is introspective. I am observant and I examine things. However I am talented and creative too. I am a musician , I play guitar and bass guitar as well as alto singing. These i would say are skills as i have been tested for them. Some of my favourite hobbies include: baking, reading, basketball and photography. How I started to enjoy and grow a love for coding, is through my ex-bestfriend and for the love of technology. I was always intrigued by Web development and the work that goes into. To understand what is being done and how everything relates. This was my starting point of drawing closer to the industry as a whole."
]
//loop ythrough the content//
aboutContents.forEach( (content)=> {
    about.innerHTML +=`
    <p class="lead">${content}</p>
    `
})

// Education
let education = [
    {
        id: 1,
        year: 2023,
        description: 'I am studying Coding',
        place: 'Life Choices Academy',
        type: '',
        certificate: ''
    },
    {
        id: 2,
        year: 2022,
        description: 'I got my matric certificate',
        place: 'Muizenberg High School',
        type: 'certificate',
        certificate: ''
    },
    {
        id: 3,
        year: 2017,
        description: 'I finished grade 7',
        place: 'Heathfield Primary',
        type: 'certificate',
        certificate: ''
    },
    // {
    //     id: 4,
    //     year: 2015,
    //     description: 'I got my certificate on Intro to Android Developer',
    //     place: 'Study Jams',
    //     type: 'certificate',
    //     certificate: ''
    // },
    // {
    //     id: 5,
    //     year: 2014,
    //     description: 'I got my diploma on Software Engineering',
    //     place: 'Tshwane University of Technology',
    //     type: 'Diploma',
    //     certificate: ''
    // },
    // {
    //     id: 6,
    //     year: 2005,
    //     description: 'Completed my course on PC Engineering',
    //     place: 'Havatech',
    //     type: 'Certificate',
    //     certificate: ''
    // },
    // {
    //     id: 7,
    //     year: 2000,
    //     description: 'Grade 12',
    //     place: '',
    //     type: 'Certificate',
    //     certificate: ''
    // },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})

