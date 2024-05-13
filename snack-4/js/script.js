// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

const listInvitati = ["luca", "aldo", "giovanni", "giacomo"];
const userName = prompt("inserire username");
if (listInvitati.includes(userName)) {
    console.log("Può participare");
} else {
    console.log("non può participare");
}
