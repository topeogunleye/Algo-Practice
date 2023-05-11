  z_axis = [route[row][2] for row in range(len(route))]
  min_energy = 0
  energy_left = 0
  for pos in range(1,len(z_axis)):
    energy_left += z_axis[pos-1]-z_axis[pos]
    min_energy = min(min_energy, energy_left)
  if min_energy <=0:
    min_energy = -1*min_energy
  else :
    min_energy = 0
  return min_energy
#route = [ [0,   2, 10],
#          [3,   5,  0],
#          [9,  20,  6],
#          [10, 12, 0],
#          [10, 10,  8] ]
#print(calc_drone_min_energy(route))

