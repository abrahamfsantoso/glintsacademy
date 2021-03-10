const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function membuatCV () {
    console.log("Membuat CV");
    mengirimCV();
}

function mengirimCV () {
    console.log("Mengirim CV");
    rl.question("Lolos tahap administrasi ? (yes/no) ", (lolos) => {
        if (lolos=="yes") psikotes();
        else membuatCV(); 
    })
}

function psikotes () {
    console.log("Psikotes");
    rl.question("Lolos tahap psikotes ? (yes/no) ", (lolos) => {
        if (lolos=="yes") wawancaraHRD();
        else mengirimCV(); 
    })

}

function wawancaraHRD () {
    console.log("Wawancara HRD");
    rl.question("Lolos tahap wawancara HRD ? (yes/no) ", (lolos) => {
        if (lolos=="yes") wawancaraManager();
        else mengirimCV(); 
    })
}

function wawancaraManager () {
    console.log("Wawancara Manager");
    rl.question("Lolos tahap wawancara manager ?  (yes/no) ", (lolos) => {
        if (lolos=="yes") kerja();
        else mengirimCV(); 
    })
}

function kerja () {
    console.log("Kerja");
    rl.close();
}

membuatCV();

