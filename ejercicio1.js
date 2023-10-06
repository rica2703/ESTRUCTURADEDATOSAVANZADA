// TAREA: COMPLETAR EL BUSCAR QUE REGRESE UN ARREGLO CON TODAS LAS COINCIDENCIAS
class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(valor) {
        const newNodo = new Nodo(valor);
        if (this.root === null) {
            this.root = newNodo;
        } else {
            let currentNode = this.root;
            while (true) {
                if (valor < currentNode.valor) {
                    if (currentNode.izquierda === null) {
                        currentNode.izquierda = newNodo;
                        return true;
                    }
                    currentNode = currentNode.izquierda;
                } else {
                    if (currentNode.derecha === null) {
                        currentNode.derecha = newNodo;
                        return true;
                    }
                    currentNode = currentNode.derecha;
                }
            }
        }
    }

    buscar(valor) {
        let nodoActual = this.root;
        while (nodoActual !== null) {
            if (valor === nodoActual.valor) {
                return true;
            } else if (valor < nodoActual.valor) {
                nodoActual = nodoActual.izquierda;
            } else {
                nodoActual = nodoActual.derecha;
            }
        }
        return false;
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(2);
binaryTree.insert(3);
binaryTree.insert(8);

console.log(binaryTree.buscar(4)); // Output: true
console.log(binaryTree.buscar(1)); // Output: false