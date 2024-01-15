// 1. Create our own resume data in JSON Format


// I have Created my few Resume data in JSON format 
let Resume = {
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

console.log(Resume);