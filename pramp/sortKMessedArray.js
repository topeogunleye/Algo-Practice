// efficient solution
function sortKMessedArray(arr, k) {
  // the distance between the current element and the correct position is less than or equal to k

  // create a min heap of size k + 1
  // insert the first k + 1 elements into the heap
  // for the rest of the elements, remove the min element from the heap and insert the next element
  // insert the remaining elements from the heap into the array

  // O(nlog(k+1))
  // O(k+1)


  class MinHeap {
    // Build heap using array of ints
    constructor(array) {
      this.heap = this.buildHeap(array);
    }
    // O(n) time | O(1) space
    buildHeap(array) {
      const firstParentIdx = Math.floor((array.length - 2) / 2);
      for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        this.bubbleDown(currentIdx, array.length - 1, array);
      }
      return array;
    }
    // O(log(n)) time | O(1) space
    bubbleDown(currentIdx, endIdx, heap) {
      let childOneIdx = currentIdx * 2 + 1;
      while (childOneIdx <= endIdx) {
        const childTwoIdx =
          currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap;
        if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
          idxToSwap = childTwoIdx;
        } else {
          idxToSwap = childOneIdx;
        }
        if (heap[idxToSwap] < heap[currentIdx]) {
          this.swap(currentIdx, idxToSwap, heap);
          currentIdx = idxToSwap;
          childOneIdx = currentIdx * 2 + 1;
        } else {
          return;
        }
      }
    }
    // O(log(n)) time | O(1) space
    bubbleUp(currentIdx, heap) {
      let parentIdx = Math.floor((currentIdx - 1) / 2);
      while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      }
    }
    // O(1) time | O(1) space
    peek() {
      return this.heap[0];
    }
    // O(log(n)) time | O(1) space
    remove() {
      this.swap(0, this.heap.length - 1, this.heap);
      const valueToRemove = this.heap.pop();
      this.bubbleDown(0, this.heap.length - 1, this.heap);
      return valueToRemove;
    }
    // O(log(n)) time | O(1) space
    insert(value) {
      this.heap.push(value);
      this.bubbleUp(this.heap.length - 1, this.heap);
    }
    swap(i, j, heap) {
      const temp = heap[i];
      heap[i] = heap[j];
      heap[j] = temp;
    }
  }
  
  // create a min heap of size k + 1
  const minHeap = new MinHeap();

  // insert the first k + 1 elements into the heap
  for (let i = 0; i < k + 1; i++) {
    minHeap.insert(arr[i]);
  }

  // for the rest of the elements, remove the min element from the heap and insert the next element
  for (let i = k + 1; i < arr.length; i++) {
    arr[i - k - 1] = minHeap.removeMin();
    minHeap.insert(arr[i]);
  }

  // insert the remaining elements from the heap into the array
  for (let i = 0; i < k + 1; i++) {
    arr[arr.length - k - 1 + i] = minHeap.removeMin();
  }

  return arr;
}


console.log(sortKMessedArray([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2))