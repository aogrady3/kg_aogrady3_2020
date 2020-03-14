/**
 *    Max Heap Class Definition
 *    
 *    Followed the basic heap conventions while creating this heap. 
 *     1. 
 *     2.
 */

class MaxHeap {
    constructor(array) {
        this.heap = this.buildHeap(array)
    }
    //O(n) time || O(1) space 
    buildHeap(array) {
        const firstParent = Math.floor((array.length -2) / 2 )
        for (let currentIndex = firstParent; currentIndex >=0; currentIndex--) {
            this.siftDown(currentIndex, array.length - 1, array)
        }
        return array
    }
    
    // O(log(n)) time || O(1) space
    siftDown(currentIndex, endIndex, heap) {
        let firstChildIndex = currentIndex * 2 + 1
        while (firstChildIndex <= endIndex) {
            
            //Check if second child is possible
            const secondChildIndex = (currentIndex * 2 + 2 <= endIndex) ? currentIndex * 2 + 2 : -1
            let indexToSwap;

            //Find greater vaule for swap
            if(secondChildIndex !== -1 && heap[secondChildIndex] > heap[firstChildIndex]) {
                indexToSwap = secondChildIndex
            } else {
                indexToSwap = firstChildIndex
            }

            //Swap and repeat until in right position and then return
            if(heap[indexToSwap] > heap[currentIndex]) {
                this.swap(indexToSwap, currentIndex, heap)
                currentIndex = indexToSwap
                firstChildIndex = currentIndex * 2 + 1
            } else {
                return
            }
        } 
    }

    //O(1) time || O(1) space
    peek() {
        return this.heap[0];
    }

    // O(log(n)) time || O(1) space
    changeValue(index, value) {
        this.heap[index] = value
        this.siftDown(index, this.heap.length -1, this.heap)
    }

    //O(1) time || O(1) space
    swap(i, j, heap) {
        let temp = heap[i]
        heap[i] = heap[j]
        heap[j] = temp
    }
}

module.exports = MaxHeap