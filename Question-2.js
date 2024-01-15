// 2. Forr the above JSON, iterate over all for loops( for, for in, for of, forEach)

let resumeDetails = {
    "name": "Rajkumar",
    "email": "rajkumaranbu192@gmail.com",
    "DOB": "19-02-2002",
    "phone": "+91-9791507082",
    "address": {
        "Street": "Idumban Kovil Street, Muthalipalayam",
        "City": "Coimbatore",
        "State": "TamilNadu",
        "Country": "India",
        "PinCode": "641407"
    },
    "education": [
        {
            "degree": "B.E CSE",
            "college": "Kathir college of Engineering",
            "year": "2019 - 2023",
            "CGPA":"7.6"
        },
        {
            "degree": "Higher Secondary School",
            "college": "PSG Sarvajana Higher secondary school",
            "year": "2017 - 2019"
        }
    ],
    "Experience": [
        {
            "Position": "Web Developer",
            "Company": "Indofen Furnaces",
            "startDate": "December 2023",
            "endDate": "Present",
            "responsibilities": [
                "Designing and developing websites for Commercial Purposes.",
                "Back-End Connection",
                "Trouble Shooting"
            ]
        }
    ],
    "skills": ["HTML", "CSS", "Javascript", "Bootstrap", "React.js", "Next.js", "node.js", "Express.js", "MongoDB", "SQL", "API"],
    "languages":["Tamil","English"]
}

// for loop
// iterating my resume details using for loop..

let keys = Object.keys(resumeDetails);
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    let value = JSON.stringify(resumeDetails[key]);
    console.log(key + ":" + value);
}



// for in loop
// iterating my resume details using for in loop..

for (let keys in resumeDetails) {
    let value = JSON.stringify(resumeDetails[keys]);
    console.log(keys + ":" + value);
}



// for of loop
// iterating my resume details using for of loop..

for (let keys of Object.keys(resumeDetails)) {
    let value = JSON.stringify(resumeDetails[keys]);
    console.log(keys + ":" + value);
}



// for Each loop
// iterating my resume details using for Each loop..

Object.keys(resumeDetails).forEach((keys) => {
    console.log(keys+":"+JSON.stringify(resumeDetails[keys]));
})
