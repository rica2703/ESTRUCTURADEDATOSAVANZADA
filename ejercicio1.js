// TAREA: COMPLETAR EL BUSCAR QUE REGRESE UN ARREGLO CON TODAS LAS COINCIDENCIAS
// creamos la clase de nodos
class Node {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = izquierda;
        this.derecha = derecha;
    }
}
// definimos el arbol
class BinaryTree {
    constructor() {
        this.root = null;
    }
}
// funcion del arbol para 
insert(valor){
    // crear nodo
    const newNode = new Node(valor);
    // si el valor esta vacio
    if (this.root === null) {
        this.root = newNode;
    }
    else {
        // buscar la posicion en el arbol si ya tiene datos
        let currentNode = this.root;
        while (true) {
            if (valor < currentNode.valor) {
                // si el hijo de la izquierda esta vacio se inserta un nodo
                if (currentNode.izquierda === null) {
                    currentNode.izquierda = newNode;
                    return true;
                }
                // se mueve hacia el nodo de la izquierda
                currentNode = currentNode.izquierda;
            }
            else {
                // si el sub arbol derecho es nulo se inserta un nuevo nodo
                if (currentNode.derecha === null) {
                    currentNode.derecha = newNode;
                    return true;
                }
                // te mueves al nodo de la derecha 
                currentNode=currentNode.derecha;
            }
        }
    }
}
buscar(valor){
    // se inicia la busqueda en la raiz
let currentNode=this.root;

// recorre el arbol hasta que se encuentre una coincidencia


}