def quick_sort(array, lower, upper) # lower and upper are indexes
  if lower < upper # if there are at least two elements
    pivot_index = partition(array, lower, upper) # partition the array
    quick_sort(array, lower, pivot_index - 1) # sort the left side
    quick_sort(array, pivot_index + 1, upper) # sort the right side
  end
  array
end

def partition(array, lower, upper)
  pivot = array[lower] # choose the first element as the pivot
  start = lower + 1 # start at the second element
  last = upper # end at the last element
  
  while start <= last # while the start and end haven't crossed
    while start <= upper && array[start] < pivot # while the start is less than the pivot
      start += 1 # move the start up
    end
    while last >= lower && array[last] > pivot # while the end is greater than the pivot
      last -= 1 # move the end down
    end
    if start <= last # if the start and end haven't crossed
      array[start], array[last] = array[last], array[start] # swap the start and end
    end
  end
  array[lower], array[last] = array[last], array[lower] # swap the pivot with the end
  last # return the end
end

array = [3, 4, 1, 5, 2]
sorted_array = quick_sort(array, 0, array.length - 1)
puts sorted_array.inspect

