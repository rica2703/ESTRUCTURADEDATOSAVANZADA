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
                currentNode = currentNode.derecha;
            }
        }
    }
}
buscar(valor) {
    // Se inicia la búsqueda en la raíz
    let nodoActual = this.raiz;

    // Recorre el árbol hasta que se encuentre una coincidencia
    while (nodoActual !== null) {
        // Si encuentras el valor, retorna
        if (valor === nodoActual.valor) {
            return true;
        }
        // Si el valor es mayor ve al sub-árbol izquierdo
        else if (valor < nodoActual.valor) {
            nodoActual = nodoActual.izquierda;
        }
        // Si el valor es mayor ve al sub-árbol derecho
        else {
            nodoActual = nodoActual.derecha;
        }
    }
    // Si no se encuentra el valor retorna un falso
    return false;
}
}
// Ejemplo de uso
const binaryTree = new BinaryTree();
binaryTree.insertar(5);
binaryTree.insertar(2);
binaryTree.insertar(3);
binaryTree.insertar(8);

//Método buscar y notificar si encuentra primera coincidencia
console.log(tree.buscar(4)); // Output: true
console.log(tree.buscar(6)); // Output: false