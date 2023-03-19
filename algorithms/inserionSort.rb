def insertion_sort(array)
  x = array.pop 

  i = array.length - 1

  while i >= 0 && array[i] > x
    array[i + 1] =

end



insertion_sort([1, 3, 2])
# => 1 3 3
#    1 2 3

puts '-' * 20

insertion_sort([1, 4, 6, 9, 3])
# => 1 4 6 9 9
#    1 4 6 6 9
#    1 4 4 6 9
#    1 3 4 6 9