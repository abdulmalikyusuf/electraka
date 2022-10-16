import { volunteers } from "./volunteers"

const lgas = ['Maiduguri', 'Askira/Uba', 'Abadam', 'Ngala', 'Bayo', 'Gubio', 'Kala/Balge', 'Biu', 'Guzamala', 'Mafa', 'Chibok', 'Kaga', 'Konduga', 'Damboa', 'Kukawa', 'Bama', 'Gwoza', 'Magumeri', 'Jere', 'Hawul', 'Marte', 'Dikwa', 'Kwaya Kusar', 'Mobbar', 'Shani', 'Monguno', 'Nganzai']
export const rvalidVotes = {
    "LGA1": 8,
    "LGA2": 11,
    "LGA3": 9,
    "LGA4": 2,
    "LGA5": 3,
}
export const validVotes = lgas.map(lga => {
    return {"lga": lga, votes: Math.ceil(Math.random()*100)}
})
export const invalidVotes = lgas.map(lga => {
    return {"lga": lga, votes: Math.ceil(Math.random()*10)}
})
export const party = lgas.map(lga => {
    return {"lga": lga, votes: Math.ceil(Math.random()*80)}
})

export const votesValidity = {
    labels: validVotes.map(vote => vote.lga),
    series: [{title: "Valid Votes", series:validVotes.map(vote => vote.votes), backgroundColor:"#3361FF"},
    {title: "Valid Votes", series:invalidVotes.map(vote => vote.votes), backgroundColor:"#29CC39"}]
}
export const party1Votes = {
    x: validVotes.map(vote => Object.keys(vote).toString()),
    y0: validVotes.map(vote => Object.values(vote).toString()),
    y1: party.map(vote => Object.values(vote).toString())
}
export const partyVotes = {
    labels: validVotes.map(vote => vote.lga),
    series: [{title: "Valid Votes", series:validVotes.map(vote => vote.votes), backgroundColor:"#3361FF"},
    {title: "APC Votes", series:party.map(vote => vote.votes), backgroundColor:"#29CC39"}]
}

console.log(partyVotes)
export const electionParticipation = {
    label: ["Registered Voters", "Votes Cast"],
    data: [2,3]

}
