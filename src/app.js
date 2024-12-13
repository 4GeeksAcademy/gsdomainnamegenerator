/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  for (let proInd = 0; proInd < pronoun.length; proInd++) {
    for (let adjInd = 0; adjInd < adj.length; adjInd++) {
      for (let nounInd = 0; nounInd < noun.length; nounInd++) {
        for (let extInd = 0; extInd < extension.length; extInd++) {
          console.log(
            pronoun[proInd] + adj[adjInd] + noun[nounInd] + extension[extInd]
          );
        }
      }
    }
  }
};
