

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];

let domain = [];

for (p in pronoun)
    for (a in adj)
        for (n in noun)
            domain.push(pronoun[p]+adj[a]+noun[n]+'.com');

let div = document.querySelector('.domain_generator');

for (i in domain) {
    let node = document.createElement('p');
    let text = document.createTextNode(domain[i]);
    node.appendChild(text);
    div.appendChild(node);
}