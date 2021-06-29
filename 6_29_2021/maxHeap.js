class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  } 

  getLeftChild(idx) {
    return 2 * idx;
  }

  getRightChild(idx) {
    return 2 * idx + 1;
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;

    let parentIdx = this.getParent(idx);
    if (this.array[idx] > this.array[parentIdx]) {
      [ this.array[idx], this.array[parentIdx] ] = [ this.array[parentIdx], this.array[idx] ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    let max = this.array[1];
    this.array[1] = this.array.pop();
    this.siftDown(1); //call siftDown on the root node, which is at index 1;
    return max;
  }

  siftDown(idx) {
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let ary = this.array;
    let leftVal = ary[leftIdx];
    let rightVal = ary[rightIdx];
    let val = ary[idx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;
    if (val > leftVal && val > rightVal) return;

    let swapIdx = (leftVal > rightVal) ? leftIdx : rightIdx;
    [ ary[idx], ary[swapIdx] ] = [ ary[swapIdx], ary[idx] ];
    this.siftDown(swapIdx);
  }
}

function heapSort(array) {
  // Step 1: build the heap
  let heap = new MaxHeap();
  array.forEach(num => heap.insert(num));

  // Step 2: constructed the sorted array
  let sorted = [];
  while (heap.array.length > 1) {
      sorted.push(heap.deleteMax());
  }

  return sorted;
}

let heap = new MaxHeap();
heap.insert(42);
heap.insert(32);
heap.insert(24);
heap.insert(100);
heap.insert(50);
heap.insert(27);
console.log(heap.array);
console.log(heap.deleteMax());
console.log(heap.array);

let arr = [42, 32, 24, 100, 50, 27]
heapSort(arr);