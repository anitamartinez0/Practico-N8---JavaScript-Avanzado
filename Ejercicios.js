
    //Crear una funcion para generar el hash de un texto como numero entero
    //Usando métodos ya establecidos
    //Aqui tu codigo
    function convertirTexto(texto) {

        if(!texto.length){
            return null
        }
        var text = texto.split('')
        return text.reduce((h, c) => (c.charCodeAt(0) + h))
    }
    
    console.log(convertirTexto("Joaquin"))
         

    //      Hash Table
    //      Una hash table contiene un arreglo de "contenedores" donde puede guardar información.
    //      Para guardar un valor asociado a una key (string):
    //    - Correr la key a través de una función hash para transformarla a un número entero.
    //    - Establecer el par llave/valor en tu tabla hash -- Usa un set
    //    - Devuelve el valor almacenado en la tabla[índice] -- Usa un get
    //      Aqui tu codigo
    
    function HashTable() {

        hash(key){
            return key.reduce((h, c) => (c.charCodeAt(0)+h))
            suma+=key.charCodeAt(i)
        }
        
        set(key, value) {
        const index = this.hash(key)
        this.table[index] = [key, value]
        this.size
        }
        
        get(key){
            const target = this.hash(key)
            return this.table[target]
        }

    }
