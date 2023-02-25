export interface experience {
    name:string
    cer_link:string
    date:string
    proj:string
    proj_link:string
    description:string
    tags:string[]
    points:string[]
  }
  export const work: experience[] = [
      
    {
        name:'Electrothon 4.0 by NIT Hamirpur',
        cer_link:'https://devfolio.co/projects/svaasthy-4e9c',
        date:'Feb 2022',
        proj:'Pandemic Theme.',
        proj_link:'https://drive.google.com/file/d/1p8H2HhcAfpUBLMbFf7wzaX8rcc985Ow9/view',
        description:'“Svaasthy”, Which enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.',
        tags:['Hackathon'],
        points:[
            'Winner under ',
        ]
    },
    {
        name:'HackOdisha by NIT Rourkela',
        cer_link:'https://devfolio.co/projects/mentally-e08e',
        date:'Sept 2021',
        proj:`Best Beginner's Team`,
        proj_link:'https://drive.google.com/file/d/1xBf81EgZHALMWQ3Xp7S1uYShBkV09gK4/view',
        description:`“Ment-Ally”, Which help's people to gain mental peace and stability.`,
        tags:['Hackathon'],
        points:[
            `Winner under `,
        ]
    },
      
    ];