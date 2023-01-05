#include <iostream>
#include <vector>
#include <queue>

using namespace std;

vector<int> sortKMessedArray( const vector<int>& arr, int k ) 
{
  priority_queue <int, vector<int>, greater<int> > pq = {};
  vector<int> sortedArr = {};
  
  for (int i = 0; i < min(k, (int)arr.size()); i++) {
    pq.push(arr[i]);
  }
  
  for (int i = k; i < arr.size(); i++) {
    pq.push(arr[i]);
    sortedArr.push_back(pq.top());
    pq.pop();
  }
  
  while (!pq.empty()) {
    sortedArr.push_back(pq.top());
    pq.pop();
  }
  
  return sortedArr;
}

int main() {
  return 0;
}
/*
Brute force:
T: O(NlogN)
M: O(1)


1 4 5 2 3 7 8 6 10 9

minHeap: 9 10
sorted array: 1 2 ... 6.. 9 10
    
T: O(N*log(K))
M: O(K)
    

sortedArray: 1 4


*/