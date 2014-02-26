var flashCards = [
{term: "pwd", definition: "print working directory"},
{term: "hostname", definition: "my computer's network name"},
{term: "mkdir", definition: "make directory"},
{term: "cd", definition: "change directory"},
{term: "ls", definition: "list directory"},
{term: "rmdir", definition: "remove directory"},
{term: "pushd", definition: "push directory"},
{term: "popd", definition: "pop directory"},
{term: "cp", definition: "copy a file or directory"},
{term: "mv", definition: "move a file or directory"},
{term: "less", definition: "page through a file"},
{term: "cat", definition: "print the whole file"},
{term: "xargs", definition: "execute arguments"},
{term: "find", definition: "find files"},
{term: "grep", definition: "find things inside files"},
{term: "man", definition: "read a manual page"},
{term: "apropos", definition: "find what man page is appropriate"},
{term: "env", definition: "look at your environment"},
{term: "echo", definition: "print some arguments"},
{term: "export", definition: "export/set a new environment variable"},
{term: "exit", definition: "exit the shell"},
{term: "sudo", definition: "DANGER! become super user root DANGER!"},
{term: "chmod", definition: "change permission modifiers"},
{term: "chown", definition: "change ownership"}
];

function $(id) {
    return document.getElementById(id);
}

var i = 0;

function buildFlashCard(i) {
     $("term").innerHTML = flashCards[i].term;
     $("term").onclick = function() {
        this.innerHTML = flashCards[i].definition;
    };
    $("progress").innerHTML = ((i + 1) + " of " + flashCards.length);
   }

buildFlashCard(i);

$("next").onclick = function () {
    i++;
    if (i < flashCards.length) {
      buildFlashCard(i);
  } else {    $("term").parentNode.replaceChild(document.createTextNode("All done!"), term);
      next.parentNode.removeChild(next);
  }
};  