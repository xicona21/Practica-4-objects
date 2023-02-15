//persona esta definida como objeto.
let persona = { 
    nombre: "Xico",
    apellido: "Nava",
    getName: function () {  //Esta funcion utiliza las keys para retornar el nombre completo
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getAddress: function () {  //Esta funcion utiliza las keys para retornar la direccion completa
            return `Calle: ${this.calle} Colonia: ${this.colonia} CP: ${this.cp} Municipio: ${this.municipio}`
        }
    }
}

console.log(persona.getName()); //Imprime el nombre completo
console.log(persona.domicilio.getAddress());//Imprime la direccion completa