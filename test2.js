const noun = ['You', 'She', 'Him'];
const verb = ['have', 'enjoy',];
const adj = ['wonderful day', 'your pain'];
const mess_gen = line => {
    let mess = [];
    let i_noun = Math.floor(Math.random()*noun.length);
    let i_verb = Math.floor(Math.random()*verb.length);
    let i_adj = Math.floor(Math.random()*adj.length);
    console.log(i_adj);
    console.log(i_noun);
    console.log(i_adj);
    
    //return console.log(noun(i_noun) + verb(i_verb) + adj(i_adj));
    mess.push(noun[i_noun]);
    mess.push(verb[i_verb]);
    mess.push(adj[i_adj]);
    console.log(mess.join(' '));
}
mess_gen()