//Funciones Flecha

// function saludar() {
//     return "Hola";
//   }
  
const saludar = () => 'Hola';

console.log(saludar())
// function division(a,b) {
//     return a / b;
//   }
  
const division = (a, b) => a / b;

console.log(division(6, 2));


// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }

const miNombre = (nombre) => `Mi nombre es ${nombre}`;

console.log(miNombre('Jairo'));

// function test2() {
//     console.log("Función test 2 ejecutada.");
//   }
//   function test1(callback) {
//     callback();
//   }	
  
const test2 = (estado) => `Función test2 ${estado}`;

console.log(test2('Ejecutada'));


//FOREACH

let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

//   Crea un array con la gente mayor de 25 años y muéstralo por consola.

  gente.forEach(personaMayor25 => {
    if (personaMayor25.edad > 25) {
        // console.log(personaMayor25);
    }
  })

  
//Crea un array con la gente que empieza por J. 

gente.forEach(inicialPersona =>{
    if (inicialPersona.nombre.charAt(0) === 'J'){
        // console.log(inicialPersona)
    }
})

  //MAP
 
//   Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.

const mayor25 = gente.map(persona => {
    if(persona.edad > 25) {
        return persona
    }
    
})
// console.log(mayor25);

const arrayMayor25 = mayor25.filter(mayor => mayor !== undefined)
console.log(arrayMayor25)


// Crea un array con la gente que empieza por J. 
const empiezaPorJ = gente.map(porJ => {
    if (porJ.nombre.charAt(0) === 'J') {
        return porJ
    }
})
// console.log(empiezaPorJ);

const arrayPorJ = empiezaPorJ.filter(letraJ => letraJ !== undefined)
console.log(arrayPorJ)

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]

const arrayNumeroElevado = numbers.map(numero => Math.pow(numero, numero));

console.log(arrayNumeroElevado)


//FILTER

const numeritos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Crea un segundo array que devuelva los impares

const arrayImpares = numeritos.filter(numerito => {
    if (numerito % 2 !==  0) {
        return numerito
    }
});
console.log(arrayImpares);

//Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */

     const veganFood = foodList.filter(vegan => {
        if(vegan.isVeggie === true) {
            console.log(`Que rico ${vegan.name} me voy a comer!!`)
        }
     })
    

//Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600

const numerosMultiplicados = numeros.reduce((a, b) => a * b);
console.log(numerosMultiplicados);


//EXTRAS 

//MAP
//Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [
    {
      name: "Pepe",
      role: "The Boss",
      hobbies: ["leer", "ver pelis"],
    },
    {
      name: "Ana",
      role: "becaria",
      hobbies: ["nadar", "bailar"],
    },
    {
      name: "Luis",
      role: "programador",
      hobbies: ["dormir", "comprar"],
    },
    {
      name: "Carlos",
      role: "secretario",
      hobbies: ["futbol", "queso"],
    },
  ];
  
  
  // Resultado esperado
  /*
      [
        'Pepe es TheBoss y le gusta leer y ver pelis',
        'Ana es becaria y le gusta nadar y bailar',
        'Luis es programador y le gusta dormir y comprar',
        'Ana es becaria y le gusta nadar y bailar',
        'Carlos es secretario y le gusta fútbol y queso'
      ]
 */

    const result = staff.map(person => `${person.name} es ${person.role} y le gusta ${person.hobbies.join(' y ')}`);
    
    console.log(result)

 //Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:

    const listaComida = ["Pizza", "Ramen", "Paella", "Entrecot"];
    const nacionalidad = ['Italia', 'Japón', 'Valencia'];

    const resultado = listaComida.map((comida, index) => {
        if(index === listaComida.length -1){
            return 'Aunque no como carne, el ' + comida + ' es sabroso'
        } else {
            return 'Como soy de ' + nacionalidad[index] + ', amo comer' + comida;
        }
    });

    console.log(resultado);


//FILTER

//Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

  const priceOver300 = inventory.filter(product => {
    if(product.price >= 300){
        console.log(product.name)
    }
  });
   

//REDUCE

//Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí!*/,
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
    ];
   
const myName = 'Jairo';

const finalSentence = sentenceElements.reduce((oldValue, currentValue) => {
    if(currentValue === '/* Tu nombre aquí*/') {
        return oldValue + ' ' + myName;
    } else {
        return oldValue + ' ' + currentValue
    }
})
console.log(finalSentence)
