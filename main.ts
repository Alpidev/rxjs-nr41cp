let idDoc = document.getElementById("main");
export const pNode = {
  pNodeD: idDoc,
  addNodeP: function(txt: string) {
    let pnode = document.createElement("p");
    pnode.innerText = txt;

    this.pNodeD.appendChild(pnode);
  },
  pn: function() {
    let y = () => {
      return this.pNodeD;
    };
    return y();
  }
};
