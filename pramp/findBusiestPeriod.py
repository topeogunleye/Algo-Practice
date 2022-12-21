def find_busiest_period(data):
   
  max_people = -1
  max_people_ts = 0
  
  people_counter = 0
  
  
  for i, (ts, people, entered) in enumerate(data):
    if entered:
      people_counter += people
    else:
      people_counter -= people
    
    if (i + 1 >= len(data) or ts != data[i + 1][0]) and people_counter > max_people:
      max_people = people_counter
      max_people_ts = ts
     
    # if (data[i+1] && data[i+1][0] !== timeStamp) {
      # if the next timeStamp is different than the current timeStamp, then we have reached the end of the current time period
     # we can then add up the maxVisits array and reset it to an empty array
    
  print(max_people, max_people_ts)
  
  return max_people_ts

# Space O(1)
# Time complexity O(n)


https://www.linkedin.com/in/ogunleye/



#input:  data = [ [1487799425, 14, 1], 
#                 [1487799425, 4,  0],
#                 [1487799425, 2,  0], # 0 + 14  -4 -2 = 8
#                 [1487800378, 10, 1], # 8 + 10 = 18
#                 [1487801478, 18, 0], # 
#                 [1487801478, 18, 1], # 18
#                 [1487901013, 1,  0],
#                 [1487901211, 7,  1],
#                 [1487901211, 7,  0] ]

find_busiest_period([[1487799425,14,1], # 14
[1487799425,4,0], # 10
[1487799425,2,0], # 8
[1487800378,10,1], # 18
[1487801478,18,0], # 0 
[1487801478,18,1], # 18
[1487901013,1,0], # 17
[1487901211,7,1], # 24
[1487901211,7,0]]) # 17
