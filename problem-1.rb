# problem-1.rb
# find sum of all multiples of 3 or 5 btwn 1 and 1000

def is_multiple(num)
  if num == 1000
    0
  elsif num % 3 == 0 || num % 5 == 0
    num + is_multiple(num+1)
  else
    is_multiple(num+1)
  end
end
puts is_multiple(1)