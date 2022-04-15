# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
clients = Client.create([
    {
        name: "PwC",
        role: "Core Senior Software Developer - Senior Associate",
        urgency: "High",
        quantity: 1,
        skills_needed: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
        candidate: "Maria Rodriguez",
        email: "M.RD43@datapipertech.com"
    },
    {
        name: "PwC",
        role: "Core Senior Software Developer - Senior Associate",
        urgency: "High",
        quantity: 1,
        skills_needed: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
        candidate: "Maria Rodriguez",
        email: "M.RD43@datapipertech.com"
    },
    {
        name: "PwC",
        role: "Zendesk Developer",
        urgency: "Med",
        quantity: 1,
        skills_needed: "Zendesk Developer",
        candidate: "David Smith",
        email: "DavidS_33@datapipertech.com"
    },
    {
        name: "PwC",
        role: "Datavault 2.0",
        urgency: "High",
        quantity: 3,
        skills_needed: "Datavault 2.0 Certified",
        candidate: "Rob Adams",
        email: "2Robert@datapipertech.com"
    },
    {
        name: "PwC",
        role: "Snowflake data engineer",
        urgency: "Low",
        quantity: 1,
        skills_needed: "Java, Spark, Scala, Python",
        candidate: "Eliza Cath",
        email: "ElizaT_Cat@datapipertech.com"
    },
    {
        name: "Data piper",
        role: "Software Engineer",
        urgency: "Low",
        quantity: 4,
        skills_needed: "JS, HTML, CSS, ReactJS, Ruby, Ruby on Rails, SQL",
        candidate: "Wonjin Cho",
        email: "cwonjin1@gmail.com"
    }
])


# candidates = Candidate.create([
#     {
#         name: "Maria Rodriguez",
#         email: "M.RD43@datapipert",
#         role: "Maria Rodriguez",
#         skills: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
#         client: Client.first
#     },
#     {
#         name: "Maria Rodriguez",
#         email: "M.RD43@datapipert",
#         role: "Maria Rodriguez",
#         skills: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
#         client: Client.second
#     },
#     {
#         name: "David Smith",
#         email: "DavidS_33@datapipertech.com",
#         role: "Maria Rodriguez",
#         skills: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
#         client: Client.third
#     },
#     {
#         name: "Rob Adams",
#         email: "2Robert@datapipertech.com",
#         role: "Maria Rodriguez",
#         skills: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
#         client: Client.fourth
#     },
#     {
#         name: "Eliza Cath",
#         email: "ElizaT_Cat@datapipertech.com",
#         role: "Maria Rodriguez",
#         skills: "Java,Springboot Docker/Kubernetes, API/microservices/ Cloud",
#         client: Client.fifth
#     }
# ])