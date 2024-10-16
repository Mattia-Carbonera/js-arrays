const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
let reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  let switchTeacher = teachers[i];
  reversedTeachers.push(switchTeacher);
}

console.log(`Task "Bonus" 1) ${reversedTeachers}`);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

const teacherMember = teachers.length;

for (let i = 0; i < teacherMember; i++) {
  let teacherIndex = teachers[i].length;

  if (teacherIndex >= 5) {
    longNames.push(teachers[i]);
  }
}

console.log(`Task "Bonus" 2) ${longNames}`);

// 3. Rimuovi 'Ed' dall'array teachers

teachers.splice(1, 1);
console.log(`Task "Bonus" 3) ${teachers}`);
