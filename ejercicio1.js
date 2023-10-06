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
                // solo agrege el signo igual para asignar que se guarden los numeros menores o iguales en el lado izquierdo
                if (valor <= currentNode.valor) {
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
        // cree un contador
        let palabra="";
        let contador=0;
        while (nodoActual !== null) {
            if (valor === nodoActual.valor) {
                // incremento cada vez que encuentra el numero pedido y asigno el nuevo nodo el cual yo arriba puse que los valores
                // menor o igual se guardaran en el nodo izquierdo
                contador++;
                nodoActual=nodoActual.izquierda;
            } else if (valor < nodoActual.valor) {
                nodoActual = nodoActual.izquierda;
            } else {
                nodoActual = nodoActual.derecha;
            }
            // cree este if para que solo muestre el valor cuando el nodo en el que se encuentre sea null y mostrar la n cantidad de veces
            // que se encontro el numero solicitado
            if(nodoActual===null){
                // agrege esto para que cambie la palabra de veces o vez 
                if(contador==1){
                    palabra="vez";
                }
                else if(contador>1||contador<1){
                    palabra="veces";
                }
                return valor+" encontrado: "+contador+" "+palabra;
            }
        }
        
    }
}

const binaryTree = new BinaryTree();
binaryTree.insert(2);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(7);
// aqui modifique dentro del console el binaryTree por que solo estaba como tree y no estaba definida para la busqueda
console.log(binaryTree.buscar(5)); // Output: true
console.log(binaryTree.buscar(2)); // Output: false